import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/header.css";
// import img from '../Assets/imagesec2-1-768x864.png'
import emp1 from '../Assets/image1-2-1-768x531.png'
import emp2 from '../Assets/image213-1.png'
import emp3 from '../Assets/image321-1.png'
import job1 from '../Assets/imagesection4-1-768x848.png'
import job2 from '../Assets/imagesec23-1-768x516.png'
import job3 from '../Assets/Frame-1618873057-1-768x480.png'
import job4 from '../Assets/imagesec2-1-768x864.png'
import candidate1 from '../Assets/img55-1-768x484.png'
import candidate2 from '../Assets/img5333-1.png'
import candidate3 from '../Assets/image52-1.png'
import eva1 from '../Assets/image2233-1-768x557.png'
import eva2 from '../Assets/image3344-1.png'
import eva3 from '../Assets/image55334-1.png'
import int1 from '../Assets/image7-1-768x557.png'
import int2 from '../Assets/image71-1.png'
import int3 from '../Assets/Frame-1618873015.png'
import team1 from '../Assets/image82-1-768x533.png'
import team2 from '../Assets/image81-1-768x606.png'
import team3 from '../Assets/image83-1-768x533.png'
import team4 from '../Assets/image84-1-768x914.png'


function CorporateFeatures() {
    const [activeTab, setActiveTab] = useState("Employer Brand");
    const tabs = [
        "Employer Brand",
        "Job Post",
        "Candidate Management",
        "Evaluation",
        "Integrations",
        "Team Collaboration",
    ];


    const renderContent = () => {
        switch (activeTab) {
            case "Employer Brand":
                return (
                    <div className="container mx-auto p-6">
                        <div className="flex space-x-6">
                            {/* Left Side Box */}
                            <div className="w-1/2 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 text-left">
                                <h2 className="font-bold text-2xl mb-4">Personalized Brand Colors & Identity</h2>
                                <p className="text-lg leading-relaxed">
                                    Place your brand logo and custom favicon to build a distinct brand identity
                                    with unique brand colors that speak about your company and its values. Reach
                                    competent candidates who suit your company culture perfectly.
                                </p>
                                <img src={emp1} className="w-full h-90 object-cover mt-4 rounded-lg" />
                            </div>

                            {/* Right Side Box with Two Sub Boxes */}
                            <div className="flex flex-col w-1/2 space-y-6">
                                {/* Top Box */}
                                <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                    <div className="w-2/3">
                                        <h3 className="font-bold text-xl mb-2">Self-Hosted Platform With Custom Domain</h3>
                                        <p className="text-lg leading-relaxed">
                                            Have your own self-hosted platform with a custom domain. This means a career
                                            site with a unique URL and the hosting platform of your choice.
                                        </p>
                                    </div>
                                    <img src={emp2} className="w-80 h-70 object-cover rounded-lg" />
                                </div>

                                {/* Bottom Box */}
                                <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                    <div className="w-2/3">
                                        <h3 className="font-bold text-xl mb-2">Dedicated Career Site & Job Post Template</h3>
                                        <p className="text-lg leading-relaxed">
                                            Pick from ready career site templates and build the perfect job post that suits
                                            your brand. Attract more applicants and maximize efficiency.
                                        </p>
                                    </div>
                                    <img src={emp3} className="w-80 h-60 object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Job Post":
                return (
                    <div className="container mx-auto p-4">
                        <div className="flex space-x-6 mb-4">
                            {/* First Box */}
                            <div className="w-3/5 h-auto bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                                <div className="flex-1 pr-6 text-left">
                                    <h2 className="font-bold text-2xl mb-4">Ready Job Post Templates</h2>
                                    <p className="text-lg leading-relaxed">
                                        Pick from ready job post templates to attract more candidates and streamline your hiring process.
                                    </p>
                                </div>
                                <img src={job4} className="w-80 h-70 object-cover rounded-lg" />
                            </div>

                            {/* Second Box */}
                            <div className="w-2/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex flex-col justify-between text-left">
                                <h3 className="font-bold text-lg mb-4">AI Generated Job Descriptions</h3>
                                <p className="text-lg leading-relaxed">
                                    Save your time and write compelling content with AI. Instantly generate detailed job descriptions detailing responsibilities & benefits.
                                </p>
                                <div className="flex justify-center">
                                <img src={job2} className="w-90 h-70 object-cover mt-4 rounded-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            {/* Third Box */}
                            <div className="w-2/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex flex-col justify-between text-left">
                                <h3 className="font-bold text-lg mb-4">Remote Interview & Custom Field Features</h3>
                                <p className="text-lg leading-relaxed">
                                    Interview candidates remotely with Google Meet & Zoom integrations and enable custom field inputs to collect extra information from candidates.
                                </p>
                                <div className="flex justify-center">
                                <img src={job3} className="w-70 h-90 object-cover mt-4 rounded-lg" />
                                </div>
                            </div>

                            {/* Fourth Box */}
                            <div className="w-3/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                                <div className="flex-1 pr-6 text-left">
                                    <h3 className="font-bold text-lg mb-4">Assessments & Quizzes For In-Depth Evaluation</h3>
                                    <p className="text-lg leading-relaxed">
                                        Properly evaluate all your candidates to find the right employee. From assessments to quizzes, you can easily assign custom tests to your candidates for efficient, accurate, and comprehensive evaluations.
                                    </p>
                                </div>
                                <img src={job1} className="w-70 h-60 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>

                );
            case "Candidate Management":
                return (
                    <div className="container mx-auto p-4">
                    {/* First section with image on the right and text on the left */}
                    <div className="w-full h-auto mb-6 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                      {/* Text Section */}
                      <div className="flex-1 pr-6 text-left">
                        <h2 className="font-bold text-2xl mb-4">Customizable Drag & Drop Pipeline</h2>
                        <p className="text-lg leading-relaxed">
                          Create hiring pipelines for your job posts with ease. Build your custom
                          pipelines and then drag & drop candidates between every stage that is unique for every job post. 
                          Add every step according to what the specific job opening needs.
                        </p>
                      </div>
                      {/* Image Section */}
                      <img src={candidate1} className="w-90 h-80 object-cover rounded-lg" />
                    </div>
                  
                    {/* Two-column section */}
                    <div className="flex space-x-4">
                      {/* First Column */}
                      <div className="w-1/2 h-auto bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                        {/* Text Section */}
                        <div className="flex-1 pr-6 text-left">
                          <h3 className="font-bold text-xl mb-3">Candidate Status Tracking At Every Stage</h3>
                          <p className="text-md leading-relaxed">
                            Precisely track candidates at every step of the pipeline. From application
                            & evaluation to final onboarding, easily keep track of candidates.
                          </p>
                        </div>
                        {/* Image Section */}
                        <img src={candidate3} className="w-70 h-80 object-cover rounded-lg" />
                      </div>
                  
                      {/* Second Column */}
                      <div className="w-1/2 h-auto bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                        {/* Text Section */}
                        <div className="flex-1 pr-6 text-left">
                          <h3 className="font-bold text-xl mb-3">Automatic Email Notifications For Candidates</h3>
                          <p className="text-md leading-relaxed">
                            Keep all the candidates updated through automatic email notifications
                            whether you are sending invitations, onboarding messages, or other alerts.
                          </p>
                        </div>
                        {/* Image Section */}
                        <img src={candidate2} className="w-70 h-80 object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>
                  
                );
            case "Evaluation":
                return (
                    <div className="container mx-auto p-6">
                    <div className="flex space-x-6">
                        {/* Left Side Box */}
                        <div className="w-1/2 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 text-left">
                            <h2 className="font-bold text-2xl mb-4">Pre-Screening Questions Feature</h2>
                            <p className="text-lg leading-relaxed">
                            Filter out qualified applicants with pre-screening assessments & quizzes. Shortlist candidates for a more specific hiring pool. Make your hiring process easier by listing out the best possible candidates for the job post.
                            </p>
                            <img src={eva1} className="w-full h-90 object-cover mt-4 rounded-lg" />
                        </div>

                        {/* Right Side Box with Two Sub Boxes */}
                        <div className="flex flex-col w-1/2 space-y-6">
                            {/* Top Box */}
                            <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                <div className="w-2/3">
                                    <h3 className="font-bold text-xl mb-2">Hassle-Free Task Or Test Assignment</h3>
                                    <p className="text-lg leading-relaxed">
                                    Directly assign tasks or tests on easy.jobs via platforms like HackerRank. Ensure thorough assessment of your candidates with additional tests.
                                    </p>
                                </div>
                                <img src={eva2} className="w-80 h-70 object-cover rounded-lg" />
                            </div>

                            {/* Bottom Box */}
                            <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                <div className="w-2/3">
                                    <h3 className="font-bold text-xl mb-2">Candidate Resume Evaluation & Rating</h3>
                                    <p className="text-lg leading-relaxed">
                                    Evaluate applicants via resume attachments and rate them with stars. Learn more about candidates and their skills from attached resumes.
                                    </p>
                                </div>
                                <img src={eva3} className="w-80 h-60 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                );
            case "Integrations":
                return (
                    <div className="container mx-auto p-6">
                    <div className="flex space-x-6">
                        {/* Left Side Box */}
                        <div className="w-1/2 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 text-left">
                            <h2 className="font-bold text-2xl mb-4">Dedicated Plugin For WordPress</h2>
                            <p className="text-lg leading-relaxed">
                            Enjoy seamless integration with your WordPress site with our dedicated plugin. With easy.jobs, you can easily promote your job openings on your WordPress site and increase the chances of finding the right candidates.
                            </p>
                            <img src={int1} className="w-full h-90 object-cover mt-4 rounded-lg" />
                        </div>

                        {/* Right Side Box with Two Sub Boxes */}
                        <div className="flex flex-col w-1/2 space-y-6">
                            {/* Top Box */}
                            <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                <div className="w-2/3">
                                    <h3 className="font-bold text-xl mb-2">Handy Widget For Your Elementor Site</h3>
                                    <p className="text-lg leading-relaxed">
                                    easy.jobs also offers a dedicated Elementor widget. Add the widget to your web page and tap into a broader pool of candidates to recruit from.
                                    </p>
                                </div>
                                <img src={int2} className="w-70 h-60 object-cover rounded-lg" />
                            </div>

                            {/* Bottom Box */}
                            <div className="h-80 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center text-left">
                                <div className="w-2/3">
                                    <h3 className="font-bold text-xl mb-2">Multiple Integrations To Boost Hiring</h3>
                                    <p className="text-lg leading-relaxed">
                                    Easily integrate with multiple platforms such as Slack, Zoom, Google Jobs, OpenAI, Calendly, Zapier, DocuSign, Neuvco, HackerRank & more.
                                    </p>
                                </div>
                                <img src={int3} className="w-80 h-60 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                );
            case "Team Collaboration":
                return (
                    <div className="container mx-auto p-4">
                        <div className="flex space-x-6 mb-4">
                            {/* First Box */}
                            <div className="w-3/5 h-auto bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                                <div className="flex-1 pr-6 text-left">
                                    <h2 className="font-bold text-2xl mb-4">External Collaborators For Specific Jobs</h2>
                                    <p className="text-lg leading-relaxed">
                                    Add external collaborators for specific jobs that require special attention. Whether you are hiring a developer or digital marketing specialist, add a relevant external collaborator who can help speed up hiring for the position.
                                    </p>
                                </div>
                                <img src={team2} className="w-80 h-90 object-cover rounded-lg" />
                            </div>

                            {/* Second Box */}
                            <div className="w-2/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex flex-col justify-between text-left">
                                <h3 className="font-bold text-lg mb-4">Separate Roles & Permissions For Users</h3>
                                <p className="text-lg leading-relaxed">
                                Set multiple users for a job post and define their specific roles and permissions. Ensure seamless team collaboration with ease & speed.
                                </p>
                                <div className="flex justify-center">
                                <img src={team1} className="w-70 h-90 object-cover mt-4 rounded-lg" />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            {/* Third Box */}
                            <div className="w-2/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex flex-col justify-between text-left">
                                <h3 className="font-bold text-lg mb-4">Manager Tagging & Note Addition Features</h3>
                                <p className="text-lg leading-relaxed">
                                Tag a manager and add notes in candidate profiles to highlight important details for other users to check directly from their dashboard.
                                </p>
                                <div className="flex justify-center">
                                <img src={team3} className="w-70 h-90 object-cover mt-4 rounded-lg" />
                                </div>
                            </div>

                            {/* Fourth Box */}
                            <div className="w-3/5 h-90 bg-gradient-to-r from-green-100 to-blue-200 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 flex justify-between items-center">
                                <div className="flex-1 pr-6 text-left">
                                    <h3 className="font-bold text-lg mb-4">Seamless Slack Integration To Send Notifications</h3>
                                    <p className="text-lg leading-relaxed">
                                    Enjoy seamless integration with Slack to share instant notifications with ease. Thanks to automatic Slack notifications, you get to save more time and increase the overall efficiency of your hiring process.
                                    </p>
                                </div>
                                <img src={team4} className="w-70 h-60 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className=" text-black rounded p-4">
                <div className="text-center my-4 mt-5" style={{ height: 'auto', width: '80%', margin: '0 auto' }}>
                    <h2 className="py-[32px] font-[Poppins] font-[900] text-[60px] leading-[76px]">
                        Everything You Need To Make Hiring Effortless
                    </h2>
                    <p className="font-weight-bold lead" style={{ height: 'auto', width: '100%' }}>
                        <b>Attract top talent, manage applicants with advanced tools and onboard seamlessly with our all-in-one recruitment SaaS platform</b>
                    </p>
                </div>
                <div className="text-center my-4 mt-5">
                    <ul className="nav justify-content-center bg-blue p-3 rounded shadow">
                        {tabs.map((tab) => (
                            <li className="nav-item cursor-pointer" key={tab}>
                                <p
                                    onClick={() => setActiveTab(tab)}
                                    className={`nav-link text-black transition-all duration-300 
                                border-b-2 ${activeTab === tab ? "border-red-500 bg-light-pink-100" : "border-transparent"}
                                hover:border-pink-500 hover:bg-light-green-00 hover:shadow-md hover:shadow-pink-300`}
                                >
                                    {tab}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container mx-auto p-4">
                    {renderContent()}
                </div>
            </div>
        </>
    );
}

export default CorporateFeatures;
