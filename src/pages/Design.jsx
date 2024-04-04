import React from "react";
import design from "../assets/design.png";
import DesignSolutions from "../Components/Sections/DesignSolutions";
import DistinctiveAdvantages from "../Components/Sections/DistinctiveAdvantages";
import RecentWork from "../Components/Sections/RecentWork";
import DesignWorkProcess from "../Components/Sections/DesignWorkProcess";
import BannerSection from "../Components/Reusable Components/BannerSection";
import Footer from "../Components/Navigation/Footer";

export default function Design() {
    return (
        <div id="Design" className="w-full h-full flex flex-col justify-center">
            <BannerSection
                heading="Design"
                tagline="Igniting Meaningful Brand Narratives"
                desc="Visually transforming your brand identity with clarity and essence." />
            <DesignSolutions />
            <DesignWorkProcess />
            <div className="md:mx-40 mt-20 p-4">
                <h1 className="md:text-4xl text-xl mb-4">The Value We Add</h1>
                <p className="md:mr-60 md:text-base text-sm font-thin">
                    In every design venture, we add a tangible value by forming strategic brand insights into compelling visuals. Our creations resonate with authenticity, creating brand perceptions, and driving meaningful connections, ensuring lasting impact in a competitive landscape. Going beyond aesthetics to deliver structures that not only captivate but also strategically align with business goals, ensuring each element serves a purpose and contributes to the overall success.
                </p>
            </div>
            <DistinctiveAdvantages />
            <RecentWork
                desc="Dive into our Recent Designs, a gallery showcasing the creativity, uniqueness, and brand transformations we've sculpted. See our compelling designs, leaving a lasting impression on diverse projects with captivating visuals." />
            <Footer />
        </div>
    );
}
