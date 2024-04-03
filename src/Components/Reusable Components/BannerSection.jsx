import React from 'react';
import project from "./../../assets/project.jpg";

const BannerSection = ({ heading, tagline, desc }) => {
    return (
        <div>
            <div className='flex flex-col gap-8 md:flex-row items-start md:mx-64 md:mt-32'>
                <img src={project} alt='img' className="w-auto md:h-[16rem] p-4 md:mt-0 mt-10 rounded-lg shadow-md" />
                <div className='flex flex-col md:gap-4'>
                    <p className='md:text-2xl text-xl font-semi-bold md:m-0 m-3'>
                        {heading}
                    </p>
                    <p className='md:text-4xl text-2xl md:m-0 m-3'>
                        {tagline}
                    </p>
                    <p className='font-light md:m-0 m-3'>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
