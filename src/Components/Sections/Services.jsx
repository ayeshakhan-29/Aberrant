import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function Services() {
    return (
        <div className="w-full h-full flex md:justify-center items-center py-10 md:px-4">
            <div className="flex flex-col md:justify-center text-left text-white mx-5 gap-4">
                <h1 className="md:text-4xl text-2xl font-base md:ml-32">Empowering Businesses</h1>
                <p className="md:justify-center md:font-normal text-sm font-thin md:mx-32 md:mb-5">Aberrant, a versatile digital partner, focuses on empowering businesses through unique brand structures, strategic development, and effective marketing solutions. Bringing you a collaborative approach, tailoring our expertise to meet the brand’s specific needs. Our deliverables include tangible value, navigating the complexities of the digital terrain, and ensuring the brand thrives in the ever-evolving market. We provide solutions that resonate with business goals, ensuring alignment with the objectives.</p>
                <div className="flex flex-wrap md:flex-row justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
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
            </div>
        </div >
    )
}