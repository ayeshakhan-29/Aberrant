import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function DevAdvantages() {
    return (
        <div className="w-full h-full flex justify-center md:items-center md:mt-32 md:py-10 p-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Distinctive Advantages</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 md:mb-5">Dive into the world of business transformation with innovative design at Aberrant. Refining brand elements to conceptualize unique designs, ensuring every step is meticulously undertaken to deliver a distinctive and impactful visual identity for your brand.</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4" >
                        <Card
                            url={design}
                            heading="Strategic Planning "
                            desc="Crafting strategic plans that align with brand’s objectives, and optimizing development pathways for successful project outcomes.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Concept Creation"
                            desc="Infusing design concepts, fostering visual identity and brand cohesion in the development phase making them responsive and mobile-friendly.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Implementation"
                            desc="Executing custom design and development plans with precision, bringing design concepts to life through effective and seamless implementation.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Testing and QA"
                            desc="Rigorous testing and quality assurance protocols to ensure optimal performance and functionality before project deployment. "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Launch and Deployment"
                            desc="Efficient launch and deployment strategies, ensuring effortless integration and delivery of the developed solutions for our
                            partners. "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Post Launch Support"
                            desc="Continued testing post-launch support and maintenance to address any potential issues, providing ongoing support for optimal project performance."
                        >
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}