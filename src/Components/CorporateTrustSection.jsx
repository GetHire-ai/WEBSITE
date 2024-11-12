import React from "react";

function CorporateTrustSection() {
    return (
        <section className="max-w-5xl mx-auto my-16">

            <div className="flex flex-col ">
                <h2 className="text-5xl text-center">
                    Built for recruiters, by recruiters
                </h2>
                <h3 className="text-center text-gray-500">
                    The most complete recruiting experience ever crafted for modern hiring teams
                </h3>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 min-h-[400px]">
                <div className="relative rounded-2xl">
                    <div className="h-4/5">
                        <img src="/applicant_tracking.png" alt="Applicant Tracking"
                             className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                    <div className="backdrop-blur-2xl p-4">
                        <h4 className="text-3xl font-semibold mb-2 relative">Applicant Tracking</h4>
                        <p className="relative">Streamline the entire hiring process</p>
                    </div>
                </div>
                <div className="relative rounded-2xl">
                    <div className="h-4/5">
                        <img src="/sourcing_crm.png" alt="Sourcing & CRM"
                             className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                    <div className="backdrop-blur-2xl p-4">
                        <h4 className="text-2xl font-bold mb-2 relative">Sourcing & CRM</h4>
                        <p className="relative">Build a quality candidate pipeline faster</p>
                    </div>
                </div>
                <div className="relative rounded-2xl">
                    <div className="h-4/5">
                        <img src="/insight_analytics.png" alt="Insights & Analytics"
                             className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                    <div className="backdrop-blur-2xl p-4">
                        <h4 className="text-2xl font-bold mb-2 relative">Insights & Analytics</h4>
                        <p className="relative">Report hiring trends with confidence</p>
                    </div>
                </div>
            </div>
        </section>
)
}

export default CorporateTrustSection;