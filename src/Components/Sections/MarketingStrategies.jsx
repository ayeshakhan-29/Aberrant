import React from "react";
import Card from "../Reusable Components/Card";
import design from "../../assets/design.png"

export default function MarketingStrategies() {
    return (
        <div className="w-full h-full flex justify-center md:items-center md:mt-32 md:py-10 p-4 mt-20">
            <div className="flex flex-col justify-center text-left text-white md:mx-5 gap-4">
                <h1 className="md:text-4xl text-xl text-normal md:ml-32">Dynamic Marketing Strategies</h1>
                <p className="md:justify-center md:text-base text-sm font-thin md:mx-32 md:mb-5">At Aberrant Digital Services, we specialize in revolutionizing the digital landscape through our innovative web and app development solutions. Our strategic approach ensures every project is meticulously crafted, prioritizing user-centric design and scalability for long-term success. With a commitment to excellence and transparent communication, we transform ideas into captivating digital experiences that elevate your brand's online presence.</p>
                <div className="flex flex-wrap justify-center md:mx-32">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4" >
                        <Card
                            url={design}
                            heading="Pay Per Click (PPC)                            "
                            desc="Drive targeted traffic with strategic ad campaigns, leveraging data-driven insights and continuous optimization for maximum ROI and visibility.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="SEO "
                            desc="Strengthen online visibility with meticulous keyword strategies, content optimization, and technical SEO, aligning website with search engine algorithms.                            "
                        >
                        </Card>
                        <Card
                            url={design}
                            heading="Social Media Marketing                            "
                            desc="Boost brand presence through data-driven social media strategies, fostering engagement, loyalty, and audience growth for sustained digital success.                            "
                        >
                        </Card>

                    </div>
                </div>
            </div>
        </div >
    )
}