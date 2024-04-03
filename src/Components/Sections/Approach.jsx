import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function Approach() {
    return (
        <div className="w-full h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col justify-center text-left text-white mx-5 gap-4">
                <h1 className="md:text-4xl text-2xl font-base md:ml-32">Aberrant’s Unique Approach</h1>
                <p className="md:justify-center md:font-normal text-sm font-thin md:mx-32 md:mb-5">Showcase our commitment to innovation, strategic thinking, and client-focused solutions, ensuring a transformative digital journey. With a results-driven mindset and an incorporation of core values, delivering meaningful and enduring value to businesses, contributing to their lasting success.</p>
                <div className="flex flex-wrap md:flex-row justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <Card
                            url={design}
                            heading="Innovation"
                            desc="Pioneering solutions that drive business transformation, boost brand visibility, and deliver a user-centric experience.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Brand Visibility "
                            desc="Enhance brand presence and recognition with customized strategies for maximum visibility and impact.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="User Experience"
                            desc="Prioritize user satisfaction with intuitive design and functionality, ensuring a seamless and engaging experience.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Custom Solutions"
                            desc="Craft bespoke solutions to meet unique challenges, aligning technology with business goals for optimal outcomes.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Results-Driven"
                            desc="Focused on achieving tangible results, measuring success through data-driven insights and continuous improvement.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Value Added Approach"
                            desc="Incorporate core values into our processes, ensuring that every solution adds enduring value to your business.                        "
                        >
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}