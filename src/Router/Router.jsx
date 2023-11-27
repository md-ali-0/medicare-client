import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../Layout/Dashboard/DashboardMain";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Contact from "../Pages/Contact/Contact";
import HealthcareProfessionalsHome from "../Pages/Dashboard/HealthcareProfessionals/HealthcareProfessionalsHome";
import OrganizersHome from "../Pages/Dashboard/Organizers/OrganizersHome";
import PerticipantsHome from "../Pages/Dashboard/Perticipants/PerticipantsHome";
import Error404 from "../Pages/Error/Error404";
import Home from "../Pages/Home/Home";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/camp-details/:campId",
                loader: ({ params }) =>
                    axios.get(`http://localhost:8080/camp-details/${params.campId}`),
                element: <CampDetails />,
            },
            {
                path: "/available-camps",
                element: <AvailableCamps />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardMain />,
        errorElement: <Error404 />,
        children: [
            {
                path: "participant-home",
                element: <PerticipantsHome />,
            },
            {
                path: "organizer-home",
                element: <OrganizersHome />,
            },
            {
                path: "professional-home",
                element: <HealthcareProfessionalsHome />,
            },
        ],
    },
]);

export default Router;
