import { ReportsSnippet } from '@/assets/snippets';

import AnimatedShareItems from '@/components/animation/items/AnimatedShareItems';

const Share = () => {
    return (
        <>
        <div className='flex flex-col items-center'>
            <div className='-mb-1 h-28 w-0.5 bg-gradient-to-t from-blue-600 to-white'></div>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex flex-col justify-center items-center h-10 w-10 rounded-full bg-blue-500'>
                    <p className='font-bold text-center text-white'>3</p>
                </div>
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">Share</h2>
            </div>
        </div>
        <p className='text-center text-3xl font-semibold mb-2'>Share your findings with your client in real time.</p>
        <p className='m-auto text-d text-center max-w-4xl mb-12'>
        Deals often move quickly and clients want to know what the red flags are as soon as they are discovered, to avoid any delays in completing the transaction. Differentiate yourself from your competitors by securely sharing your findings in real-time with your clients.</p>
        <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
            <div className='flex-1 flex justify-center'>
                <ReportsSnippet/>
            </div> 
        <div className='flex flex-col items-center px-8 hidden lg:flex'>
            <div className='flex flex-col items-center'>
                <div className='h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white'></div>
                <svg className="fill-current" height="18" viewBox="0 0 24 24" width="18"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path></svg>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white'></div>
                <svg className="fill-current" height="18" viewBox="0 0 24 24" width="18"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path></svg>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white'></div>
                <svg className="fill-current" height="18" viewBox="0 0 24 24" width="18"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path></svg>
            </div>
        </div>
           <AnimatedShareItems/>
        </div>  
        </>

    );
};

export default Share;