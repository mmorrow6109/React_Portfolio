import { FaArrowRight } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact-section" className="bg-indigo-500 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8 text-white">Contact Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                        <br/>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">(Going to hook up the backend at a later date! For now look at my contact over here!) 
                            <FaArrowRight className='ml-2' size={10} color="blue" />
                            <FaArrowRight className='ml-2' size={20} color="blue" />
                            <FaArrowRight className='ml-2' size={30} color="blue" />
                            <FaArrowRight className='ml-2' size={40} color="blue" />
                            <FaArrowRight className='ml-2' size={50} color="blue" />
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
                            </div>
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send Message</button>
                        </form>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><i className="text-gray-600"><FaChessKing/></i></span>
                            <span>Matthew Morrow</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><i className="text-gray-600"><FaEnvelope/></i></span>
                            <span>msmorrow6109@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><i className=" text-gray-600"></i><FaPhone/></span>
                            <span>(_ _ _) _ _ _ - _ _ _ _</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2"><i className=" text-gray-600"></i><FaHome/></span>
                            <span>Portland, OR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
