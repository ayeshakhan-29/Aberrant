import React, { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";

const CardWithDropdowns = ({ heading1, heading2, heading3, heading4, heading5, desc1, desc2, desc3, desc4, desc5 }) => {
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);
    const [dropdown3Open, setDropdown3Open] = useState(false);
    const [dropdown4Open, setDropdown4Open] = useState(false);
    const [dropdown5Open, setDropdown5Open] = useState(false);

    const toggleDropdown1 = () => {
        setDropdown1Open(!dropdown1Open);
        // Close other dropdowns
        setDropdown2Open(false);
        setDropdown3Open(false);
        setDropdown4Open(false);
        setDropdown5Open(false);
    };

    const toggleDropdown2 = () => {
        setDropdown2Open(!dropdown2Open);
        // Close other dropdowns
        setDropdown1Open(false);
        setDropdown3Open(false);
        setDropdown4Open(false);
        setDropdown5Open(false);
    };

    const toggleDropdown3 = () => {
        setDropdown3Open(!dropdown3Open);
        // Close other dropdowns
        setDropdown1Open(false);
        setDropdown2Open(false);
        setDropdown4Open(false);
        setDropdown5Open(false);
    };

    const toggleDropdown4 = () => {
        setDropdown4Open(!dropdown4Open);
        // Close other dropdowns
        setDropdown1Open(false);
        setDropdown2Open(false);
        setDropdown3Open(false);
        setDropdown5Open(false);
    };

    const toggleDropdown5 = () => {
        setDropdown5Open(!dropdown5Open);
        // Close other dropdowns
        setDropdown1Open(false);
        setDropdown2Open(false);
        setDropdown3Open(false);
        setDropdown4Open(false);
    };

    return (
        <div className="md:w-full mx-auto bg-[#181d22] shadow-md rounded-md overflow-hidden text-white">
            <div className="p-4">
                {/* Dropdown 1 */}
                <div className="mb-1">
                    <div className="flex text-white items-center justify-between cursor-pointer bg-[#181d22] rounded-md p-3" onClick={toggleDropdown1}>
                        <h3 className="md:text-base font-medium ">{heading1}</h3>
                        <AiOutlineDown className={`h-5 w-5 transition-transform ${dropdown1Open ? 'transform rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${dropdown1Open ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                        <p className={`text-sm font-thin mt-2 mx-6 ${dropdown1Open ? 'block' : 'hidden'}`}>{desc1}</p>
                    </div>
                </div>

                {/* Dropdown 2 */}
                <div className="mb-1">
                    <div className="flex items-center justify-between cursor-pointer rounded-md p-3" onClick={toggleDropdown2}>
                        <h3 className="md:text-base font-medium">{heading2}</h3>
                        <AiOutlineDown className={`h-5 w-5 transition-transform ${dropdown2Open ? 'transform rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${dropdown2Open ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                        <p className={`text-sm font-thin mt-2 mx-6 ${dropdown2Open ? 'block' : 'hidden'}`}>{desc2}</p>
                    </div>
                </div>

                {/* Dropdown 3 */}
                <div className="mb-1">
                    <div className="flex items-center justify-between cursor-pointer rounded-md p-3" onClick={toggleDropdown3}>
                        <h3 className="md:text-base font-medium">{heading3}</h3>
                        <AiOutlineDown className={`h-5 w-5 transition-transform ${dropdown3Open ? 'transform rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${dropdown3Open ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                        <p className={`text-sm font-thin mt-2 mx-6 ${dropdown3Open ? 'block' : 'hidden'}`}>{desc3}</p>
                    </div>
                </div>

                {/* Dropdown 4 */}
                <div className="mb-1">
                    <div className="flex items-center justify-between cursor-pointer rounded-md p-3" onClick={toggleDropdown4}>
                        <h3 className="md:text-base font-medium">{heading4}</h3>
                        <AiOutlineDown className={`h-5 w-5 transition-transform ${dropdown4Open ? 'transform rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${dropdown4Open ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                        <p className={`text-sm font-thin mt-2 mx-6 ${dropdown4Open ? 'block' : 'hidden'}`}>{desc4}</p>
                    </div>
                </div>

                {/* Dropdown 5 */}
                <div className="mb-1">
                    <div className="flex items-center justify-between cursor-pointer rounded-md p-3" onClick={toggleDropdown5}>
                        <h3 className="md:text-base font-medium">{heading5}</h3>
                        <AiOutlineDown className={`h-5 w-5 transition-transform ${dropdown5Open ? 'transform rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${dropdown5Open ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                        <p className={`text-sm font-thin mt-2 mx-6 ${dropdown5Open ? 'block' : 'hidden'}`}>{desc5}</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CardWithDropdowns;
