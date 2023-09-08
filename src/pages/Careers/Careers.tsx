import { Careers } from "@/assets/svgs";

const Join = () => {
    return (
       <section className="py-48">
        <div className="w-full flex flex-col justify-center  max-container">
            <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="text-8xl mb-5 font-semibold">Join <span className="text-blue-600">Us</span></h1>
                <p className="mb-12 text-center  text-xl">We don’t currently have any vacancies but check back here in future for career opportunities with Due!</p>
                <Careers/>
            </div>  
        </div>
       </section>
    );
};

export default Join;