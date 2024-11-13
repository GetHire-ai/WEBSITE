import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JoinWaitlistCarousel from "../Components/JoinWaitlistCarousel";

const DemoRequestComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        describe: '',
        phone: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const gradientStyles = {
        background: 'linear-gradient(90deg, #e1f7f7, #f0e9f7, #f0fdf9)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 8s ease infinite'
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/join-waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Failed to submit');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (isSubmitted) {
        return (
            <div className="w-full md:w-1/2 bg-white p-10">
                <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                <p className="mb-6">Your request has been submitted successfully. We'll get in touch soon.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row-reverse min-h-screen">

            <div className="w-full md:w-1/2 lg:w-1/2 bg-white p-10">
                <div className="mb-4">
                    <Link to="/" className="block">
                        <img
                            src="/gethireai_logo.png"
                            alt="Gethire AI Logo"
                            className="h-10"
                        />
                    </Link>
                </div>
                <h2 className="text-2xl font-bold mb-4">Join waitlist for our <span style={gradientStyles}>AI-Powered Recruitment</span> software</h2>
                <p className="mb-6">Our product is in beta. Please share your details to qualify for beta access.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name*</label>
                        <input type="text" id="firstName" className="w-full border p-2 rounded" required
                               onChange={handleChange}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name*</label>
                        <input type="text" id="lastName" className="w-full border p-2 rounded" required
                               onChange={handleChange}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block text-gray-700 mb-2">Company Name*</label>
                        <input type="text" id="companyName" className="w-full border p-2 rounded" required
                               onChange={handleChange}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="describe" className="block text-gray-700 mb-2">What best describes you?*</label>
                        <select id="describe" className="w-full border p-2 rounded" required onChange={handleChange}>
                            <option>Select one...</option>
                            <option>CEO/CTO/CMO/Owner</option>
                            <option>Recruiter</option>
                            <option>Manager</option>
                            <option>HR</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" id="phone" className="w-full border p-2 rounded" onChange={handleChange}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Work Email*</label>
                        <input type="email" id="email" className="w-full border p-2 rounded" required
                               onChange={handleChange}/>
                    </div>
                    <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded">Request Demo</button>
                </form>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 bg-black text-white p-10 relative">
                {/*<div*/}
                {/*    className="fixed inset-0 md:w-1/2 w-full left-0 h-full bg-center bg-cover bg-no-repeat z-0"*/}
                {/*    style={{*/}
                {/*        backgroundImage: "url('/join_waitlist.png')",*/}
                {/*        backgroundPosition: "center bottom",*/}
                {/*        filter: "blur(1px)"*/}
                {/*    }}*/}
                {/*></div>*/}
                <div className="p-10 relative z-10">

                    <h1 className="text-4xl font-bold mb-6">Hire faster & smarter with GetHireAI</h1>
                    <p className="mb-4">What to expect:</p>
                    <ul className="list-disc pl-5 mb-6 gap-2">
                        <li>A personalized demo of the GetHireAI All-In-One ATS, tailored to your specific needs and
                            goals.
                        </li>
                        <li>A glimpse of the powerful modules designed to help you achieve hiring goals faster — save
                            money by consolidating best-in-class sourcing, scheduling, ATS, and analytics functionality,
                            all in one intuitive platform.
                        </li>
                        <li>An opportunity to consult with product experts to determine if GetHireAI is the right
                            solution for your hiring needs.
                        </li>
                    </ul>
                    <JoinWaitlistCarousel/>
                </div>
            </div>
        </div>
    );
};

export default DemoRequestComponent;