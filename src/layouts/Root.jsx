import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="w-11/12 mx-auto">
           <Outlet></Outlet> 
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;