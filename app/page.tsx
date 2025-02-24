import HomeContainer from "@/components/HomeContainer/HomeContainer";
import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";
import HomeSection from "./home/HomeSection";
import ServicesSection from "./home/ServicesSection";
export const dynamic = 'auto'

const Home = () => {
    return (
        <div>
            <HomeSection />
            <HomeContainer>
                <ServicesSection />
                <hr></hr>
                <AboutSection />
                <ContactSection />
            </HomeContainer>
        </div>
    );
};

export default Home;
