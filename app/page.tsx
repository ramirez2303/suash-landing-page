import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";
import HomeSection from "./home/HomeSection";
import ServicesSection from "./home/ServicesSection";

const Home = () => {
    return (
        <div>
            <HomeSection />
            <ServicesSection />
            <hr></hr>
            <AboutSection />
            <ContactSection />
        </div>
    );
};

export default Home;
