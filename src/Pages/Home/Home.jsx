import Container from "../../components/Container";
import PopularCamps from "./PopularCamps";
import Slider from "./Slider";

const Home = () => {
    return (
        <Container>
            <Slider />
            <PopularCamps />
        </Container>
    );
};

export default Home;
