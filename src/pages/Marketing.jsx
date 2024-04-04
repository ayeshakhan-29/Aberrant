import React from "react";
import design from "../assets/design.png";
import MarketingSolutions from "../Components/Sections/MarketingSolutions";
import MarketingStrategies from "../Components/Sections/MarketingStrategies";
import RecentWork from "../Components/Sections/RecentWork";
import MarketingWorkProcess from "../Components/Sections/MarketingWorkProcess";
import BannerSection from "../Components/Reusable Components/BannerSection";
import Footer from "../Components/Navigation/Footer";

export default function Marketing() {
    return (
        <div id="Design" className="w-full h-full flex flex-col justify-center">
            <BannerSection
                heading="Marketing"
                tagline="Empowering Growth through Personalized Solutions"
                desc="Transform Your Brand's Presence with our customized marketing solutions." />
            <MarketingSolutions />
            <MarketingWorkProcess />
            <div className="md:mx-40 mt-20 p-4">
                <h1 className="md:text-4xl text-xl mb-4">The Value We Add</h1>
                <p className="md:mr-60 md:text-base text-sm font-thin">
                    Bringing value through effective strategies, engaging content, and targeted approaches, ensuring the brand excels in the digital realm with lasting impact. With a growth mindset and continuous learning, refining campaigns based on performance reviews, fostering a dynamic and successful digital marketing partnership.
                </p>
            </div>
            <MarketingStrategies />
            <RecentWork
                desc="Immerse in our Recent Marketing Triumphs, a display of strategic brand stories and impactful connections. Witness how we've optimized content, monitored performance, and elevated brand awareness through targeted campaigns and measurable results.                " />
            <Footer />
        </div>
    );
}
