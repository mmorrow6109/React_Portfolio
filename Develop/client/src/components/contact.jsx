import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaHome, FaChessKing } from 'react-icons/fa';
import axios from 'axios';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleBlur = (field) => {
        switch (field) {
            case 'name':
                if (!name.trim()) {
                    setNameError('Name is required');
                } else {
                    setNameError('');
                }
                break;
            case 'email':
                if (!email.trim()) {
                    setEmailError('Email is required');
                } else if (!/\S+@\S+\.\S+/.test(email)) {
                    setEmailError('Email is invalid');
                } else {
                    setEmailError('');
                }
                break;
            case 'message':
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

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if (!name.trim()) {
            setNameError('Name is required');
            valid = false;
        } else {
            setNameError('');
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!message.trim()) {
            setMessageError('Message is required');
            valid = false;
        } else {
            setMessageError('');
        }

        if (valid) {
            axios.post('/.netlify/functions/sendEmail', { name, email, message })
                .then(response => {
                    setSuccessMessage('Message sent successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                })
                .catch(error => {
                    setSuccessMessage('Failed to send message. Please try again later.');
                });
        }
    };

    return (
        <section id="contact-section" className="bg-indigo-500 py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8 text-white">Contact Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                    onBlur={() => handleBlur('name')} 
                                />
                                {nameError && <div className="text-red-500">{nameError}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    onBlur={() => handleBlur('email')} 
                                />
                                {emailError && <div className="text-red-500">{emailError}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                                    value={message} 
                                    onChange={handleMessageChange} 
                                    onBlur={() => handleBlur('message')}
                                ></textarea>
                                {messageError && <div className="text-red-500">{messageError}</div>}
                            </div>
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send Message</button>
                            {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
                        </form>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaChessKing /></span>
                            <span>Matthew Morrow</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaEnvelope /></span>
                            <span>msmorrow6109@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2"><FaPhone /></span>
                            <span>(_ _ _) _ _ _ - _ _ _ _</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2"><FaHome /></span>
                            <span>Portland, OR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
