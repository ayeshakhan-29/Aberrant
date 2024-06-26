import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function DistinctiveAdvantages() {
    return (
        <div className="w-full h-full flex justify-center md:items-center md:mt-32 md:py-10 p-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Distinctive Advantages</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 md:mb-5">Dive into the world of business transformation with innovative design at Aberrant. Refining brand elements to conceptualize unique designs, ensuring every step is meticulously undertaken to deliver a distinctive and impactful visual identity for your brand.</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4" >
                        <Card
                            url={design}
                            heading="Conceptualize Designs"
                            desc="Transforming insights into creative concepts, to bring brand to life through imaginative and purposeful design concepts.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Foundation Analysis "
                            desc="Meticulously analyzing existing elements, incorporating analytics and optimization to set the foundation for our transformative design approach.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Research"
                            desc="In-depth market research drives strategic decisions, ensuring designs align with industry trends and consumer expectations.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Create Framework"
                            desc="Crafting a solid design framework integrates insights and purpose, laying the groundwork for impactful visual storytelling.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Understand Audience"
                            desc="Customizing designs begins with a deep understanding of your audience, ensuring resonance and engagement.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Feedback and Revision"
                            desc="Engaging in a collaborative process, gathering feedback, iterating, and revising designs to ensure client satisfaction.                            "
                        >
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}