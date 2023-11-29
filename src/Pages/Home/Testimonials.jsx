import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Review from "./Review";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

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
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    lazy='true'
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper rounded-xl"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <Review review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
