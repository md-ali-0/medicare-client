import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "../Shared/CampCard";

const UpComingCamps = () => {
    const axios = useAxiosPublic();
    const { data: upcomingCamps = [], isLoading } = useQuery({
        queryKey: ["upcomingCamps"],
        queryFn: async () => {
            const { data } = await axios.get(`/upcoming-camps`);
            return data;
        },
    });
    if (isLoading) {
        return <Loader />;
    }
    return (
        <section className="text-gray-600 body-font py-5">
            <SectionTitle
                heading={"Popular Camps"}
                subHeading={"Explore Events Aimed at Community Wellness"}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 -m-4 ">
                {upcomingCamps.slice(0, 6).map((camp) => (
                    <CampCard key={camp._id} camp={camp} />
                ))}
            </div>
        </section>
    );
};

export default UpComingCamps;
