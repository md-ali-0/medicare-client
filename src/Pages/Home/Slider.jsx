import { Carousel } from "flowbite-react";

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
        <div className="h-96 sm:h-[420px] xl:h-[580px] 2xl:h-96 py-8 px-3">
            <Carousel>
                {slides.map((img) => (
                    <img key={img.url} src={img.url} />
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
