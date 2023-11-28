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
import AddCamp from "../Pages/Dashboard/Organizers/AddCamp";
import ManageCamps from "../Pages/Dashboard/Organizers/ManageCamps";
import OrganizerProfile from "../Pages/Dashboard/Organizers/OrganizerProfile";
import OrganizersHome from "../Pages/Dashboard/Organizers/OrganizersHome";
import PerticipantsHome from "../Pages/Dashboard/Perticipants/PerticipantsHome";
import Error401 from "../Pages/Error/Error401";
import Error404 from "../Pages/Error/Error404";
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
        element: <PrivateRouter><DashboardMain /></PrivateRouter>,
        errorElement: <Error404 />,
        children: [
            {
                path: "participant-home",
                element: <PrivateRouter><PerticipantsHome /></PrivateRouter>,
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
            {
                path: 'organizer-profile',
                element: <OrganizerRouter><OrganizerProfile /></OrganizerRouter>,
            },
            {
                path: 'add-a-camp',
                element: <OrganizerRouter><AddCamp /></OrganizerRouter>,
            },
            {
                path: 'manage-camps',
                element: <OrganizerRouter><ManageCamps /></OrganizerRouter>,
            }
        ],
    },
    {
        path: '/unAuthorize-Access',
        element: <Error401/>
    }
]);

export default Router;
