import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CrossList from "@/assets/icons/cross-list";
import CheckList from "@/assets/icons/Check-list";


const TableSlider = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };

  return (

      <Slider {...settings}>  
    <div>
        <div className="flex flex-col justify-start items-center relative rounded-2xl p-2 mt-10 h-3/4 border border-primary-3 w-10/12 sm:w-6/12 md:w-4/12 mx-auto scale-90 shadow-lg">
           <div className="flex flex-row absolute rounded-lg origin-top border border-primary-3 -top-7 bg-white" ><p className="px-3 py-2 text-2xl">Freemium</p></div>
           <div className="flex flex-row  justify-start items-end origin-left w-fit mb-4 mt-10  rounded-3xl p-2 shadow-lg shadow-white/20"><p className="text-3xl">Free</p></div>
           <div className="flex flex-col justify-center items-start gap-6 p-3 mb-4 font-medium">
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Users: Up to 10 free users (including view-only users)</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Data storage and secure document sharing: Limited (500MB per organization)</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Templates: Access to standard report templates</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Sharing: Online sharing of report with client</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"><CrossList/></div>
                <p className="line-through decoration-red-400 text-lg">Automated question-answering</p>
            </div>
            </div>
    </div>
        </div>
        <div>
        <div className="flex flex-col justify-start items-center relative rounded-2xl p-2 mt-10 h-3/4 border border-primary-3 w-10/12 sm:w-6/12 md:w-4/12  bg-gradient-to-tr from-primary-3  mx-auto shadow-lg">
           <div className="flex flex-row absolute rounded-lg origin-top border border-primary-3 -top-7 bg-white" ><p className="px-3 py-2 text-2xl">Teams</p></div>
           <div className="flex flex-row justify-start items-end origin-left w-fit mb-4 mt-10 p-1 rounded-3xl border-b px-3">
                <p className="font-semibold text-3xl animate-bounce ease-in-out">$149</p>
                <p className="font-sm">/mth</p>

           </div>

           <div className="flex flex-col justify-center items-start gap-6 p-3 mb-4 font-medium">
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Users: Pay per user. Unlimited free view-only users included</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Data storage and secure document sharing: Unlimited</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Templates: Unlimited customization of report templates</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Sharing: Downloadable PDF report. Downloadable Word report (coming soon)</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Automated question-answering</p>
            </div>
            
            </div>
    </div>
        </div>       
        <div>
        <div className="flex flex-col justify-start items-center relative rounded-2xl p-2 mt-10 h-3/4 border border-primary-3 w-10/12 sm:w-6/12 md:w-4/12 mx-auto scale-90 shadow-lg">
           <div className="flex flex-row absolute rounded-lg origin-top border border-primary-3 -top-7 bg-white" ><p className="px-3 py-2 text-2xl">Enterprise</p></div>
           <div className="flex flex-row justify-start items-end origin-left w-fit mb-4 mt-10 p-1 rounded-3xl border-b px-3">
                <p className="font-semibold text-3xl animate-bounce ease-in-out">$129</p>
                <p className="font-sm">/mth</p>
           </div>
           <p className="mb-3 opacity-70 font-medium">(for organizations with 50 or more users )</p>
           <div className="flex flex-col justify-center items-start gap-6 p-3 mb-4 font-medium">
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Users: Pay per user. Unlimited free view-only users included</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Data storage and secure document sharing: Unlimited</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Templates: Unlimited customization of report templates</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Report Sharing: Downloadable PDF report. Downloadable Word report (coming soon)</p>
            </div>
            <div className="flex flex-row items-start gap-3">
                <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center"> <CheckList /></div>
                <p className="leading-normal text-lg">Automated question-answering</p>
            </div>
            </div>
    </div>
        </div>
      </Slider>

  );
};

export default TableSlider;


