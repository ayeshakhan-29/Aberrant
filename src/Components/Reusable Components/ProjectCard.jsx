import React from "react";

const ProjectCard = ({ url, heading, desc, link }) => {
    return (
        <div className='md:w-[26vw] w-full md:h-[100%] h-full z-10 items-start cursor-pointer bg-[#181d22] hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-md text-white'>
            <img src={url} alt='img' className="h-[13rem] w-full rounded-lg" />
            <div className="mb-4">
                <h1 className='text-xl font-medium mb-2 mt-4'>{heading}</h1>
            </div>
            <div className="mb-4">
                <p className='text-sm font-thin opacity-90'>{desc}</p>
            </div>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-sm text-blue-500 hover:underline">View Case Study</a>
            </div>
        </div>
    );
};

export default ProjectCard;
