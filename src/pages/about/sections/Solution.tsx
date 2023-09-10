import SolutionSlider from "@/components/SolutionSlider";

const Solution = () => {
    return (
        <>
        <div className="w-full flex flex-col justify-center  max-container">
            <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="text-8xl mb-5 font-semibold">Our <span className="text-blue-600">Solution</span></h1>
                <p className="mb-12 text-center lg:w-3/4 mx-auto text-xl">Our mission is to provide a single platform to make Mergers & Acquisitions, Initial Public Offerings and Real Estate transactions easier and faster by automating and streamlining the legal due diligence process.</p>
            </div>  
            
        </div>
       
        <SolutionSlider/>
</>
    );
};

export default Solution;