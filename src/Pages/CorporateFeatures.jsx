import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/header.css";

// Import images
import emp1 from "../Assets/image1-2-1-768x531.png";
import emp2 from "../Assets/image213-1.png";
import emp3 from "../Assets/image321-1.png";
import job1 from '../Assets/imagesection4-1-768x848.png';
import job2 from '../Assets/imagesec23-1-768x516.png';
import job3 from '../Assets/Frame-1618873057-1-768x480.png';
import job4 from '../Assets/imagesec2-1-768x864.png';
import candidate1 from '../Assets/img55-1-768x484.png';
import candidate2 from '../Assets/img5333-1.png';
import candidate3 from '../Assets/image52-1.png';
import eva1 from '../Assets/image2233-1-768x557.png';
import eva2 from '../Assets/image3344-1.png';
import eva3 from '../Assets/image55334-1.png';
import int1 from '../Assets/image7-1-768x557.png';
import int2 from '../Assets/image71-1.png';
import int3 from '../Assets/Frame-1618873015.png';
import team1 from '../Assets/image82-1-768x533.png';
import team2 from '../Assets/image81-1-768x606.png';
import team3 from '../Assets/image83-1-768x533.png';
import team4 from '../Assets/image84-1-768x914.png';


// Constants for tabs
const TABS = [
    "Employer Brand",
    "Job Post",
    "Candidate Management",
    "Evaluation",
    "Integrations",
    "Team Collaboration",
];

// Helper function to create content blocks
const createContentBlock = (title, description, imageSource) => ({
    title,
    description,
    imageSource,
});


