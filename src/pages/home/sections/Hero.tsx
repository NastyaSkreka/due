import AnimatedGradientBackground from "@/components/animation/AnimatedGradientBackground";
const Hero = () => {
        return (
                <div className="relative flex items-center flex-col justify-center  w-full max-xl:padding-x pt-28">
                    <div className="flex text-center">
                    <AnimatedGradientBackground/>
                    </div>
                     <div className="max-w-5xl">
                     <p className="text-center text-2xl text-slate-600 ">An end-to-end solution that uses automation and artificial intelligence to streamline document review and automate due diligence reporting making the reports more actionable and valuable for decision-makers.</p>
                     </div>
                
                </div>         
        );
};

export default Hero;