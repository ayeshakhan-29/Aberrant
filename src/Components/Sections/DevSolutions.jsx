import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function DesignSolutions() {
    return (
        <div className="w-full h-full flex justify-center items-center md:mt-32 md:py-10 p-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Innovative Development Solutions</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 md:mb-5">Transform ideas into powerful online experiences. Our web development crafts bespoke websites, while app development delivers innovative solutions, ensuring a successful digital venture.</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-4 p-6" >
                        <Card
                            url={design}
                            heading="Web Development"
                            desc="Develop dynamic websites with strategic planning, design, mobile-friendly development, and post-launch support, aligning with business goals and optimizing online presence.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="App Development  "
                            desc="Innovative app solutions from concept to launch, ensuring attention to detail, collaboration, and post-deployment support for a successful digital venture.                            "
                        >
                        </Card>

                    </div>
                </div>
            </div>
        </div >
    )
}