import frameImage from "../Assets/Frame-1618872965.png";
import React from "react";


function CorporateAISection() {
    return (
    <section className="mx-5 sm:mx-20 mb-20">
        <div className="bg-gradient-to-r from-[#e1f7f7] via-[#f0e9f7] to-[#f0fdf9] rounded-lg p-20 relative">
            <div className="grid sm:grid-cols-5 gap-8 items-start relative z-10">
                <div className="sm:col-span-3">
                    <img src={frameImage} className="w-14 h-14 mb-4" alt="AI Icon"/>
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

                    <div className="flex items-center gap-4 mt-6">
                        <button className="bg-[#008fbf] text-white rounded-xl hover:bg-[#316EDC] whitespace-nowrap">
                            Button a Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CorporateAISection;