import { createBrowserRouter } from "react-router-dom";
import { Layout, SignUp, SignIn, ProductDetailContainer, ProductDetail } from './index'
import ProtectedRoute from "./ProtectedRoute";
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
                element: (
                    <ProtectedRoute>
                        <SignUp/>
                    </ProtectedRoute>)
            },
            {
                path:'/signin',
                element: (
                    <ProtectedRoute>
                <SignIn/>
                    </ProtectedRoute>)
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