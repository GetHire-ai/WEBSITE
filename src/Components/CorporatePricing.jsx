import React from "react";

function CorporatePricing() {


    return (
        <section className="py-24">
            <div className="max-w-4xl m-auto">
                <div className="text-center font-bold text-6xl leading-tight text-gray-800 pb-2 mb-12">
                    Hiring plans that meet your
                    <span className="text-[#295EC9]">&nbsp;hiring needs</span>
                </div>
                <p className="max-w-[780px] pb-12 m-auto w-full text-center text-gray-500 text-xl font-normal leading-[1.7]">
                    Reduce cost and time in hiring the perfect candidate for your organization with a hiring plan
                    tailored to your hiring requirements!
                </p>
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
                    {/* Plan: Basic */}
                    <PlanCard
                        title="Basic"
                        price="₹2000"
                        description="Ideal for early stage startups or businesses hiring occasionally"
                        features={[
                            "1 job post",
                            "Shortlisted candidates in less than 24 hours",
                            {text: "Interviewed candidates with overall fitment score", available: false},
                            {text: "Job Boost for 10X talent pool", available: false},
                            {text: "Premium placement for urgent hiring", available: false},
                            {text: "Instant feedback for employer branding", available: false},
                        ]}
                        buttonText="Post job now"
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] hover:text-black border hover:border-[#2570b8]"
                        note="*Excluding GST"
                    />

                    {/* Plan: GoodSpace Plus */}
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
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] hover:text-black border hover:border-[#2570b8]"
                        note="*Excluding GST"
                        favorite={true}
                    />

                    {/* Plan: Enterprise */}
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
                        buttonStyle="bg-[#316EDC] text-white hover:bg-[#295EC9] hover:text-black border hover:border-[#2570b8]"
                        note="*Excluding GST"
                    />
                </div>
            </div>
            <style jsx>{`
                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </section>
    );
}

function PlanCard({title, price, description, features, buttonText, buttonStyle, cardStyle = "", note, favorite}) {

    const gradientStyles = {
        background: 'linear-gradient(90deg, #e1f7f7, #f0e9f7, #f0fdf9)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 8s ease infinite'
    };

    return (
        <div className={`border border-[#DDDDDD] rounded-[16px] px-6 py-8 flex flex-col items-center ${cardStyle}`} style={favorite? gradientStyles: {}}>
            <div
                className={`text-center font-bold text-2xl leading-tight mb-4 ${cardStyle ? "text-white" : "text-[#113455]"}`}>
                {title}
            </div>
            <p className={`font-normal text-center text-sm leading-5 mb-4 ${cardStyle ? "text-white" : "text-[#2d3135]"}`}>
                {description}
            </p>
            {price && (
                <h6 className={`text-center font-semibold text-5xl leading-tight my-5 ${cardStyle ? "text-white" : "text-[#113455]"}`}>
                    {price}
                </h6>
            )}
            <button className={`px-6 py-3 rounded-md font-semibold text-sm transition duration-300 w-full ${buttonStyle}`}>
                {buttonText}
            </button>
            <ul className="pt-4 w-full">
                {features.map((feature, index) =>
                    typeof feature === "string" ? (
                        <FeatureItem key={index} text={feature} available={true} />
                    ) : (
                        <FeatureItem key={index} text={feature.text} available={feature.available} />
                    )
                )}
            </ul>
            {note && <p className="text-right text-[10px] font-normal leading-4 w-full m-0">{note}</p>}
        </div>
    );
}

function FeatureItem({ text, available }) {
    return (
        <li className={`mt-2 mb-1 flex items-center gap-2 font-normal text-base leading-6 ${available ? "text-[#2d3135]" : "text-opacity-50 text-[#2d3135]"}`}>
            <i className={`fa-solid ${available ? "fa-check text-[#2570b8]" : "fa-xmark text-[#2570b8]"} text-lg`}></i>
            {text}
        </li>
    );
}

export default CorporatePricing;