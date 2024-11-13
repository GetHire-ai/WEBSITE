import React from "react";

function CorporateTrustSection() {
    return (
        <section className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
                    Built for recruiters, by recruiters
                </h2>
                <h3 className="text-center text-gray-500 text-sm md:text-base mt-4">
                    The most complete recruiting experience ever crafted for modern hiring teams
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img src="/applicant_tracking.png" alt="Applicant Tracking" className="w-full h-60 object-cover" />
                    <div className="bg-white p-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Applicant Tracking</h4>
                        <p className="text-sm md:text-base">Streamline the entire hiring process</p>
                    </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img src="/sourcing_crm.png" alt="Sourcing & CRM" className="w-full h-60 object-cover" />
                    <div className="bg-white p-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Sourcing & CRM</h4>
                        <p className="text-sm md:text-base">Build a quality candidate pipeline faster</p>
                    </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img src="/insight_analytics.png" alt="Insights & Analytics" className="w-full h-60 object-cover" />
                    <div className="bg-white p-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Insights & Analytics</h4>
                        <p className="text-sm md:text-base">Report hiring trends with confidence</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CorporateTrustSection;