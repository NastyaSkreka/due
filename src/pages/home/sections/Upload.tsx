import DataRoomSnippet from '../../../assets/snippets/data-room-snippet'
import  IconLock  from '@/assets/icons/icon-lock';
import  DocumentIcon from '@/assets/icons/document-icon';
import  ProgressIcon  from '@/assets/icons/progress-icon';
import { CirclesRadiant } from '@/assets/icons';

const Upload = () => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='-mb-1 h-28 w-0.5 bg-gradient-to-t from-blue-600 to-white'></div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-col justify-center items-center h-10 w-10 rounded-full bg-blue-500'>
                        <p className='font-bold text-center text-white'>1</p>
                    </div>
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">Upload</h2>
            </div>
            </div>
     
            <p className='text-center text-3xl font-semibold mb-2'>Store and manage documents in a secure data room.</p>
            <p className='m-auto  text-center max-w-4xl mb-12 text-d '>Use our data room to project manage your due diligence. Upload the documents from the seller’s Virtual Data Room (VDR), securely store them, classify and assign them to the relevant specialists for review.</p>
      
            <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
                <div className='flex-1 flex justify-center'>
                    <DataRoomSnippet/>
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
                <div className="flex flex-1 flex-col">
              <div className=' py-8 space-y-14 with-full'>
                <div className='flex  flex-col lg:max-w-xl'>  
                    <div>
                      <IconLock/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                        Securely store and share documents
                    </p>
                    <p className='mt-6 text-d'>
                    Upload and securely store the documents for review in the data room. Alternatively, if your client needs their own data room, you can allow them to securely share documents through Due.
                    </p>   
                </div> 
                <div className='flex  flex-col lg:max-w-xl'>  
                    <div>
                      <DocumentIcon/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                        Add your team and assign documents to specialists
                    </p>
                    <p className='mt-6 text-d '>
                    Add your team and outside advisors to the project, and assign documents to the specialist for review. Documents assigned to a reviewer will be added to their to-do list.
                    </p>   
                </div> 
                <div className='flex  flex-col lg:max-w-xl'>  
                    <div>
                      <ProgressIcon/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                    Track progress and adjust scope to deliver on time
                    </p>
                    <p className='mt-6 text-d'>
                    Track the progress of the document review and communicate this to the client in real-time. Know ahead of time if the document review is going to be completed on time based on the current progress and if not, adjust the scope of review to speed up the review.
                    </p>   
                </div>                
                </div>               
            </div>
            </div>  
    
            </>
        );
};

export default Upload;