import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import ShowCaseCardDetails from "../Pages/Home/ShowCase/ShowCaseCardDetails";
import HumanCardDetails from "../Pages/Home/Human/HumanCardDetails";
import Product from "../Pages/Product/Product";
import ProductDetails from "../Pages/Product/ProductDetails";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/case/:id',
                element: <ShowCaseCardDetails />,
            },
            {
                path:'/card/:id',
                element: <HumanCardDetails />,
            },
            {
               path: 'product',
               element: <Product />,
            },
            {
                path: '/product/:id',
                element: <ProductDetails/>,
            }
        ]
    },
    {
        path: 'logIn',
        element: <Login />,
    },
    {
        path:'singUp',
        element: <SingUp />,
    }
])