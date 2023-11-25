import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Error404 from "../Pages/Error/Error404";
import Home from "../Pages/Home/Home";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Router;
