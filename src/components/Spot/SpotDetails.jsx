import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData();
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={spot.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Country: {spot.country}</h2>
                    <h2 className="card-title">Spot Name: {spot.spot_name}</h2>
                    <h2 className="card-title">Spot location: {spot.location}</h2>
                    <p>{spot.description}</p>
                    <div className="flex justify-between">
                        <p>Average cost: ${spot.cost}</p>
                        <p>Best Season for visit: {spot.season}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Time need for visit: {spot.time}</p>
                        <p>Per year visitors: {spot.visitors}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Posted by: {spot.name}</p>
                        <p>Email: {spot.email}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;