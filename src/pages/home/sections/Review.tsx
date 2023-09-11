import { DocumentReviewSnippet } from "@/assets/snippets";
import  ReportIcon  from "@/assets/icons/report-icon";
import CustomReportIcon from "@/assets/icons/custom-report-icon";
import AiIcon from "@/assets/icons/ai-icon";

const Review = () => {
    return (
        <>
            <div className='flex flex-col items-center'>
            <div className='-mb-1 h-28 w-0.5 bg-gradient-to-t from-blue-600 to-white'></div>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex flex-col justify-center items-center h-10 w-10 rounded-full bg-blue-500'>
                    <p className='font-bold text-center text-white'>2</p>
                </div>
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">Review</h2>
            </div>
            </div>
            <p className='text-center text-3xl font-semibold mb-2'>Review documents using our AI-based document review templates.</p>
            <p className='m-auto text-d text-center max-w-4xl mb-12'>All your specialists will record their findings using a standard document review template to ensure consistency. Avoid key findings being missed by less experienced reviewers. This will save time being written off for collating inconsistent reports and re-working them to make them consistent.</p>    
            <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
                <div className='flex-1 flex justify-center'>
                    <DocumentReviewSnippet/>
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
                      <ReportIcon/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                    Consistent reporting
                    </p>
                    <p className='mt-6 text-d '>
                    All your document reviewers can consistently report their findings as they can select from pre-written answers. The system will also suggest pre-written ‘red flags’ based on their responses to questions. As red flags are able to be written consistently, your client can easily search for them and act on your recommendations based on the severity of the issue identified.
                    </p>   
                </div> 
                <div className='flex  flex-col lg:max-w-xl'>  
                    <div>
                      <CustomReportIcon/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                        Customise your templates
                    </p>
                    <p className='mt-6 text-d'>
                    You can customise our standard templates using our no-code tools so you can tailor your review based on the scope of work agreed with your client such as exceptions only reporting or a full detailed report.
                    </p>   
                </div> 
                <div className='flex  flex-col lg:max-w-xl'>  
                    <div>
                      <AiIcon/>
                    </div>
                    <p className='mt-4  text-xl font-semibold'>
                        AI augmented document review
                    </p>
                    <p className='mt-6  text-d'>
                    Eliminate the monotonous parts of document review that consumes expensive chargeable hours (and not recoverable from clients) using our AI augmented review such as entity extraction.
                    </p>   
                </div> 
                
                </div>               
            </div>
            </div>  
        </>
        );
};

export default Review;