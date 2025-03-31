import HomeContainer from "@/components/HomeContainer/HomeContainer";
import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";
import HomeSection from "./home/HomeSection";
import ServicesSection from "./home/ServicesSection";
import { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>
            <HomeSection />
            <HomeContainer>
                <ServicesSection />
                <hr></hr>
                <AboutSection />
                <ContactSection />
            </HomeContainer>
        </Fragment>
    );
};

export default Home;
