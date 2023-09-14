import { Solution, Journey, OurValues, ValueAdd} from "./sections";

const About = () => {
    return (
        <div className="h-full">        
            <section className='py-48 max-container '>
                <Solution/>
            </section> 
            <section className='padding relative max-container '>
                <Journey/>
            </section>
            <section className='py-20 max-container '>
                <ValueAdd/>
            </section>
            <section className='padding max-container '>
                <OurValues/>
            </section> 
        </div>
    );
};

export default About;