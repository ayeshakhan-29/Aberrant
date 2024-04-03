import React from "react";
import design from "../assets/design.png";
import DesignSolutions from "../Components/Sections/DesignSolutions";
import DistinctiveAdvantages from "../Components/Sections/DistinctiveAdvantages";
import RecentWork from "../Components/Sections/RecentWork";
import DesignWorkProcess from "../Components/Sections/DesignWorkProcess";

export default function Design() {
    return (
        <div id="Design" className="w-screen h-full flex flex-col justify-center">
            <div className="flex flex-wrap w-full justify-center items-center text-center mb-20 px-4 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:content-evenly ">
                    <div className="align-right" data-aos="fade-right" data-aos-offset="300">
                        <h1 className="text-3xl font-semibold text-left mb-6">
                            Design
                        </h1>
                        <p className="my-3 text-2xl text-left md:text-4xl md:h-10 font-normal opacity-90">
                            Igniting Meaningful Brand Narratives
                        </p>
                        <p className="text-sm text-left md:text-base md:h-10 font-normal opacity-90">
                            Visually transforming your brand identity with clarity and essence.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img src={design} alt="world" className="h-[45vh]" />
                    </div>
                </div>
            </div>
            <DesignSolutions />
            <DesignWorkProcess />
            <div className="md:mx-40 md:mt-20">
                <h1 className="text-4xl mb-4">The Value We Add</h1>
                <p className="md:mr-60 md:text-sm">
                    In every design venture, we add a tangible value by forming strategic brand insights into compelling visuals. Our creations resonate with authenticity, creating brand perceptions, and driving meaningful connections, ensuring lasting impact in a competitive landscape. Going beyond aesthetics to deliver structures that not only captivate but also strategically align with business goals, ensuring each element serves a purpose and contributes to the overall success.
                </p>
            </div>
            <DistinctiveAdvantages />
            <RecentWork />
        </div>
    );
}
