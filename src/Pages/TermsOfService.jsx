import React, { useState, useEffect } from 'react';

import { Card, CardContent } from '../Components/Card';
import {FaChevronRight} from "react-icons/fa6";
import {Link} from "react-router-dom";

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState('');

    const sections = [
        { id: 'acceptance', title: '1. Acceptance of Terms' },
        { id: 'services', title: '2. Description of Services' },
        { id: 'eligibility', title: '3. Eligibility and Registration' },
        { id: 'user-obligations', title: '4. User Obligations' },
        { id: 'intellectual-property', title: '5. Intellectual Property Rights' },
        { id: 'payment-terms', title: '6. Payment Terms' },
        { id: 'cancellation', title: '7. Cancellation and Termination' },
        { id: 'disclaimers', title: '8. Disclaimers and Warranties' },
        { id: 'limitation-liability', title: '9. Limitation of Liability' },
        { id: 'indemnification', title: '10. Indemnification' },
        { id: 'modifications', title: '11. Modifications to Terms' },
        { id: 'disputes', title: '12. Dispute Resolution' },
        { id: 'governing-law', title: '13. Governing Law' },
        { id: 'miscellaneous', title: '14. Miscellaneous Provisions' }
    ];

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
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-4">
                        <Card>
                            <CardContent>
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
                                                <FaChevronRight className="h-4 w-4 mr-1" />
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
                            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
                            <p className="text-sm text-gray-600 mb-8">Last Updated: November 14, 2024</p>

                            <section id="acceptance" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                                <p className="mb-4">By accessing or using GetHire.ai's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.</p>
                                <p>These terms constitute a legally binding agreement between you and GetHire.ai regarding your use of our AI-powered recruitment platform and related services.</p>
                            </section>

                            <section id="services" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                                <h3 className="text-xl font-semibold mb-3">2.1 Core Services</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>AI-powered candidate screening and assessment</li>
                                    <li>Automated interview scheduling and management</li>
                                    <li>Resume parsing and analysis</li>
                                    <li>Candidate-employer matching services</li>
                                    <li>Recruitment analytics and reporting</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">2.2 Service Availability</h3>
                                <p className="mb-4">We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. We reserve the right to suspend or terminate services for maintenance or updates with reasonable notice.</p>
                            </section>

                            <section id="eligibility" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">3. Eligibility and Registration</h2>
                                <h3 className="text-xl font-semibold mb-3">3.1 User Eligibility</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Users must be at least 18 years old</li>
                                    <li>Users must have legal capacity to enter into contracts</li>
                                    <li>Users must provide accurate and complete registration information</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">3.2 Account Requirements</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Each user must maintain unique login credentials</li>
                                    <li>Users are responsible for maintaining account security</li>
                                    <li>Multiple accounts per user are not permitted</li>
                                </ul>
                            </section>

                            <section id="user-obligations" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">4. User Obligations</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide accurate and truthful information</li>
                                    <li>Maintain confidentiality of account credentials</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                    <li>Not engage in any fraudulent or deceptive practices</li>
                                    <li>Not interfere with platform functionality or security</li>
                                    <li>Respect intellectual property rights</li>
                                </ul>
                            </section>

                            <section id="intellectual-property" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
                                <p className="mb-4">All content, features, and functionality of our platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of GetHire.ai or its licensors.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Users retain ownership of their submitted content</li>
                                    <li>Users grant us a license to use submitted content for service provision</li>
                                    <li>Our AI algorithms and technology remain our exclusive property</li>
                                    <li>Unauthorized use of our intellectual property is prohibited</li>
                                </ul>
                            </section>

                            <section id="payment-terms" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                                <h3 className="text-xl font-semibold mb-3">6.1 Subscription Fees</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Fees are charged according to selected subscription plan</li>
                                    <li>All fees are exclusive of applicable taxes</li>
                                    <li>Payments are processed through secure payment gateways</li>
                                    <li>Subscription fees are non-refundable unless required by law</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">6.2 Payment Processing</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Automatic billing on subscription renewal</li>
                                    <li>Failed payments may result in service suspension</li>
                                    <li>Price changes will be notified in advance</li>
                                </ul>
                            </section>

                            <section id="cancellation" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">7. Cancellation and Termination</h2>
                                <p className="mb-4">We reserve the right to suspend or terminate your access to our services:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>For violation of these terms</li>
                                    <li>For providing false or misleading information</li>
                                    <li>For non-payment of fees</li>
                                    <li>For any other reason we deem appropriate</li>
                                </ul>
                            </section>

                            <section id="disclaimers" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">8. Disclaimers and Warranties</h2>
                                <p className="mb-4">Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Accuracy of AI-generated assessments</li>
                                    <li>Suitability for specific purposes</li>
                                    <li>Availability or uninterrupted service</li>
                                    <li>Employment or hiring outcomes</li>
                                </ul>
                            </section>

                            <section id="limitation-liability" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                                <p className="mb-4">GetHire.ai shall not be liable for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Direct, indirect, or consequential damages</li>
                                    <li>Lost profits or business opportunities</li>
                                    <li>Data loss or corruption</li>
                                    <li>Hiring decisions made using our platform</li>
                                </ul>
                            </section>

                            <section id="indemnification" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                                <p>You agree to indemnify and hold harmless GetHire.ai and its affiliates from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>
                            </section>

                            <section id="modifications" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">11. Modifications to Terms</h2>
                                <p>We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.</p>
                            </section>

                            <section id="disputes" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                                <p>Any disputes arising from these terms or use of our services shall be resolved through:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Initial good faith negotiations</li>
                                    <li>Mediation if negotiations fail</li>
                                    <li>Binding arbitration as a last resort</li>
                                </ul>
                            </section>

                            <section id="governing-law" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
                                <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                            </section>

                            <section id="miscellaneous" className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">14. Miscellaneous Provisions</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Severability of provisions</li>
                                    <li>No waiver of rights</li>
                                    <li>Assignment restrictions</li>
                                    <li>Entire agreement</li>
                                </ul>
                            </section>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-600 italic">
                                    By using GetHire.ai's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;