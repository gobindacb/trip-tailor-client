import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import { useState } from 'react';

const AddTouristSpot = () => {

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleSelectChange = (e) => {
        setSelectedCountry(e.target.value);
    };


    const { user } = UseAuth();

    const handleAddSpot = event => {
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

        const newSpot = { photo, spot_name, country, location, description, cost, season, time, visitors, email, name }
        console.log(newSpot);

        // send data (new-spot) to the server
        fetch('https://trip-tailor-server.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    // Reset form fields
                    form.reset();
                    setSelectedCountry('');
                }
            })

    }

    return (
        <div>
            <h4 className="text-5xl">Add Spot</h4>
            <form onSubmit={handleAddSpot}>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Use Image URL"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot" placeholder="tourists_spot_name"
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
                            <option value="United states of America">United states of America</option>
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
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="average_cost
"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="season" placeholder="seasonality - like summer, winter"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="travel_time => like- 7 days"
                                className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">total Visitors PerYear</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" placeholder="total Visitors PerYear => like- 10000
"
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
                    <input type="submit" value="Add Spot" className="btn btn-secondary" />
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;