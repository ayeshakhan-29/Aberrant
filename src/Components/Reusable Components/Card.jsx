import React from "react";

const Card = ({ url, heading, desc }) => {
    return (
        <div className='md:w-[26vw] w-full md:h-[17vw] h-full z-10 items-start cursor-pointer bg-[#181d22] hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-md text-white'>
            <img src={url} alt='img' className="h-[3rem]" />
            <h1 className='text-2xl mt-5 font-bold text-left'>{heading}</h1>
            <p className='text-sm font-thin text-left opacity-90'>{desc}</p>
        </div>
    );
};

export default Card;