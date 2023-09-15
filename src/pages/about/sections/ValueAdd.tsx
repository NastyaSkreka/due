import SoftwareSolution from "@/assets/icons/card-01";
import Report from "@/assets/icons/card-02";
import Customise from "@/assets/icons/card-03";
import RedFlags from "@/assets/icons/card-04";

const ValueAdd = () => {
    return (
      <div className="max-container">
               <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <div className=" max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">What <span className="text-blue-600">Value</span> Do We<span className="text-blue-600"> Add?</span></div>
                <p className="leading-normal mb-12 text-center lg:w-3/4 mx-auto text-xl">We focus on automating administrative tasks in the due diligence process that can't be charged to your client, reducing your costs and increasing your profit margins.</p>
            </div> 
            <div className="flex flex-row gap-10 w-full overflow-hidden flex-wrap justify-center py-5">
                <div className="flex flex-col gap-3 p-8 rounded-xl origin-bottom-left w-[520px] min-h-[250px] bg-secondary-2">
                    <div className="flex flex-col justify-center items-center card  w-12 h-12 rounded-lg border-none bg-primary-2 "><SoftwareSolution/></div>
                    <div className="leading-normal text-xl lg:text-lg">Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.</div>
                </div>
                <div className="flex flex-col gap-3 p-8 rounded-xl origin-bottom-left w-[520px] min-h-[250px] bg-success-1">
                    <div className="flex flex-col justify-center items-center card  w-12 h-12 rounded-lg border-none bg-success-2"><Report/></div>
                    <div className="leading-normal text-xl lg:text-lg">Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.</div>
                </div>
                <div className="flex flex-col gap-3 p-8 rounded-xl origin-bottom-left w-[520px] min-h-[250px] bg-error-1">
                    <div className="flex flex-col justify-center items-center card  w-12 h-12 rounded-lg border-none bg-error-2"><Customise/></div>
                    <div className="leading-normal text-xl lg:text-lg">Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.</div>
                </div>
                <div className="flex flex-col gap-3 p-8 rounded-xl origin-bottom-left w-[520px] min-h-[250px] bg-warn-1">
                    <div className="flex flex-col justify-center items-center card  w-12 h-12 rounded-lg border-none bg-warn-3"><RedFlags/></div>
                    <div className="leading-normal text-xl lg:text-lg">Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.</div>
                </div>
            </div>
      </div>
    );
};

export default ValueAdd;