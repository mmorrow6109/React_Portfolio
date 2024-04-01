import {BsGithub, BsLinkedin} from 'react-icons/bs';
import HeroPic from '../assets/heroPic.jpg'

const hero = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-auto'>
                <p className='text-3xl mb-5 text-slate-300'>I'm</p>
                    <h1 className='text-5xl'>Matt Morrow</h1>
                    <hr className="mt-3 border-t-2 border-gray-400"/>
                <p className='mt-10 text-l text-slate-300 font-sans'>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
            </div>

            <div className='w-1/3 items-center ssm:w-auto'>
                <img src={HeroPic} alt='Matt Morrow, Architect' className='max-w-full h-auto border-8 border-white rounded-full' style={{ width: '100%', maxWidth: '300px' }}/>
            </div>

            <div className='w-1/3 ssm:w-auto'>
                <p className='text-4xl mb-4'>About Me</p>
                <p className='text-slate-300'>
                    Let's build something amazing together.
                </p>
                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full group relative'>
                    <span className="inline-block">
                        Show More...
                    </span>
                    <span className="absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-800"></span>
                </button>

                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsGithub size={40} className='group rounded-full hover:border-4 hover:border-indigo-800'/>
                    <BsLinkedin size={40} className='group rounded-full hover:border-4 hover:border-indigo-800'/>
                </div>
            </div>
        </section>

    );
};

export default hero;