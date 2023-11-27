import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../Layout/Dashboard/DashboardMain";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Contact from "../Pages/Contact/Contact";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import HealthcareProfessionalsHome from "../Pages/Dashboard/HealthcareProfessionals/HealthcareProfessionalsHome";
import OrganizersHome from "../Pages/Dashboard/Organizers/OrganizersHome";
import PerticipantsHome from "../Pages/Dashboard/Perticipants/PerticipantsHome";
import Error404 from "../Pages/Error/Error404";
import Error500 from "../Pages/Error/Error500";
import Home from "../Pages/Home/Home";
import AdminRouter from "./AdminRouter";
import OrganizerRouter from "./OrganizerRouter";
import PrivateRouter from "./PrivateRouter";
import ProfessionalRouter from "./ProfessionalRouter";
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
                element: <PrivateRouter><AvailableCamps /></PrivateRouter>,
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
                element: <OrganizerRouter><OrganizersHome /></OrganizerRouter>,
            },
            {
                path: "professional-home",
                element: <ProfessionalRouter><HealthcareProfessionalsHome /></ProfessionalRouter>,
            },
            {
                path: "admin-home",
                element: <AdminRouter><AdminHome/></AdminRouter>,
            },
        ],
    },
    {
        path: '/unAuthorize-Access',
        element: <Error500/>
    }
]);

export default Router;
