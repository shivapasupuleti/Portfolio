import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    });
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = async (email) => {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            return false;
        }

        const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=0bb90ea1c46d40fc84d0febf2ff9e5af&email=${email}`);
        const data = await response.json();
        return data.is_valid_format.value && data.is_mx_found.value && data.is_smtp_valid.value;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidEmail = await validateEmail(formData.email);
        if (!isValidEmail) {
            setErrorMessage('Invalid or non-existent email address.');
            return;
        }

        emailjs.send(
            'service_9xu5222', // Replace with your EmailJS service ID
            'template_k10pkws', // Replace with your EmailJS template ID
            formData,
            '7yHFjNsnoXqqI6fX1' // Replace with your EmailJS user ID
        ).then((result) => {
            console.log(result.text);
            setMessageSent(true);
            setErrorMessage('');
        }).catch((error) => {
            console.log(error.text);
            setErrorMessage('Failed to send message. Please try again later.');
        });

        setFormData({
            fullname: '',
            email: '',
            message: '',
        });
        setTimeout(() => {
            setMessageSent(false);
          }, 10000);
    };

    return (
        <div name="Contact" className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h2 className="text-4xl font-semibold text-center mb-8">Contact Me</h2>
            <p className="text-center text-lg mb-2">
                I'm currently open to job opportunities.
            </p>
            <p className='text-lg mb-6'>
                If you enjoyed my portfolio and resume, or just want to chat about business (or anything else), feel free to reach out!

            </p>
            <div className="flex justify-center items-center mb-2">
                <a href="mailto:venkatashiva1104@gmail.com" className="text-white hover:scale-105 transition-transform">
                    <i className="fas fa-envelope"></i> Write to me!
                </a>
            </div>
            <div className="text-center mb-8">
                <p className="">
                    <i className="fas fa-map-marker-alt"></i> London, United Kingdom
                </p>
            </div>
            {messageSent && (
                <p className="text-green-500 text-center mb-4">Message sent successfully!</p>)}
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
                    <div>
                        <label htmlFor="fullname" className="block text-lg font-medium text-gray-200">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-200">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white"
                        />
                        {errorMessage && <p className="text-red-500 font-medium">{errorMessage}</p>}

                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-200">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        >
                            Send
                        </button>
                    </div>
                </form>
        </div>
    );
}

export default ContactForm;

