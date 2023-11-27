import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useOrganizer from "../hooks/useOrganizer";

const OrganizerRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [organizer, isOrganizerPending] = useOrganizer();
    if (loading || isOrganizerPending) {
        return <Loader />;
    }
    if (user && organizer) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default OrganizerRouter;
