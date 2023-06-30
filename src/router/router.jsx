import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProductDetailContainer from "../pages/ProductDetailContainer";
import Layout from "../layout/Layout";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[            
            {
                path:'/',
                element: <div>Home</div>
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/signin',
                element: <SignIn/>
            },
            {
                path:'/equipos',
                element: <ProductDetailContainer/>
            },
            {
                path:'/equipos/detail/:id',
                element: <ProductDetail/>
            },
        ]
    },
    
])
export default router