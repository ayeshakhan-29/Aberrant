import React from 'react'
import CardWithDropdowns from '../Reusable Components/CardWithDropdowns'

const DevWorkProcess = () => {
    return (
        <div className='flex md:flex-row flex-col justify-center md:mx-36 p-4 mt-28 gap-4'>
            <div className='md:w-1/2 w-full'>
                <h1 className='md:text-4xl text-xl'>Our Process of Work</h1>
                <p className='mt-4 md:text-base text-sm font-thin'>Experience a streamlined process, starting with focused planning and collaborative design, followed by meticulous development, testing, and ongoing support for web or app projects. Diligent development follows suit, infused with innovative coding techniques and responsive design. Rigorous testing ensures robust functionality, while our commitment extends to ongoing support, ensuring that the web or app project thrives in a dynamic digital environment.</p>
            </div>

            <div className='md:w-1/2 w-full md:ml-2'>
                <CardWithDropdowns
                    heading1="Strategic Planning                    "
                    heading2="Customized Design                    "
                    heading3="Agile Development    "
                    heading4=" Quality Assurance    "
                    heading5="Deployment and Support "
                    desc1="Collaborative ideation to outline project goals and create a roadmap for a successful development journey.  "
                    desc2="Tailoring visually stunning and functional designs that resonate with your brand and engage users intuitively.   "
                    desc3="Iterative development cycles ensuring flexibility, adaptability, and continuous feedback integration for optimal outcomes."
                    desc4="Rigorous testing protocols to guarantee flawless functionality, performance, and security of your digital products. "
                    desc5="Seamless deployment and ongoing support, ensuring your digital solutions evolve and thrive post-launch. "
                />

            </div>
        </div>
    )
}

export default DevWorkProcess