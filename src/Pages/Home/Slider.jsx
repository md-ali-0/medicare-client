import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

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

    const [currentImage, setCurrentImage] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentImage === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentImage - 1;
        setCurrentImage(newSlide);
    };
    const nextSlide = () => {
        const isLastSlide = currentImage === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentImage + 1;
        setCurrentImage(newSlide);
    };
    const changeSlide = (index) => {
        setCurrentImage(index);
    };
    useEffect(() => {
        const interval = setTimeout(() => {
            const isLastSlide = currentImage === slides.length - 1;
            const newSlide = isLastSlide ? 0 : currentImage + 1;
            setCurrentImage(newSlide);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImage, slides.length]);
    return (
        <div className="h-[380px] md:h-[650px] w-full m-auto py-10 px-3 relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentImage].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, index) => {
                    return (
                        <div key={slide.url} className="text-xl cursor-pointer">
                            <RxDotFilled onClick={() => changeSlide(index)}></RxDotFilled>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
