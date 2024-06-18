import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";



const AllSpot = () => {

    const spots = useLoaderData();

    return (
        <div>
            <h1 className="text-xl font-semibold text-center">All Spots of Trip-Tailor</h1>
            <h1 className="text-sm font-semibold text-red-500 text-center">Sorting with ascending order by average cost</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
            {
                spots.map(spot => <SpotCard
                key={spot._id}
                spot={spot}
                ></SpotCard>)
            }
            </div>
        </div>
    );
};

export default AllSpot;