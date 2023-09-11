import { Hero, Review, Share, Upload } from './sections'

const Home = () => {
    return(   
        <>         
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
        <Hero/>
    </section>
    <section className="max-container pb-20">
        <Upload/>
    </section>
    <section className='max-container py-20'>
        <Review/>
    </section>
    <section className='max-container py-20'>
        <Share/>
    </section>
    </> 
    )
};
export default Home;