import React from 'react'
import CardWithDropdowns from '../Reusable Components/CardWithDropdowns'

const DesignWorkProcess = () => {
    return (
        <div className='flex justify-center md:mx-36 mt-28'>
            <div className='w-1/2'>
                <h1 className='text-4xl'>Our Process of Work</h1>
                <p className='mt-4 md:text-base'>Our Process of Work at Aberrant design service takes you on a transformative journey, delving deep into brand insights and crafting visually compelling narratives. Our process begins by understanding the audience, studying pre-existing elements, and conducting in-depth research to create a purposeful framework for impactful designs.</p>
            </div>

            <div className='w-1/2 md:ml-2'>
                <CardWithDropdowns
                    heading1="Understanding Your Brand                    "
                    heading2="Ideation and Iteration                    "
                    heading3="Collaboration and Feedback "
                    heading4="Execution and Refinement                    "
                    heading5="Delivery of Exceptional Results                    "
                    desc1="We delve into your brand’s objectives, audience, and market landscape to gain valuable insights.                    "
                    desc2="We brainstorm creative ideas and iterate on designs until we achieve solutions that surpass expectations.                    "
                    desc3="We foster open communication and encourage client feedback throughout the design process.                    "
                    desc4="We execute the chosen design concepts with precision, refining them based on client input and feedback.                    "
                    desc5="We deliver final design solutions that align perfectly with your brand’s vision and goals.                    "
                />

            </div>
        </div>
    )
}

export default DesignWorkProcess