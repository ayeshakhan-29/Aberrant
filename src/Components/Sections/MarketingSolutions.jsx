import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function MarketingSolutions() {
    return (
        <div className="w-full h-full flex justify-center items-center md:mt-32 md:py-10 p-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Innovative Marketing Solutions</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 md:mb-5">Achieve peak performance through data-driven strategies, create compelling brand awareness, and experience the art of elevation with our innovative digital marketing expertise.</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-4 p-6" >
                        <Card
                            url={design}
                            heading="Organic Marketing "
                            desc="Utilize data-driven insights and thought out techniques to optimize content, monitor performance, and intensify your brand awareness through continuous learning.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Performance Marketing"
                            desc="Experience the impact, where every strategy is crafted for results that speak volumes, promising success through optimization and collaborative efforts.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Brand Awareness "
                            desc="Develop a growth mindset with market research, audience segmentation, and a digital marketing strategy, supported by reporting and analytics for brand elevation.                            "
                        >
                        </Card>

                    </div>
                </div>
            </div>
        </div >
    )
}