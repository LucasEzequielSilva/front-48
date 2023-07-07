import { createBrowserRouter } from "react-router-dom";
import { Layout, SignUp, SignIn, ProductDetailContainer, ProductDetail, Mangas, Home } from './index'
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[            
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/mangas',
                element: <Mangas/>
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