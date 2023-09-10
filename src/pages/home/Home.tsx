import { Hero, Review, Share, Upload } from './sections'

const Home = () => {
    return(   
        <>         
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
        <Hero/>
    </section>
    <section className='padding'>
        <Upload/>
    </section>
    <section className='padding'>
        <Review/>
    </section>
    <section className='padding'>
        <Share/>
    </section>
    </> 
    )
};
export default Home;