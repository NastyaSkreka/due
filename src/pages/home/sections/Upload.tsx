import DataRoomSnippet from '../../../assets/snippets/data-room-snippet'
import  IconLock  from '@/assets/icons/icon-lock';
import  DocumentIcon from '@/assets/icons/document-icon';
import  ProgressIcon  from '@/assets/icons/progress-icon';

const Upload = () => {
    return (
        <section className="max-container">
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
            Upload
            </h2>
            <p className='text-center text-3xl font-semibold mb-2'>Store and manage documents in a secure data room.</p>
            <p className='m-auto text-lg text-center max-w-3xl mb-12'>Use our data room to project manage your due diligence. Upload the documents from the seller’s Virtual Data Room (VDR), securely store them, classify and assign them to the relevant specialists for review.</p>

        
            <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
                <div className='flex-1 flex justify-center'>
                    <DataRoomSnippet/>
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
                    <p className='mt-6 '>
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
                    <p className='mt-6 '>
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
                    <p className='mt-6 '>
                    Track the progress of the document review and communicate this to the client in real-time. Know ahead of time if the document review is going to be completed on time based on the current progress and if not, adjust the scope of review to speed up the review.
                    </p>   
                </div> 
                
                </div>               
            </div>
            </div>  
        </section>
        );
};

export default Upload;