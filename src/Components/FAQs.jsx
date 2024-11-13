import React, {useState} from "react";

function FAQs() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(Array(5).fill(false));

    return (
        <section className="container max-w-3xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#3e3e3e]">FAQs</h2>
            <div className="space-y-4">
                {[
                    {
                        number: '01',
                        question: 'Is Career Counsellor+ a replacement for a real career counselor?',
                        answer: 'While Career Counsellor+ offers valuable AI-powered guidance and insights, it cannot fully replace the personalized interaction and touch of a real career counselor.'
                    },
                    {
                        number: '02',
                        question: 'How does gethire.ai ensure the quality of candidates?',
                        answer: 'gethire.ai uses sophisticated AI algorithms to assess candidate profiles based on skills, experience, and compatibility with job roles, ensuring only top-quality candidates are presented.'
                    },
                    {
                        number: '03',
                        question: 'Can gethire.ai integrate with my existing HR systems?',
                        answer: 'Yes, gethire.ai supports integration with a variety of HR and recruitment software, making it seamless to incorporate into your current workflow.'
                    },
                    {
                        number: '04',
                        question: 'What industries does gethire.ai cater to?',
                        answer: 'Our platform is designed to be versatile, serving industries from IT and Finance to Healthcare, Education, and more, by tailoring our AI to understand industry-specific requirements.'
                    },
                    {
                        number: '05',
                        question: 'Is there a trial period for gethire.ai?',
                        answer: 'Absolutely, we offer a trial period for new users to experience the full capabilities of gethire.ai before making a commitment.'
                    }
                ].map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => setIsDropdownOpen(prevState => {
                                const newState = [...prevState];
                                newState[index] = !newState[index];
                                return newState;
                            })}
                            className="w-full flex justify-between items-center py-3"
                        >
                            <div className="flex items-center gap-10">
                                <span className="text-2xl text-gray-500 font-medium">{item.number}</span>
                                <h3 className="text-xl font-medium">{item.question}</h3>
                            </div>
                            <i className={`fas fa-angle-down transition-transform duration-300 ${isDropdownOpen[index] ? 'rotate-180' : ''}`}/>
                        </button>
                        <div
                            className={`transition-all duration-300 ${isDropdownOpen[index] ? 'max-h-40 pb-4' : 'max-h-0'} overflow-hidden`}>
                            <p className="text-gray-700">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs;
