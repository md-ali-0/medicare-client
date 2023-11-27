import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useOrganizer from "../hooks/useOrganizer";

const ProfessionalRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [professional, isProfessionalPending] = useOrganizer();

    if (loading || isProfessionalPending) {
        return <Loader />;
    }
    if (user && professional) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default ProfessionalRouter;
