import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CardSlider } from '@/pages/about/sections/Solution'
import ArrowIcon from '@/assets/icons/arrow-list'

interface SolutionSliderProps {
  cards: CardSlider[]
}



const SolutionSlider: React.FC<SolutionSliderProps> = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="!flex !max-w-fit items-start  h-full px-3 mx-3 lg:mx-0"
        >
          <div className="flex flex-col gap-5 card border-2 !w-96 px-4 py-6">
            <div className="text-xl font-semibold lg:pr-16 text-center lg:text-left">
              {card.title}
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
                <ArrowIcon />
              </div>
              <p className="text-md leading-normal">{card.description1}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
                <ArrowIcon />
              </div>
              <p className="text-md leading-normal">{card.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SolutionSlider;
