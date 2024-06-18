import { useLoaderData } from "react-router-dom";
import SpotCard from "../../components/Spot/SpotCard";
import Countries from "../../components/Countries/Countries";
import StatBar from "../../components/Extra/StatBar";
import Banner from "../../components/Extra/Banner";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Contact from "../../components/Extra/Contact";


const Home = () => {

    const spots = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <div className="space-y-4">
                <h1 className="text-5xl font-semibold">Trending Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
            {
                spots.map(spot => <SpotCard
                key={spot._id}
                spot={spot}
                ></SpotCard>)
            }
            </div>
            </div>
            <Countries></Countries>
            <Review></Review>
            <StatBar></StatBar>
            <Contact></Contact>
        </div>
    );
};

export default Home;