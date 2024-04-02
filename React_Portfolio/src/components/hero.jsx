import {BsGithub, BsLinkedin} from 'react-icons/bs';
import HeroPic from '../assets/heroPic.jpg'

const Hero = () => {
    return (
        <section className='flex justify-around items-center p-5 lg:p-10 space-y-5 lg:space-y-10 lg:flex-row ssm:flex-col ssm:space-y-5 text-white'>
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
            <div className='lg:w-1/4 ssm:w-1/3 ssm:pl-5 lg:pl-0'>
                <p className='text-4xl mb-2 lg:mb-3'>About Me</p>
                <p className='text-slate-300 mb-4 lg:mb-5'>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <button className='bg-white text-indigo-600 px-8 lg:px-10 py-2 my-3 rounded-full group relative'>
                    <span className="inline-block">
                        Show More...
                    </span>
                    <span className="absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-800"></span>
                </button>

                <div className='flex space-x-4 cursor-pointer'>
                    <a href="https://github.com/mmorrow6109" target="_blank" rel="noopener noreferrer">
                        <BsGithub size={40} className='group rounded-full hover:border-4 hover:border-indigo-800'/>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-morrow-/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin size={40} className='group rounded-full hover:border-4 hover:border-indigo-800'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
