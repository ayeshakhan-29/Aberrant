import React from "react";
import design from "../assets/design.png";
import DesignSolutions from "../Components/Sections/DesignSolutions";

export default function Design() {
    return (
        <div id="Design" className="w-screen h-screen flex justify-center">
            <div className="flex flex-wrap w-full justify-center md:w-[70rem] text-center md:flex-col mb-20 mx-5 px-4 mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 ">
                    <div data-aos="fade-right" data-aos-offset="300">
                        <h1 className="text-3xl font-semibold text-left mb-6">
                            Design
                        </h1>
                        <p className="my-3 text-2xl text-left md:text-base md:h-10 font-normal opacity-90">
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

        </div>
    );
}
