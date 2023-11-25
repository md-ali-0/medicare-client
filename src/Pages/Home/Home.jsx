import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
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
        </Container>
    );
};

export default Home;
