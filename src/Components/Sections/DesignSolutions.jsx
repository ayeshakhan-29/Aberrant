import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function DesignSolutions() {
    return (
        <div className="w-full h-full flex justify-center items-center md:mt-10 py-10 px-4">
            <div className="flex flex-col justify-center text-center md:text-left text-white mx-5 gap-4">
                <h1 className="text-4xl md:ml-32">Innovative Design Solutions</h1>
                <p className="mx-6 md:justify-center font-normal md:mx-32 md:mb-5">Creating brand identity with innovative solutions, ensuring that the design stands out with authenticity and impact in the market. Our comprehensive suite of design services includes</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4" >
                        <Card
                            url={design}
                            heading="Brand Identity"
                            desc="Our ethos driven design ensures a brand transformation that resonates with core values, engaging audiences authentically, infusing creativity and uniqueness.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Brand Messaging                        "
                            desc="Align core values, and visual identity for impactful messaging resonating with audience, fostering a meaningful brand purpose and connection.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Brand Guidelines and Activation                        "
                            desc="Navigate the brand landscape with clarity using our brand guidelines and activation service. Conducting visual identity redesign, ensuring consistent brand representation.                        "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Branding"
                            desc="From identity redesign to storytelling, conducting a meaningful strategic brand overhaul and visual elements for an authentic brand transformation."
                        >
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}