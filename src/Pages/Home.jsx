import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";
import About from "./About";
import TeamSection from "./TeamSection";


const Home = () => {
    return (
      <>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TeamSection></TeamSection>
        </>
    );
};

export default Home;