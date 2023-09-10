import { Solution, Journey, OurValues, ValueAdd} from "./sections";

const About = () => {
    return (
        <>        
    <section className='py-48'>
        <Solution/>
    </section>
    <section className='padding'>
        <Journey/>
    </section>
    <section className='py-20'>
        <ValueAdd/>
    </section>
    <section className='padding'>
        <OurValues/>
    </section>
        </>
    );
};

export default About;