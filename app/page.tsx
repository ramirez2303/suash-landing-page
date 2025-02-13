import AboutSection from "./home/AboutSection";
import HomeSection from "./home/HomeSection";
import ServicesSection from "./home/ServicesSection";

const Home = () => {
    return (
        <div>
            <HomeSection />
            <ServicesSection />
            <hr></hr>
            <AboutSection />
        </div>
    );
};

export default Home;
