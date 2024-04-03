import React from 'react';
import project from "./../../assets/project.jpg";

const BannerSection = () => {
    return (
        <div>
            <div className='flex flex-col gap-8 md:flex-row items-start md:mx-64 md:mt-20'>
                <img src={project} alt='img' className="w-auto h-[16rem]" />
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl font-semi-bold'>
                        Design
                    </p>
                    <p className='text-4xl'>
                        Igniting Meaningful Brand Narratives
                    </p>
                    <p className='font-light'>
                        Visually transforming your brand identity with clarity and essence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
