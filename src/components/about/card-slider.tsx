import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CardType = {
  imageUrl: string;
  description: string;
  step: string;
};

type CardSliderProps = {
  cards: CardType[];
};

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
  };

  const bgColorLeft = [
    "journey-card_secondary01",
    "journey-card_secondary02",
    "journey-card_secondary03",
    "journey-card_secondary04", 
    "journey-card_secondary05", 
    "journey-card_secondary01",
    "journey-card_secondary02",
    "journey-card_secondary03",
    "journey-card_secondary04", 
    "journey-card_secondary05",  
    "journey-card_secondary01",
    
];
const bgColorRigth = [
    "journey-card_main01", 
    "journey-card_main02",
    "journey-card_main03",
    "journey-card_main04",
    "journey-card_main05",
    "journey-card_main01", 
    "journey-card_main02",
    "journey-card_main03",
    "journey-card_main04",
    "journey-card_main05",
    "journey-card_main01",
]

  return (
    <>
    <div className={"flex relative max-lg:flex-col border rounded-xl h-screen max-lg:max-w-3xl max-lg:mx-auto"}>
    
      <div className={`flex items-center justify-center lg:flex-1 p-20 max-lg:py-5  ${bgColorLeft[currentSlide]}`}>
        <h2 className="font-semibold md:text-lg py-4 max-lg:p-0 lg:text-2xl xl:text-3xl px-2 md:px-0 pt-6 md:w-7/12 text-center dark:text-black/80">{cards[currentSlide].description}</h2>
        <p className={`font-semibold md:text-lg absolute px-1 py-1  md:px-2 lg:left-0 -top-3 lg:top-3 rounded ${bgColorRigth[currentSlide]}`}>{cards[currentSlide].step}</p> 
      </div>
      <div className={`w-full flex-1 ${bgColorRigth[currentSlide]} relative`}>
        <div className="w-3/4 h-3/4  bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-full h-full rounded-full" src={cards[currentSlide].imageUrl} alt={cards[currentSlide].description} />  
        </div>
      </div>
     
    </div>
      <div className='flex gap-10 justify-center mt-3'>
      <button onClick={prevSlide} className="rounded-lg bg-sky-500 p-2">
        Previous
      </button>
      <button onClick={nextSlide} className="rounded-lg bg-sky-500 p-2">
        Next
      </button>
      </div>
      </>
  );
};

export default CardSlider;

