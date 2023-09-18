import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardSlider } from "@/pages/about/sections/Solution";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Check from "@/assets/icons/check";

interface SolutionSliderProps {
  cards: CardSlider[];
}

const SolutionSlider: React.FC<SolutionSliderProps> = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <FaArrowLeft />, // Используйте компоненты стрелок
    nextArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
   
      <Slider {...settings}>
      {cards.map((card, index) => (
          <div key={index} className="flex max-w-fit card bg-sky-500 items-start max-lg:align-center h-64 ">
            <div className="flex flex-col gap-5 bg-basic-50 dark:bg-secondary-3 w-96 px-4 py-6">
            <div className="semibold text-lg lg:pr-5 text-center lg:text-left">{card.title}</div>   
                <p>{card.description1}</p>              
                <p>{card.description2}</p>
            </div>
            </div>
     
        ))}
      </Slider>
 
  );
};

export default SolutionSlider;



