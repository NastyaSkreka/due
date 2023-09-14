import AnimatedGradientBackground from "@/components/animation/AnimatedGradientBackground";
const Hero = () => {
        return (
                <div className="relative flex items-center flex-col justify-center  w-full  max-lg:pt-5 pt-28">
                    <div className="flex text-center">
                    <AnimatedGradientBackground/>
                    </div>
                     <div className="max-md:max-w-2xl  max-lg:max-w-4xl  max-w-5xl">
                     <p className="max-md:text-sm text-center max-lg:text-lg text-2xl text-slate-600 ">An end-to-end solution that uses automation and artificial intelligence to streamline document review and automate due diligence reporting making the reports more actionable and valuable for decision-makers.</p>
                     </div>
                
                </div>         
        );
};

export default Hero;