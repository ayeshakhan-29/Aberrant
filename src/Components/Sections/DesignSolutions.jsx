import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function DesignSolutions() {
    return (
        <div className="w-full h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col justify-center text-center md:text-left text-white mx-5 gap-4">
                <h1 className="text-4xl md:ml-20">Innovative Design Solutions</h1>
                <p className="mx-6 md:mx-0 md:justify-center font-normal md:ml-20 md:mb-5">Creating brand identity with innovative solutions, ensuring that the design stands out with authenticity and impact in the market. Our comprehensive suite of design services includes

                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Card
                        url={design}
                        heading="Design"
                        desc="Transforming vision into captivating designs, focusing on building a brand identity that resonates authentically, ensuring a personal touch in every element.    "
                    >
                    </Card>
                    <Card
                        url={design}
                        heading="Development"
                        desc="Breathing life into concepts, our team creates powerful digital solutions that uniquely reflects the brand, creating a digital identity.                        "
                    >
                    </Card>
                    <Card
                        url={design}
                        heading="Marketing"
                        desc="Strategically sharing brand stories and creating meaningful connections. Our personal approach maximizes impact, driving growth in the competitive market.  "
                    >
                    </Card>
                </div>
            </div>
        </div >
    )
}