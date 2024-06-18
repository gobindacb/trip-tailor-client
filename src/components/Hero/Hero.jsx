import Slider from "../Slider/Slider";
import logo from "../../assets/logo.png"

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-2 max-w-lg mx-auto text-center lg:text-left mt-4">
                <h1 className="text-3xl lg:text-7xl font-bold mb-4">Trip Tailor</h1>
                <p className="text-base lg:text-lg mb-4">Your ultimate destination for personalized travel experiences.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    Explore Now
                </button>
                <div className="divider"></div>
                <div className=" flex items-center justify-between mt-1 px-2">
                    <img className="w-24 h-20" src={logo} alt="logo" />
                    <h4>Crafting your perfect gateway</h4>
                </div>
            </div>
            <div className="col-span-3">
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Hero;