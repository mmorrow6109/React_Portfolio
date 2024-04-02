import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className='bg-indigo-800'>
            <div className='border-t-2 border-white'></div> {/* Thin white line */}
            <div className='flex justify-center bg-indigo-800 text-white py-5 font-mono'>
                {/* Copyright text */}
                <div className="text-center">
                    Copyright &copy; 2024 - Matt Morrow
                </div>
            </div>
            {/* Social media links */}
            <div className='flex justify-center space-x-4 cursor-pointer py-2'>
                <a href="https://github.com/mmorrow6109" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={40} className='group rounded-full hover:border-4 hover:border-white' style={{ color: '#FFC107' }} /> 
                </a>
                <a href="https://www.linkedin.com/in/matthew-morrow-/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin size={40} className='group rounded-full hover:border-4 hover:border-white' style={{ color: '#03A9F4' }} /> 
                </a>
                <a href="https://www.instagram.com/slow_up_pdx/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram size={40} className='group rounded-full hover:border-4 hover:border-white' style={{ color: '#FF5722' }} /> 
                </a>
            </div>
        </div>
    );
}

