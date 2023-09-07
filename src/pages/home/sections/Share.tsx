import { ReportsSnippet } from '@/assets/snippets';
import  CheckIcon  from '@/assets/icons/check-icon';
import DocumentIcon from "@/assets/icons/document-icon";
import CustomReportIcon from "@/assets/icons/custom-report-icon";

const Share = () => {
    return (
        <section className="max-container">
        <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
            Share
        </h2>
        <p className='text-center text-3xl font-semibold mb-2'>Share your findings with your client in real time.</p>
        <p className='m-auto text-lg text-center max-w-3xl mb-12'>
        Deals often move quickly and clients want to know what the red flags are as soon as they are discovered, to avoid any delays in completing the transaction. Differentiate yourself from your competitors by securely sharing your findings in real-time with your clients.</p>

    
        <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
            <div className='flex-1 flex justify-center'>
                <ReportsSnippet/>
            </div> 

            <div className="flex flex-1 flex-col">
          <div className=' py-8 space-y-14 with-full'>
            <div className='flex  flex-col lg:max-w-xl'>  
                <div>
                  <CheckIcon/>
                </div>
                <p className='mt-4  text-xl font-semibold'>
                Consistent reporting
                </p>
                <p className='mt-6 '>
                All your document reviewers can consistently report their findings as they can select from pre-written answers. The system will also suggest pre-written ‘red flags’ based on their responses to questions. As red flags are able to be written consistently, your client can easily search for them and act on your recommendations based on the severity of the issue identified.
                </p>   
            </div> 
            <div className='flex  flex-col lg:max-w-xl'>  
                <div>
                  <DocumentIcon/>
                </div>
                <p className='mt-4  text-xl font-semibold'>
                 Generate insights
                </p>
                <p className='mt-6 '>
                Generate a list of red flags and recommendations that are drafted consistently across all your reviewers. Clients can provide their instructions within the platform on each red flag to avoid back-and-forth emails.</p>   
            </div> 
            <div className='flex  flex-col lg:max-w-xl'>  
                <div>
                  <CustomReportIcon/>
                </div>
                <p className='mt-4  text-xl font-semibold'>
                Customise your reports
                </p>
                <p className='mt-6 '>
                All report templates are fully customisable using our proprietary no code-tools. You can customise them based on your firm’s branding or style guide, drafting preferences and client requirements.
                </p>   
            </div>            
            </div>               
        </div>
        </div>  
    </section>
    );
};

export default Share;