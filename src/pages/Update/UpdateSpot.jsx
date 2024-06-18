import { useLoaderData } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateSpot = () => {
    const { user } = UseAuth();
    const editedSpot = useLoaderData();

    const {_id, photo, spot_name, country, location, description, cost, season, time, visitors, email, name } = editedSpot;
      
    const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };  

  const handleEditSpot = event => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const spot_name = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const email = form.email.value;
    const name = form.name.value;

    const updatedSpot = { photo, spot_name, country, location, description, cost, season, time, visitors, email, name };

    // send data (new-spot) to the server
    fetch(`https://trip-tailor-server.vercel.app/spot/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedSpot)
    })
        .then(res => res.json())
        .then(data => {
            console.log('Response data:',data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot edited & save successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to edit spot. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        })
        .catch(error => {
            console.error('Error updating spot:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to edit spot. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        })

}

    return (
        <div>
            <h2>Update/edit spot {location}</h2>
            <form onSubmit={handleEditSpot}>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" 
                            placeholder="Use Image URL"
                            defaultValue={photo}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot" placeholder="tourists_spot_name"
                            defaultValue={spot_name}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="w-full max-w-xs">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Select a country</label>
                        <select
                            id="country"
                            name="country"
                            value={selectedCountry}
                            onChange={handleSelectChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option disabled>Select a country</option>
                            <option value="United States of America">United States of America</option>
                            <option value="Canada">Canada</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Peru">Peru</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="location"
                            className="input input-bordered" 
                            defaultValue={location}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description"
                            defaultValue={description}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="average_cost"
                            defaultValue={cost}  
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="season" placeholder="seasonality - like summer, winter"
                            defaultValue={season}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="travel_time => like- 7 days"
                            defaultValue={time}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">total Visitors PerYear</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" placeholder="total Visitors PerYear => like- 10000"
                            defaultValue={visitors}
                            className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="User Email"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <input type="submit" value="Edit Spot & Save" className="btn btn-secondary" />
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;