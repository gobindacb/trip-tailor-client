import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";



const Countries = () => {

    const [countries, setCountries] = useState(['']);

    useEffect(() =>{
        const fetchCountries = async () => {
            const res = await fetch('https://trip-tailor-server.vercel.app/countries');
            const data = await res.json();
            setCountries(data);
        }
        fetchCountries();
        console.log(countries);
    }, []);

   

    return (
       <div className="space-y-4">
        <div className="">
        <h1 className="text-5xl font-semibold">Countries</h1>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
         {
            countries?.map(countr => <CountryCard
            key={countr._id}
            countr={countr}
            ></CountryCard>)
         }
        </div>
       </div>
    );
};

export default Countries;