const CONTENT = {
    "Employer Brand": [
        createContentBlock(
            "Personalized Brand Colors & Identity",
            "Place your brand logo and custom favicon to build a distinct brand identity with unique brand colors that speak about your company and its values. Reach competent candidates who suit your company culture perfectly.",
            emp1
        ),
        createContentBlock(
            "Self-Hosted Platform With Custom Domain",
            "Have your own self-hosted platform with a custom domain. This means a career site with a unique URL and the hosting platform of your choice.",
            emp2
        ),
        createContentBlock(
            "Dedicated Career Site & Job Post Template",
            "Pick from ready career site templates and build the perfect job post that suits your brand. Attract more applicants and maximize efficiency.",
            emp3
        ),
    ],
    "Job Post": [
        createContentBlock(
            "Ready Job Post Templates",
            "Pick from ready job post templates to attract more candidates and streamline your hiring process.",
            job4
        ),
        createContentBlock(
            "AI Generated Job Descriptions",
            "Save your time and write compelling content with AI. Instantly generate detailed job descriptions detailing responsibilities & benefits.",
            job2
        ),
        createContentBlock(
            "Remote Interview & Custom Field Features",
            "Interview candidates remotely with Google Meet & Zoom integrations and enable custom field inputs to collect extra information from candidates.",
            job3
        ),
        createContentBlock(
            "Assessments & Quizzes For In-Depth Evaluation",
            "Properly evaluate all your candidates to find the right employee. From assessments to quizzes, you can easily assign custom tests to your candidates for efficient, accurate, and comprehensive evaluations.",
            job1
        ),
    ],
    "Candidate Management": [
        createContentBlock(
            "Customizable Drag & Drop Pipeline",
            "Create hiring pipelines for your job posts with ease. Build your custom pipelines and then drag & drop candidates between every stage that is unique for every job post. Add every step according to what the specific job opening needs.",
            candidate1
        ),
        createContentBlock(
            "Candidate Status Tracking At Every Stage",
            "Precisely track candidates at every step of the pipeline. From application & evaluation to final onboarding, easily keep track of candidates.",
            candidate3
        ),
        createContentBlock(
            "Automatic Email Notifications For Candidates",
            "Keep all the candidates updated through automatic email notifications whether you are sending invitations, onboarding messages, or other alerts.",
            candidate2
        ),
    ],
    "Evaluation": [
        createContentBlock(
            "Pre-Screening Questions Feature",
            "Filter out qualified applicants with pre-screening assessments & quizzes. Shortlist candidates for a more specific hiring pool. Make your hiring process easier by listing out the best possible candidates for the job post.",
            eva1
        ),
        createContentBlock(
            "Hassle-Free Task Or Test Assignment",
            "Directly assign tasks or tests on easy.jobs via platforms like HackerRank. Ensure thorough assessment of your candidates with additional tests.",
            eva2
        ),
        createContentBlock(
            "Candidate Resume Evaluation & Rating",
            "Evaluate applicants via resume attachments and rate them with stars. Learn more about candidates and their skills from attached resumes.",
            eva3
        ),
    ],
    "Integrations": [
        createContentBlock(
            "Dedicated Plugin For WordPress",
            "Enjoy seamless integration with your WordPress site with our dedicated plugin. With easy.jobs, you can easily promote your job openings on your WordPress site and increase the chances of finding the right candidates.",
            int1
        ),
        createContentBlock(
            "Handy Widget For Your Elementor Site",
            "easy.jobs also offers a dedicated Elementor widget. Add the widget to your web page and tap into a broader pool of candidates to recruit from.",
            int2
        ),
        createContentBlock(
            "Multiple Integrations To Boost Hiring",
            "Easily integrate with multiple platforms such as Slack, Zoom, Google Jobs, OpenAI, Calendly, Zapier, DocuSign, Neuvco, HackerRank & more.",
            int3
        ),
    ],
    "Team Collaboration": [
        createContentBlock(
            "External Collaborators For Specific Jobs",
            "Add external collaborators for specific jobs that require special attention. Whether you are hiring a developer or digital marketing specialist, add a relevant external collaborator who can help speed up hiring for the position.",
            team2
        ),
        createContentBlock(
            "Separate Roles & Permissions For Users",
            "Set multiple users for a job post and define their specific roles and permissions. Ensure seamless team collaboration with ease & speed.",
            team1
        ),
        createContentBlock(
            "Manager Tagging & Note Addition Features",
            "Tag a manager and add notes in candidate profiles to highlight important details for other users to check directly from their dashboard.",
            team3
        ),
        createContentBlock(
            "Seamless Slack Integration To Send Notifications",
            "Enjoy seamless integration with Slack to share instant notifications with ease. Thanks to automatic Slack notifications, you get to save more time and increase the overall efficiency of your hiring process.",
            team4
        ),
    ],
};
// Generic function to render content based on the active tab
const renderTabContent = (tabContent) => (
    <div className="container mx-auto p-6">
        <div className="flex flex-row space-x-6">
            {tabContent.map((block, index) => (
                <div key={index}
                     className="w-full md:w-1/2 lg:w-1/3 mb-6 border border-sky-200 p-6 rounded-lg shadow-lg shadow-green-500 text-left">
                        <h2 className="font-bold text-2xl mb-4">{block.title}</h2>
                        <p className="text-lg leading-relaxed">{block.description}</p>
                        <img src={block.imageSource} className="w-full rounded-lg mt-4" alt={block.title} />
                </div>
            ))}
        </div>
    </div>
);

function CorporateFeatures() {
    const[activeTab, setActiveTab] = useState(TABS[0]);

    console.log(activeTab)
    return (
        <div id="features" className="text-black border rounded p-4 m-48">
            <div className="text-center my-4 mt-5" style={{height: 'auto', width: '80%', margin: '0 auto'}}>
                <h2 className="py-[32px] font-[Poppins] font-[900] text-[60px] leading-[76px]">
                    Everything You Need To Make Hiring Effortless
                </h2>
                <p className="font-weight-bold lead">
                    <b>Attract top talent, manage applicants with advanced tools and onboard seamlessly with our
                        all-in-one recruitment SaaS platform</b>
                </p>
            </div>
            <div className="mx-auto max-w-7xl">
                <ul className="pt-3 flex flex-row w-fit gap-8 justify-content-center">
                    {TABS.map((tab) => (
                        <li className="cursor-pointer" key={tab}>
                            <p
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 transition-all duration-300 
                                    ${activeTab === tab ? "bg-gradient-to-r from-green-100 to-blue-200" : "border-transparent"}
                                    hover:bg-blue-100 rounded-xl`}>
                                {tab}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto p-4">
                {renderTabContent(CONTENT[activeTab])}
            </div>
        </div>
    );
}

export default CorporateFeatures;