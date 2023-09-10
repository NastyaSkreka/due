import { Hero, Review, Share, Upload } from './sections'

const Home = () => {
    return(   
        <>         
    <section className='xl:padding-l wide:padding-r padding-b'>
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