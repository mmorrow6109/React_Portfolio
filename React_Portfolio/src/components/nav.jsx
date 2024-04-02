// Import necessary icons and hooks from their respective libraries
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

// Functional component for the navigation bar
const Nav = () => {
    // State variable to toggle the menu
    const [toggle, setToggle] = useState(false);

    // Function to open the menu
    function openMenu() { 
        // Sets the toggle state to true, indicating that the menu should be open
        setToggle(true);
    }

    // Function to close the menu
    function closeMenu() {
        // Sets the toggle state to false, indicating that the menu should be closed
        setToggle(false);
    }

    // JSX rendering the navigation bar and menu
    return (
        <>
            <div className="flex item-center justify-between p-10 lg:flex-row text-black-600">
                {/* Portfolio title with icon */}
                <div>
                    <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
                        <FaBeer style={{ marginRight: '6px' }} />
                        PORTFOLIO
                    </a>
                </div>
                {/* Menu links */}
                <div className="space-x-4">
                    {/* Menu links for larger screens */}
                    <div className="ssm:hidden sm:hidden md:block lg:block xl:block space-x-2 font-mono">
                        <a href="#about-section" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</a>
                        <a href="#projects-section" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#contact-section" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
                        <a href="#resume-section" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Resume</a>
                    </div> {/*need to add contact section at bottom and link to a resume file*/}
                           {/*can probably bail on about me link and have it expand when i click on "see more" button*/}

                    {/* Menu toggle button for smaller screens */}
                    <div className="ssm:block sm:block md:hidden lg:hidden xl:hidden">
                        {/* Ternary operator to render close icon if menu is open, and menu icon if closed */}
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
                        ) : (
                            <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>
            {/* Menu for smaller screens */}
            <div className="ssm:block sm:block md:hidden lg:hidden xl:hidden">
                {/* Conditional rendering based on toggle state */}
                {toggle ? (
                    <div className="flex justify-between ml-10">
                        <ul>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl mb-2 cursor-pointer">Resume</a>
                            </li>
                        </ul>
                    </div>
                ):(
                    <div></div>
                )}
            </div>
        </>
    );
};

// Export the Nav component as default
export default Nav;

