import SolutionSlider from "@/components/SolutionSlider";

export type CardSlider = {
    title: string;
    description1: string;
    description2: string;
  };

const Solution = () => {

   const cards:CardSlider[] = [
        { title: 'Карточка 1', description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
        { title: 'Карточка 2',  description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
        { title: 'Карточка 3',description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
        { title: 'Карточка 1', description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
        { title: 'Карточка 2',  description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
        { title: 'Карточка 3',description1: 'Описание карточки 1' , description2:'Описание карточки 1'},
      ]; 


    return (
        <>
        <div className="w-full flex flex-col justify-center  max-container">
            <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="text-8xl mb-5 font-semibold">Our <span className="text-blue-600">Solution</span></h1>
                <p className="mb-12 text-center lg:w-3/4 mx-auto text-xl">Our mission is to provide a single platform to make Mergers & Acquisitions, Initial Public Offerings and Real Estate transactions easier and faster by automating and streamlining the legal due diligence process.</p>
            </div>  
            <SolutionSlider cards={cards as CardSlider[]}/>
        </div>
      
</>
    );
};

export default Solution;