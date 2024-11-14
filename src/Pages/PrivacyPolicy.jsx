import React, {useEffect, useMemo, useState} from 'react';
import {Card, CardContent} from "../Components/Card";
import {Link} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa6";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('');

    const sections = useMemo(() => [
        {id: 'introduction', title: '1. Introduction'},
        {id: 'information-we-collect', title: '2. Information We Collect'},
        {id: 'how-we-use', title: '3. How We Use Your Information'},
        {id: 'data-storage', title: '4. Data Storage and Security'},
        {id: 'data-sharing', title: '5. Data Sharing and Disclosure'},
        {id: 'privacy-rights', title: '6. Your Privacy Rights'},
        {id: 'cookie-policy', title: '7. Cookie Policy'},
        {id: 'children-privacy', title: '8. Children\'s Privacy'},
        {id: 'international-transfers', title: '9. International Data Transfers'},
        {id: 'changes', title: '10. Changes to Privacy Policy'},
        {id: 'contact', title: '11. Contact Information'},
        {id: 'legal-compliance', title: '12. Legal Compliance'},
        {id: 'ai-processing', title: '13. AI Processing Disclosure'},
        {id: 'gst-billing', title: '14. GST and Billing Information'}
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section =>
                document.getElementById(section.id)
            );

            const currentSection = sectionElements.find(element => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-4">
                        <Card>
                            <CardContent className="p-4">
                                <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-2 py-1 rounded-lg text-sm hover:bg-gray-100 transition-colors ${
                                                activeSection === section.id ? 'bg-gray-100 font-medium' : ''
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                <FaChevronRight className="h-4 w-4 mr-1"/>
                                                {section.title}
                                            </div>
                                        </button>
                                    ))}
                                </nav>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="lg:w-3/4">
                    <Card>
                        <CardContent className="p-8">
                            <Link to="/" className="block mb-4">
                                <img
                                    src="/gethireai_logo.png"
                                    alt="Gethire AI Logo"
                                    className="h-10"
                                />
                            </Link>
                            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                            <p className="text-sm text-gray-600 mb-8">Last Updated: November 14, 2024</p>

                            <section id="introduction" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                                <p>GetHire.ai ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered recruitment platform and related services.</p>
                            </section>

                            <section id="information-we-collect" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

                                <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Contact information (name, email address, phone number)</li>
                                    <li>Professional information (resume, work history, qualifications)</li>
                                    <li>Account credentials</li>
                                    <li>Company details for employer accounts</li>
                                    <li>Communication preferences</li>
                                    <li>Payment information for subscription services</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">2.2 Information Automatically Collected</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Device information (IP address, browser type, operating system)</li>
                                    <li>Usage data (interaction with our platform, time spent on pages)</li>
                                    <li>Cookies and similar tracking technologies</li>
                                    <li>Log files and analytics data</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">2.3 AI-Generated Data</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Candidate assessment scores</li>
                                    <li>Interview analysis data</li>
                                    <li>Skills evaluation results</li>
                                    <li>Fitment scores and recommendations</li>
                                </ul>
                            </section>

                            <section id="how-we-use" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Providing and improving our recruitment services</li>
                                    <li>Processing job applications and matching candidates</li>
                                    <li>Conducting AI-powered candidate assessments</li>
                                    <li>Managing user accounts and subscriptions</li>
                                    <li>Communicating about service updates and offers</li>
                                    <li>Analyzing platform performance and user behavior</li>
                                    <li>Ensuring platform security and preventing fraud</li>
                                    <li>Complying with legal obligations</li>
                                </ul>
                            </section>

                            <section id="data-storage" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
                                <h3 className="text-xl font-semibold mb-3">4.1 Data Storage</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>All data is stored on secure servers located in India</li>
                                    <li>We retain your data for as long as necessary to provide our services</li>
                                    <li>You can request data deletion subject to legal requirements</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">4.2 Security Measures</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Industry-standard encryption protocols</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Restricted access to personal information</li>
                                    <li>Secure payment processing through trusted providers</li>
                                </ul>
                            </section>

                            <section id="data-sharing" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
                                <p className="mb-3">We may share your information with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Employers or candidates as part of the recruitment process</li>
                                    <li>Service providers and technology partners</li>
                                    <li>Legal authorities when required by law</li>
                                    <li>Professional advisors and auditors</li>
                                    <li>Successor entities in case of business transfer</li>
                                </ul>
                            </section>

                            <section id="privacy-rights" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
                                <p className="mb-3">You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request data deletion</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Export your data</li>
                                    <li>Withdraw consent for data processing</li>
                                </ul>
                            </section>

                            <section id="cookie-policy" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">7. Cookie Policy</h2>
                                <p className="mb-3">We use cookies to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Maintain session information</li>
                                    <li>Analyze platform usage</li>
                                    <li>Improve user experience</li>
                                    <li>Provide personalized content</li>
                                    <li>Track marketing effectiveness</li>
                                </ul>
                                <p className="mt-3">You can manage cookie preferences through your browser settings.</p>
                            </section>

                            <section id="children-privacy" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                                <p>Our services are not intended for users under 18 years of age. We do not knowingly collect or maintain information from individuals under 18.</p>
                            </section>

                            <section id="international-transfers" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
                                <p>While our services primarily operate in India, data may be processed in other countries. We ensure appropriate safeguards are in place for international transfers.</p>
                            </section>

                            <section id="changes" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">10. Changes to Privacy Policy</h2>
                                <p className="mb-3">We may update this Privacy Policy periodically. We will notify users of material changes through:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Email notifications</li>
                                    <li>Platform announcements</li>
                                    <li>Website updates</li>
                                </ul>
                            </section>

                            <section id="contact" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                                <p className="mb-3">For privacy-related inquiries:</p>
                                <ul className="list-none space-y-2">
                                    <li>Email: info@gethire.ai</li>
                                    <li>Phone: +91 7000901605</li>
                                </ul>
                            </section>

                            <section id="legal-compliance" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">12. Legal Compliance</h2>
                                <p className="mb-3">We comply with applicable data protection laws, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Information Technology Act, 2000</li>
                                    <li>Personal Data Protection Bill</li>
                                    <li>Other relevant Indian data protection regulations</li>
                                </ul>
                            </section>

                            <section id="ai-processing" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">13. AI Processing Disclosure</h2>
                                <p className="mb-3">Our platform uses artificial intelligence for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Candidate screening and assessment</li>
                                    <li>Interview analysis</li>
                                    <li>Skills evaluation</li>
                                    <li>Job matching</li>
                                </ul>
                                <p className="mt-3">AI processing is conducted in accordance with ethical guidelines and industry standards.</p>
                            </section>

                            <section id="gst-billing" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">14. GST and Billing Information</h2>
                                <p>Payment and billing information is collected and processed in compliance with Indian tax laws and GST requirements.</p>
                            </section>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-600 italic">
                                    By using GetHire.ai's services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;