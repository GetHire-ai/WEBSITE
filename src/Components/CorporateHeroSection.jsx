import React, {useEffect} from "react";


function CorporateHeroSection() {

    useEffect(() => {
        // Load CSS
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // Load Script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
            document.head.removeChild(link);
        };
    }, []);


    const openCalendlyPopup = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({url: 'https://calendly.com/grao8/intro-to-gethireai-1-ats-software-for-recruiters'});
        } else {
            console.error("Calendly object not available. Please check if the script has loaded correctly.");
        }
    };

    return (
        <section id="hero" className="container mx-auto px-4 pt-56 pb-24">
            <div className="text-center">
                  <span className="text-[#295EC9] text-md font-normal mb-4 block">
                    #1 AI-Powered Recruitment in India
                  </span>
                <h1 className="text-[#2d3135] text-5xl md:text-5xl font-black mb-12 max-w-4xl mx-auto">
                    Revolutionize Hiring with AI<br/>
                    Hire Top Talent in Under
                    <span className="text-[#295EC9]"> 24 Hours</span>
                </h1>
                <h4 className="text-[#2d3135] text-md font-light max-w-2xl mx-auto mb-12">
                    Our AI-driven platform sources, screens, interviews, and evaluates candidates quickly and efficiently, making your hiring process seamless.
                </h4>

                {/* Calendly Form */}
                <div className="flex justify-center items-center gap-4">
                    <button className="bg-[#316EDC] hover:bg-[#295EC9] rounded-full text-white font-light text-xl px-4 py-2 transition-colors duration-300 ease-in-out"
                            onClick={openCalendlyPopup}>
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CorporateHeroSection;