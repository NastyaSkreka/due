import Value from "@/assets/icons/value-01";
import UnlockTime from "@/assets/icons/value-02";
import BeCurious from "@/assets/icons/value-03";

const OurValues = () => {
    return (
        <div className="max-container">
            <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">Our <span className="text-blue-600">Values</span></h1>
                <p className="leading-normal mb-12 text-center lg:w-3/4 mx-auto text-xl">Our purpose is to empower professionals to spend more time on what matters.</p>
            </div> 
            <div className="flex flex-row justify-center gap-10 lg:px-10 pt-10 pb-32 flex-wrap">
                <div className= "flex flex-col gap-3 p-8 rounded-xl origin-bottom-left bg-white shadow-md w-[420px] min-h-[200px]">
                    <div className="flex flex-col justify-center items-center w-12 h-12 rounded-lg border-none bg-success-1"><Value/></div>
                    <p className="font-semibold text-xl text-black">Value</p>
                    <div className="lg:text-lg ">We use leading edge technology to create new possibilities for busy professionals</div>
                </div>
                <div className= "flex flex-col gap-3 p-8 rounded-xl origin-bottom-left bg-white shadow-md w-[420px] min-h-[200px]">
                    <div className="flex flex-col justify-center items-center w-12 h-12 rounded-lg border-none bg-error-1"><UnlockTime/></div>
                    <p className="font-semibold text-xl text-black">Unlock Time</p>
                    <p className="lg:text-lg">Our solutions unlock time for busy professionals, enabling them to spend time on what matters inside and outside of work</p>
                </div>
                <div className= "flex flex-col gap-3 p-8 rounded-xl origin-bottom-left bg-white shadow-md w-[420px] min-h-[200px]">
                    <div className="flex flex-col justify-center items-center w-12 h-12 rounded-lg border-none bg-warn-1"><BeCurious/></div>
                    <p className="font-semibold text-xl text-black">Be Curious</p>
                    <p className="lg:text-lg">We are curious — and we create opportunities for others to pursue their curiosity through the products we create</p>
                </div>
            </div>
        </div>
    );
};

export default OurValues;