import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpotCard from './SpotCard';

const ByCountry = () => {
    const { country } = useParams();
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://trip-tailor-server.vercel.app/spots/countries/${country}`);
                const data = await response.json();
                setCountryData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchData();
    }, [country]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div><h2 className='text-center text-2xl'>All Spots of <span className='text-orange-800'>{country}</span></h2></div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-5 my-3'>
                {loading ? (
                    <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600'>Loading...</div> // Show loading spinner while fetching data
                 ) : (
                    countryData?.map(spot => <SpotCard
                    key={spot._id}
                    spot={spot}
                    ></SpotCard>)
                    )
                }
            
            </div>
        </div>
        
    );
};

export default ByCountry;

