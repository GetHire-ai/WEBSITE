import React from 'react';

const JobCard = ({ title, openings,  hoverColor,title1, openings1,  hoverColor1 }) => {
  return (
    <div
      style={{
        boxShadow: "-6px 9px 34px #d5d5d540",
       border: "2px solid lightgray",
        borderRadius: "12px",
      }}
      className={`px-[40px] py-[2px] max-w-[250px] w-full flex flex-col items-center justify-center gap-[9px] transition-all duration-300  hover:${hoverColor} hover:${hoverColor1}`}
    >
      <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#0a050f] mb-0">
        {title}
      </h6>
      <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8b58c6] mb-0">
        {openings}
      </p>
      <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#0a050f] mb-0">
        {title1}
      </h6>
      <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8b58c6] mb-0">
        {openings1}
      </p>
    </div>
    
  );
};


export default JobCard;
