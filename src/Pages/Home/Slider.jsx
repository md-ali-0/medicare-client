import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
    const slides = [
        {
            url: "https://i.ibb.co/dLMYkh2/1.jpg",
        },
        {
            url: "https://i.ibb.co/T1jsg2f/2.jpg",
        },
        {
            url: "https://i.ibb.co/fp6zXkw/3.jpg",
        },
        {
            url: "https://i.ibb.co/mvpFt8b/4.jpg",
        },
        {
            url: "https://i.ibb.co/BNrbNXm/5.jpg",
        },
        {
            url: "https://i.ibb.co/2krQgjb/6.jpg",
        },
        {
            url: "https://i.ibb.co/G31JYFN/7.jpg",
        },
        {
            url: "https://i.ibb.co/k9Gg88L/8.jpg",
        },
        {
            url: "https://i.ibb.co/cr8Pmsp/9.jpg",
        },
        {
            url: "https://i.ibb.co/Wyr2QHQ/10.jpg",
        },
    ];
    return (
        <div className="px-3 py-8">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper rounded-xl"
            >
                {slides.map((img) => (
                    <SwiperSlide key={img.url}>
                        <img className="object-cover object-center w-full" src={img.url} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
