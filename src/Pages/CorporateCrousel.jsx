import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import img1 from "../Assets/download1-1593587085661.avif";
import img2 from '../Assets/jpg.jpeg';
import img3 from '../Assets/HDFC-Bank-emblem.png';
import img4 from '../Assets/edelweiss-870.png';
import img5 from '../Assets/InfoBeans-Technologies-IPO.png';
import img6 from '../Assets/1655997882908.jpeg';
import img7 from '../Assets/FNjtZJ0VgAQFHjz.jpg';
import img8 from '../Assets/image001(1).png';
import img9 from '../Assets/protonshub-companies.jpg';
import img11 from '../Assets/th (3).jpeg';
import img12 from '../Assets/320-3200013_white-elephant-tech-white-elephant-tech-web-development.png';
import img13 from '../Assets/logo-white.png';

import CorporateNavbar from './CorporateNavbar';

function CorporateCrousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ interval: 4000, stopOnInteraction: true }),
  ]);

  const [activeImageIndexes, setActiveImageIndexes] = useState({});

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  const toggleImageColor = (index) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // const imageCaptions = [
  //   "Tuchware pvt ltd",
  //   "Times of india",
  //   "HDFC bank",
  //   "Edelweiss",
  //   "Infobeans",
  //   "Theka coffee",
  //   "Retvens",
  //   "Aman travels",
  //   "Protons hub",
  //   "Vishal builders",
  //   "White elephant",
  //   "Nutrisure",
  // ];

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12, img13];

  return (
    <div className="bg-white-50 flex flex-col items-center embla w-full h-auto mt-28 mb-2 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center px-4">
        Transforming Recruitment For 15,000+ Businesses Globally
      </h1>
      <div className="w-full overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex gap-20 md:gap-20 px-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[80px] md:min-w-[140px] h-[120px] md:h-[220px] flex-shrink-0 relative overflow-hidden rounded-lg flex flex-col items-center"
              onClick={() => toggleImageColor(index)}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className={`w-[100] h-[100px] md:h-[100px] object-cover rounded-lg transition-all duration-500 ${activeImageIndexes[index] ? 'grayscale-0' : 'grayscale'} hover:grayscale-0`}
              />
              {/* <p className="text-center text-sm md:text-base font-semibold mt-2">{imageCaptions[index]}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CorporateCrousel;
