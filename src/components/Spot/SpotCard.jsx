import { Link } from "react-router-dom";


const SpotCard = ({ spot }) => {
    const { _id, photo, spot_name, country, location, description, cost, season, time, visitors, email, name } = spot;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={photo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">{spot_name}</h2>
                    <div className="flex justify-between">
                        <h2 className="card-title">{location}</h2>
                        <h2 className="card-title">{country}</h2>
                    </div>
                    <h2 className="text-sm font-semibold text-center">Average cost: ${cost}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;