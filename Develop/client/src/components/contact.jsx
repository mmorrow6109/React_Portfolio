import React, { useState } from 'react';
import { FaArrowRight, FaEnvelope, FaPhone, FaHome, FaChessKing } from 'react-icons/fa';

export default function Contact() {
    // State variables to store form field values and error messages
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    // Event handlers for input field changes
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Event handler for input field blur (when user moves cursor out of the field)
    const handleBlur = (field) => {
        switch (field) {
            case 'name':
                // Check if name field is empty, set error message accordingly
                if (!name.trim()) {
                    setNameError('Name is required');
                } else {
                    setNameError('');
                }
                break;
            case 'email':
                // Check if email field is empty, set error message accordingly
                if (!email.trim()) {
                    setEmailError('Email is required');
                } else {
                    setEmailError('');
                }
                break;
            case 'message':
                // Check if message field is empty, set error message accordingly
                if (!message.trim()) {
                    setMessageError('Message is required');
                } else {
                    setMessageError('');
                }
                break;
            default:
                break;
        }
    };

    return (
        <section id="contact-section" className="bg-indigo-500 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8 text-white">Contact Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                        {/* Contact form */}
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                                {/* Name input field */}
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={name} onChange={handleNameChange} onBlur={() => handleBlur('name')} />
                                {/* Display error message if name field is empty */}
                                {nameError && <div className="text-red-500">{nameError}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                                {/* Email input field */}
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={email} onChange={handleEmailChange} onBlur={() => handleBlur('email')} />
                                {/* Display error message if email field is empty */}
                                {emailError && <div className="text-red-500">{emailError}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                {/* Message textarea */}
                                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={message} onChange={handleMessageChange} onBlur={() => handleBlur('message')}></textarea>
                                {/* Display error message if message field is empty */}
                                {messageError && <div className="text-red-500">{messageError}</div>}
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send Message</button>
                        </form>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        {/* Contact information */}
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaChessKing/></span>
                            <span>Matthew Morrow</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaEnvelope/></span>
                            <span>msmorrow6109@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaPhone/></span>
                            <span>(_ _ _) _ _ _ - _ _ _ _</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2"><FaHome/></span>
                            <span>Portland, OR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
