import React from "react";
import Card from "./../Reusable Components/ProjectCard"
import project from "../../assets/project.jpg"

export default function RecentWork({ desc }) {
    return (
        <div className="w-full h-full flex justify-center items-center md:py-10 px-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Our Latest Works</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 mb-5">{desc}</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6" >
                        <Card
                            url={project}
                            heading="Bulls Eye"
                            desc="Bulls Eye, a design endeavor, created premium wood bats for young enthusiasts, infusing the brand with a distinctive personality and ensuring resonance and excellence in design ethos.                            "
                        >
                        </Card>
                        <Card
                            url={project}
                            heading="Northwest Limo NY"
                            desc="Northwest, an esteemed luxury limousine service, ascended through effective ad campaigns on Google and LinkedIn, enhancing visibility and achieving 25-30% conversion growth.                            "
                        >
                        </Card>
                        <Card
                            url={project}
                            heading="Nexodify"
                            desc="Engineered a user-friendly website for Nexodify that prioritizes performance and aligns with its ethos. By analyzing user behavior based on principles, we solidified Nexodify's position as a digital innovator.                            "
                        >
                        </Card>

                    </div>
                </div>
            </div>
        </div >
    )
}