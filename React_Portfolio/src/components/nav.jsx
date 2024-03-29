import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiOutlineClose } from "react-icons/ai";
import { hiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() { 
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }

    return (
        <>
            <div className="flex item-center justify-between p-10 lg:flex-row text-black-600">
                <div>
                    <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
                        <FaBeer style={{ marginRight: '6px' }} />
                        PORTFOLIO
                    </a>
                </div>
                <div className="space-x-4">
                    <div className="hidden md:block lg:block xl:block space-x-2 sm:hidden">
                        <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
                    </div>
                    <div className="block md:hidden">
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
                        ) : (
                            <hiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                {toggle ? (
                    <div className="flex justify-between ml-10">
                        <ul>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Skills</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Contact</a>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Nav;
