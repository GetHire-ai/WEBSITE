import frameImage from "../Assets/Frame-1618872965.png";
import React from "react";


function CorporateAISection() {
    const openCalendlyPopup = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({url: 'https://calendly.com/grao8/intro-to-gethireai-1-ats-software-for-recruiters'});
        } else {
            console.error("Calendly object not available. Please check if the script has loaded correctly.");
        }
    };


    return (
    <section className="max-w-7xl mx-auto my-16">
        <div className="bg-gradient-to-r from-[#e1f7f7] via-[#f0e9f7] to-[#f0fdf9] rounded-lg p-20 relative">
            <div className="grid sm:grid-cols-5 gap-16 items-start relative z-10">
                <div className="sm:col-span-3">

                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">
                            Use <span
                            className="bg-gradient-to-r from-[#ff7e5f] to-[#86a8e7] bg-clip-text text-transparent">
                                Advanced AI
                            </span> To Make Hiring Smoother & Faster
                        </h2>
                        <p className="text-2xl text-gray-600">
                            Experience Lightning-Fast Hiring with Gethire.ai
                        </p>
                    </div>


                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <img src="/gethireai_logo.png" className="h-10 object-cover" alt="GetHireAI Logo"/>
                    <button
                        className="bg-[#316EDC] hover:bg-[#295EC9] rounded-full text-white font-light text-xl px-4 py-2 transition-colors duration-300 ease-in-out"
                        onClick={openCalendlyPopup}>
                        Book a Demo
                    </button>
                </div>
            </div>

        </div>
    </section>
    )
}

export default CorporateAISection;