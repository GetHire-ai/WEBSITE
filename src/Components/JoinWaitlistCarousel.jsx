import img1 from "../Assets/download1-1593587085661.avif";
import img2 from "../Assets/jpg.jpeg";
import img3 from "../Assets/HDFC-Bank-emblem.png";
import img4 from "../Assets/edelweiss-870.png";
import img5 from "../Assets/InfoBeans-Technologies-IPO.png";
import img6 from "../Assets/1655997882908.jpeg";
import img7 from "../Assets/FNjtZJ0VgAQFHjz.jpg";
import img8 from "../Assets/image001(1).png";
import img9 from "../Assets/protonshub-companies.jpg";
import img11 from "../Assets/th (3).jpeg";
import img12 from "../Assets/320-3200013_white-elephant-tech-white-elephant-tech-web-development.png";
import img13 from "../Assets/logo-white.png";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

function JoinWaitlistCarousel() {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12, img13];
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [AutoScroll({speed: 2, interval: 2000})]);


    return (
        <div className="bg-white-50 flex flex-col items-center embla w-full h-auto mt-18">
            <div className="w-full overflow-hidden mt-8" ref={emblaRef}>
                <div className="flex gap-12 px-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="h-[100px] flex-shrink-0 relative overflow-hidden rounded-lg flex flex-col items-center"

                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className={`h-[80px] object-cover rounded-lg transition-all duration-500 hover:grayscale-0`}
                            />
                            {/* <p className="text-center text-sm md:text-base font-semibold mt-2">{imageCaptions[index]}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default JoinWaitlistCarousel;