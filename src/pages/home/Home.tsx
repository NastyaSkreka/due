import { Hero, Review, Share, Upload } from './sections'

const Home = () => {
    return(   
        <>         
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
        <Hero/>
    </section>
    <section className="max-container pb-20 max-sm:pb-4">
        <Upload/>
    </section>
    <section className='max-container max-lg:py-10 max-sm:py-5 py-20'>
        <Review/>
    </section>
    <section className='max-container max-lg:py-10 max-sm:py-5 py-20'>
        <Share/>
    </section>
    </> 
    )
};
export default Home;