import { Hero, Review, Share, Upload, Footer } from '../sections/index'
import Nav from '../../../components/Nav';

const Home = () => {
    return(
        <main className='relative'>  
        <Nav/>          
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
    <section className='padding-x padding-t pb-8 bg-slate-50'>
        <Footer/>
    </section>
    </main>
    )
};
export default Home;