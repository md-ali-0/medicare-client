import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import FAQ from "./Faq";
import PopularCamps from "./PopularCamps";
import Slider from "./Slider";

const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>MediCare | Home</title>
            </Helmet>
            <Slider />
            <PopularCamps />
            <FAQ/>
        </Container>
    );
};

export default Home;
