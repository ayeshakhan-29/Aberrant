import React from "react";

const InsightCard = ({ heading, date, desc, link }) => {
    return (
        <div className='md:w-[26vw] w-full md:h-[20vw] h-full z-10 items-start cursor-pointer bg-[#181d22] hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-md text-white'>
            <div className="mb-4">
                <h1 className='text-xl font-medium mb-2'>{heading}</h1>
                <p className='text-sm font-thin mb-2 opacity-90'>{date}</p>
            </div>
            <div className="mb-4">
                <p className='text-sm font-thin opacity-90'>{desc}</p>
            </div>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-sm text-blue-500 hover:underline">Read more</a>
            </div>
        </div>
    );
};

export default InsightCard;
