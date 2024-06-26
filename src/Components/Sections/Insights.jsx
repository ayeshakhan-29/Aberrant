import React from "react";
import InsightCard from "../Reusable Components/InsightCard";

export default function Insights() {
    return (
        <div className="w-full h-full flex justify-center items-center py-10 px-4">
            <div className="flex flex-col justify-center text-left text-white mx-5 gap-4">
                <h1 className="md:text-4xl text-2xl font-base md:ml-32 ">Our Latest Insights​</h1>
                <p className="md:justify-center md:font-normal text-sm font-thin md:mx-32 md:mb-5">Stay Ahead of the Curve with Our Latest Insights: Delve Deep into Expert Analysis, Uncover Emerging Trends, and Embrace Forward-Thinking Strategies to Navigate the Complexities of the Ever-Evolving Digital Landscape, Equipping You with the Knowledge and Tools Needed to Drive Sustainable Growth and Success in Your Industry.</p>
                <div className="flex flex-wrap justify-center gap-4 md:mx-12 mt-6">
                    <InsightCard

                        heading="The Ultimate Guide to Mastering Google Ads"
                        date="January 10, 2024"
                        desc="Introduction In the ever-evolving landscape of online advertising, Google Ads stands as the undisputed powerhouse, providing businesses with unparalleled opportunities to reach their...   "
                    >
                    </InsightCard>
                    <InsightCard

                        heading="Unleashing the Power of Google Ads "
                        date="January 10, 2024"
                        desc="In the ever-evolving landscape of digital marketing, harnessing the full potential of Google Ads has become imperative for businesses aiming to stay ahead of the...   "
                    >
                    </InsightCard>
                    <InsightCard
                        heading="Mobile-First SEO: Optimizing for the On-the-Go User"
                        date="January 10, 2024"
                        desc="PIn the age of smartphones and constant connectivity, Mobile-First SEO has emerged as a non-negotiable strategy for online success. With a significant portion of internet...       "
                    >
                    </InsightCard>
                </div>
            </div>
        </div >
    )
}