import { Careers } from "@/assets/svgs";

const Join = () => {
    return (
       <section className="max-lg:py-20 py-40">
        <div className="flex flex-col gap-4 max-lg:py-10 py-20  max-container">
        <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">Join<span className="text-blue-600">Us</span></h1>
                <p className="leading-normal mb-12 text-center  mx-auto text-xl">We don’t currently have any vacancies but check back here in future for career opportunities with Due!</p>
        </div> 
            <div className="flex flex-row justify-center items-center max-lg:pt-12">
            <Careers/>
            </div>
        </div>  
       </section>
    );
};

export default Join;

