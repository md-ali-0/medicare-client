import { useQuery } from "@tanstack/react-query";
import { Carousel } from "flowbite-react";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Review from "./Review";

const Testimonials = () => {
    const axios = useAxiosPublic();
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ["popularCamps"],
        queryFn: async () => {
            const { data } = await axios.get(`/reviews`);
            return data;
        },
    });
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="px-3 py-2">
            <SectionTitle heading={"Testimonials"} subHeading={"What Our Participants Say"} />
            <div className="bg-primary/20 py-10 rounded-xl mt-5">
                <Carousel slideInterval={5000} indicators={false}>
                    {reviews.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;
