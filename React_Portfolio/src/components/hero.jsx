import HeroPic from '../assets/heroPic.jpg';
import React, { useState } from 'react';

const Hero = () => {
  // State for controlling the expanded view of the About Me section
  const [expanded, setExpanded] = useState(false);

  // Function to handle button click and toggle expanded state
  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='bg-indigo-500 flex justify-around items-center p-5 lg:p-10 space-y-5 lg:space-y-10 lg:flex-row ssm:flex-col ssm:space-y-5 text-white'>
      {/* Left Section */}
      <div className='lg:w-1/4 ssm:w-1/3 ssm:pr-5'>
        <p className='text-3xl mb-2 lg:mb-5 text-slate-300'>I'm</p>
        <h1 className='text-5xl mb-2 lg:mb-3'>Matt Morrow</h1>
        <hr className="mt-2 lg:mt-3 border-t-2 border-gray-400"/>
        <p className='mt-2 lg:mt-3 text-lg lg:text-xl text-slate-300 font-sans'>
          Let's build something amazing together. 
        </p>
      </div>

      {/* Middle Section */}
      <div className='w-1/3 items-center ssm:w-1/2'>
        <div className="flex justify-center"> {/* Center the image */}
          <img src={HeroPic} alt='Matt Morrow, Architect' className='max-w-full h-auto border-8 border-white rounded-full' style={{ maxWidth: '300px' }}/>
        </div>
      </div>

      {/* Right Section */}
      <div id='#about-section' className='lg:w-1/4 ssm:w-1/3 ssm:pl-5 lg:pl-0'>
        <p className='text-4xl mb-2 lg:mb-3'>About Me</p>
        <p className='text-slate-300 mb-4 lg:mb-5'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
        {/* Show More button and additional information */}
        <div>
            <p className={`text-xl ${expanded ? 'block' : 'hidden'}`}>
                I have experience with the following technologies:
                <div className={`rounded-lg bg-gray-100 p-4 mt-4 about-section transition-all duration-10000 ${expanded ? 'max-h-full' : 'max-h-0 overflow-hidden'}`}>
                    <ul className='text-gray-700'>
                        <li className='mb-2'>React, Node, Express, and MongoDB</li>
                        <li className='mb-2'>HTML, CSS, and JavaScript</li>
                        <li className='mb-2'>Git and GitHub</li>
                        <li className='mb-2'>Responsive web design</li>
                        <li className='mb-2'>RESTful APIs</li>
                    </ul>
                </div>
            </p>
                <button  onClick={handleButtonClick} className='bg-white text-indigo-600 px-8 lg:px-10 py-2 my-3 rounded-full group relative'>
                    <span className="inline-block">
                    {expanded ? 'Show Less' : 'Show More...'}
                    </span>
                    <span className="absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-800"></span>
                </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
