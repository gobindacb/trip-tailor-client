import { Link } from "react-router-dom";


const CountryCard = ({ countr }) => {
    const { _id, country, cover_photo, about } = countr;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={cover_photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{country}</h2>
                        <p className="dark:text-gray-800">{about}</p>
                    </div>
                    <Link to={`/byCountry/${country}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600">See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;