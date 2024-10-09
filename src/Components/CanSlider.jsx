import React from "react";
import Slider from "react-slick";

function CanSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
          <div>
          <div className="in-card">
              <h6 className="text-[20px] leading-[24px] text-center font-[700] font-[Poppins] ">
                “Best Innovation in HR Technology”
              </h6>
              <p className="text-[20px] leading-[24px] font-[500] text-center text-[#242424] font-[Poppins] ">
                2018 & 2019
              </p>
              <p className="font-[400] text-[18px] mt-[26px] mb-[10px] text-center leading-[24px] text-[#64607db3]">
                Awarded “Best Innovation in HR Technology” at the Genius HR
                Awards 2018 & 2019
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default CanSlider;
