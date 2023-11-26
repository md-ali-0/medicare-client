import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "../Shared/CampCard";

const PopularCamps = () => {
    const axios = useAxiosPublic();
    const { data: popularCamps = [], isLoading } = useQuery({
        queryKey: ["popularCamps"],
        queryFn: async () => {
            const { data } = await axios.get("/popular-camps");
            return data;
        },
    });
    if (isLoading) {
        return <Loader />;
    }
    return (
        <section className="text-gray-600 body-font py-5">
            <SectionTitle heading={'Popular Camps'} subHeading={'Explore Events Aimed at Community Wellness'}/>
            <Container>
                <div className="px-5 py-8 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 -m-4 ">
                        {
                    popularCamps.map(camp=><CampCard key={camp._id} camp={camp}/>)
                    }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PopularCamps;
