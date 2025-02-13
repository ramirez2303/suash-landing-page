import { RetroGrid } from "@/components/magicui/retro-grid";
import HomeSection from "./home/HomeSection";

const Home = () => {
    return (
        <div>
            <HomeSection />
            <div
                style={{
                    height: "100vh",
                    transform: "rotate(180deg)",
                }}
            >
                <RetroGrid angle={180} opacity={0.4} />
            </div>
        </div>
    );
};

export default Home;
