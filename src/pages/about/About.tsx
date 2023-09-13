import { Solution, Journey, OurValues, ValueAdd} from "./sections";

const About = () => {
    return (
        <div className="h-full">        
            {/* <section className='py-48'>
                <Solution/>
            </section> */}
            <section className='padding relative'>
                <Journey/>
            </section>
            {/* <section className='py-20'>
                <ValueAdd/>
            </section>
            <section className='padding'>
                <OurValues/>
            </section> */}
        </div>
    );
};

export default About;