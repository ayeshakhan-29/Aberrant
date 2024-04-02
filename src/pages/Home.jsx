import Hero from "./../Components/Sections/Hero";
import Navbar from "./../Components/Navigation/Navbar";
import Footer from "./../Components/Navigation/Footer";
import Services from "./../Components/Sections/Services";
import Approach from "./../Components/Sections/Approach";
import Insights from "../Components/Sections/Insights";

function Home() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <Approach />
            <Insights />
            <Footer />
        </div>
    );
}

export default Home;
