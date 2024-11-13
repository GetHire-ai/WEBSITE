import React from "react";

function CorporatePricing() {
    return (
        <section id="pricing" className="py-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800 mb-4">
                    Hiring plans that meet your
                    <span className="text-[#295EC9]">&nbsp;hiring needs</span>
                </h2>
                <p className="max-w-[780px] mx-auto text-center text-gray-500 text-base md:text-lg leading-relaxed">
                    Reduce cost and time in hiring the perfect candidate for your organization with a hiring plan
                    tailored to your hiring requirements!
                </p>
            </div>
            <div className="mt-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PlanCard
                        title="Basic"
                        price="₹2000"
                        description="Ideal for early stage startups or businesses hiring occasionally"
                        features={[
                            "1 job post",
                            "Shortlisted candidates in less than 24 hours",
                            { text: "Interviewed candidates with overall fitment score", available: false },
                            { text: "Job Boost for 10X talent pool", available: false },
                            { text: "Premium placement for urgent hiring", available: false },
                            { text: "Instant feedback for employer branding", available: false },
                        ]}
                        buttonText="Post job now"
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] border hover:border-[#2570b8]"
                        note="*Excluding GST"
                    />
                    <PlanCard
                        title="GetHire Plus"
                        price="₹3000"
                        description="Best for small to medium-sized businesses with urgent hiring needs"
                        features={[
                            "1 job post",
                            "₹100 onboarding credit",
                            "Shortlisted candidates in less than 24 hours",
                            "Interviewed candidates with overall fitment score",
                            "Job Boost for 10X talent pool",
                            "Urgent hiring support",
                        ]}
                        buttonText="Post job now"
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] border hover:border-[#2570b8]"
                        note="*Excluding GST"
                        favorite={true}
                    />
                    <PlanCard
                        title="GetHire Enterprise"
                        price="Custom"
                        description="Tailored for large businesses requiring end-to-end hiring solutions"
                        features={[
                            "Unlimited job posts**",
                            "Unlimited shortlisted and interviewed candidates, 24x7",
                            "Unlimited job boosts for 10X talent pool",
                            "Access to 10M+ verified talent pool",
                            "High priority placement for all jobs",
                            "Dedicated account manager",
                        ]}
                        buttonText="Contact Sales Team"
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] border hover:border-[#2570b8]"
                        note="*Excluding GST"
                    />
                </div>
            </div>
        </section>
    );
}

function PlanCard({ title, price, description, features, buttonText, buttonStyle, note, favorite }) {
    const gradientStyles = {
        background: 'linear-gradient(90deg, #e1f7f7, #f0e9f7, #f0fdf9)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 8s ease infinite',
    };

    return (
        <div className={`border rounded-xl p-6 flex flex-col items-center ${favorite ? "shadow-lg" : ""}`} style={favorite ? gradientStyles : {}}>
            <h3 className={`text-xl md:text-2xl font-bold text-center ${favorite ? "text-gray-700" : "text-[#113455]"}`}>{title}</h3>
            <p className="text-sm text-center text-gray-500 mt-2">{description}</p>
            <h4 className="text-3xl md:text-4xl font-semibold text-center my-6">{price}</h4>
            <button className={`w-full py-2 rounded-md font-medium ${buttonStyle}`}>{buttonText}</button>
            <ul className="mt-4 w-full">
                {features.map((feature, index) => (
                    typeof feature === "string" ? (
                        <FeatureItem key={index} text={feature} available={true} />
                    ) : (
                        <FeatureItem key={index} text={feature.text} available={feature.available} />
                    )
                ))}
            </ul>
            {note && <p className="text-xs text-gray-400 mt-4 text-right w-full">{note}</p>}
        </div>
    );
}

function FeatureItem({ text, available }) {
    return (
        <li className={`flex items-center text-sm mt-2 ${available ? "text-gray-700" : "text-gray-400"}`}>
            <i className={`mr-2 ${available ? "fa-check text-green-500" : "fa-times text-red-500"}`}></i>
            {text}
        </li>
    );
}

export default CorporatePricing;