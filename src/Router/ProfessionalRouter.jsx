import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useProfessional from "../hooks/useProfessional";

const ProfessionalRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [professional, isProfessionalPending] = useProfessional();

    if (loading || isProfessionalPending) {
        return <Loader />;
    }
    if (user && professional) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace/>;
};

export default ProfessionalRouter;