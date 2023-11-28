import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import FAQ from "./Faq";
import NewsLetter from "./NewsLetter";
import PopularCamps from "./PopularCamps";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import UpComingCamps from "./UpComingCamps";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MediCare | Home</title>
            </Helmet>
            <Container>
                <Slider />
                <PopularCamps />
                <UpComingCamps />
                <Testimonials />
                <FAQ />
                <NewsLetter />
            </Container>
        </>
    );
};

export default Home;
