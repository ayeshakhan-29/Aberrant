import React from 'react'
import CardWithDropdowns from '../Reusable Components/CardWithDropdowns'

const MarketingWorkProcess = () => {
    return (
        <div className='flex md:flex-row flex-col justify-center md:mx-36 p-4 mt-28 gap-4'>
            <div className='md:w-1/2 w-full'>
                <h1 className='md:text-4xl text-xl'>Our Process of Work</h1>
                <p className='mt-4 md:text-base text-sm font-thin'>Approaching marketing with a data-driven mindset. Our process involves proper planning, meticulous execution, and continuous optimization for digital success through targeted campaigns and measurable results. From content optimization and PPC advertising to email marketing automation, our methodology incorporates advanced tracking, attribution modeling, and experimentation. Prioritizing client collaboration, performance review, and continuous learning, embodying a growth mindset.</p>
            </div>

            <div className='md:w-1/2 w-full md:ml-2'>
                <CardWithDropdowns
                    heading1="Discovery and Analysis"
                    heading2="Strategy Development"
                    heading3="Execution and Optimization    "
                    heading4="Content Creation and Distribution    "
                    heading5="Measurement and Reporting  "
                    desc1="We start by understanding your brand, target audience, and goals. Through in-depth analysis of your current digital presence and market landscape, we identify strengths, weaknesses, opportunities, and threats to develop a tailored strategy.                    "
                    desc2="Based on the insights gathered, we craft a comprehensive marketing strategy tailored to your objectives. This includes defining key performance indicators (KPIs), selecting appropriate channels, and outlining a timeline for implementation.                    "
                    desc3="With the strategy in place, we execute campaigns across chosen channels, whether it’s PPC, SEO, SMM, or a combination thereof. We continuously monitor performance metrics, analyze data, and refine strategies to optimize results and ensure maximum ROI."
                    desc4="Our team of skilled content creators develops engaging, relevant content tailored to each platform and audience. From ad copy to blog posts to social media updates, we ensure consistent messaging that resonates with your audience and drives engagement."
                    desc5="Transparency and accountability are paramount. We provide regular, detailed reports on campaign performance, highlighting key metrics and insights. This allows for informed decision-making and ongoing refinement of strategies to meet evolving objectives."
                />

            </div>
        </div>
    )
}

export default MarketingWorkProcess