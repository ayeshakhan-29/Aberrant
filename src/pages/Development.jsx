import React from "react";
import design from "../assets/design.png";
import DevSolutions from "../Components/Sections/DevSolutions";
import DistinctiveAdvantages from "../Components/Sections/DistinctiveAdvantages";
import RecentWork from "../Components/Sections/RecentWork";
import DevWorkProcess from "../Components/Sections/DevWorkProcess";
import BannerSection from "../Components/Reusable Components/BannerSection";
import Footer from "../Components/Navigation/Footer";

export default function Development() {
    return (
        <div id="Design" className="w-full h-full flex flex-col justify-center">
            <BannerSection
                heading="Development"
                tagline="Transforming Digital Identities with Expert Dev Solutions"
                desc="Experience the evolution of digital identities with our expert development strategies." />
            <DevSolutions />
            <DevWorkProcess />
            <div className="md:mx-40 mt-20 p-4">
                <h1 className="md:text-4xl text-xl mb-4">The Value We Add</h1>
                <p className="md:mr-60 md:text-base text-sm font-thin">
                    Our approach involves keenly grasping the industry's essence, sculpting exclusive frameworks and personalized solutions. Specializing in custom development, ensuring your digital footprint stands out in the online landscape. By combining insights and innovative coding techniques, we curate digital experiences that not only meet but exceed expectations.
                </p>
            </div>
            <DistinctiveAdvantages />
            <RecentWork />
            <Footer />
        </div>
    );
}
