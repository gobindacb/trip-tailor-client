import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import SpotDetails from "../components/Spot/SpotDetails";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import MyList from "../pages/MyList/MyList";
import UpdateSpot from "../pages/Update/UpdateSpot";
import AllSpot from "../components/Spot/AllSpot";
import ProtectedRoutes from "./ProtectedRoutes";
import ByCountry from "../components/Spot/ByCountry";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()  => fetch('https://trip-tailor-server.vercel.app/spot')
            },
            {
                path: '/allSpot',
                element: <AllSpot></AllSpot>,
                loader: ()  => fetch('https://trip-tailor-server.vercel.app/spots')
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add',
                element: <ProtectedRoutes><AddTouristSpot></AddTouristSpot></ProtectedRoutes>
            },
            {
                path: '/lists',
                element: <ProtectedRoutes><MyList></MyList></ProtectedRoutes>
            },
            {
                path: '/details/:id',
                element: <ProtectedRoutes><SpotDetails></SpotDetails></ProtectedRoutes>,
                loader: ({params}) => fetch(`https://trip-tailor-server.vercel.app/spot/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateSpot></UpdateSpot>,
                loader: ({params}) => fetch(`https://trip-tailor-server.vercel.app/spot/${params.id}`)
            },
            {
                path: '/byCountry/:country',
                element: <ByCountry></ByCountry>,
                
            }
            
        ]
    }
]);

export default routes;