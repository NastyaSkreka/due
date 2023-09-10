// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SolutionSlider = () => {
  const settings = {
    dots: true, // Включаємо точки (індикатори) навігації
    infinite: false, // Безкінечна прокрутка слайдів
    speed: 500, // Швидкість анімації
    slidesToShow: 3, // Кількість слайдів, які відображаються одночасно
    slidesToScroll: 1, // Кількість слайдів, які прокручуються за раз
    responsive: [
      {
        breakpoint: 1024, // Змінити параметри при розширенні 1024px і менше
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Змінити параметри при розширенні 768px і менше
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-container">
    <Slider {...settings}>
      <div className="w-1/3 p-4 ">
        <div className="flex flex-col gap-5 bg-slate-50 p-5 w-96 rounded border border-inherit">
          <div className="text-xl font-medium">Слайд 1</div>
          <div className="text-lg ">Lorem ipsum dolor sit amet.</div>
          <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="flex flex-col gap-5 bg-slate-50 p-5 w-96 rounded border border-inherit">
          <div className="text-xl font-medium ">Слайд 2</div>
          <div className="text-lg">Lorem ipsum dolor sit amet.</div>
          <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="flex flex-col gap-5 bg-slate-50 p-5 w-96 rounded border border-inherit">
          <div className="text-xl font-medium ">Слайд 3</div>
          <div className="text-lg ">Lorem ipsum dolor sit amet.</div>
          <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        </div>
      </div>
      <div className="w-1/3 p-4">
        <div className="flex flex-col gap-5 bg-slate-50 p-5 w-96 rounded border border-inherit">
          <div className="text-xl font-medium ">Слайд 3</div>
          <div className="text-lg ">Lorem ipsum dolor sit amet.</div>
          <div className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        </div>
      </div>
   
    </Slider>
  </div>
);

};

export default SolutionSlider;


