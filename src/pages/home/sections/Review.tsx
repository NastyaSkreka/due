import { DocumentReviewSnippet } from "@/assets/snippets";
import  ReportIcon  from "@/assets/icons/report-icon";
import CustomReportIcon from "@/assets/icons/custom-report-icon";
import AiIcon from "@/assets/icons/ai-icon";

const Review = () => {
    return (
        <section className="max-container">
            <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
                Review
            </h2>
            <p className='text-center text-3xl font-semibold mb-2'>Review documents using our AI-based document review templates.</p>
            <p className='m-auto text-lg text-center max-w-3xl mb-12'>All your specialists will record their findings using a standard document review template to ensure consistency. Avoid key findings being missed by less experienced reviewers. This will save time being written off for collating inconsistent reports and re-working them to make them consistent.</p>

        
            <div className="flex justify-between items-start max-lg:flex-col gap-20 w-full max-container">
                <div className='flex-1 flex justify-center'>
                    <DocumentReviewSnippet/>
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
                    <p className='mt-6 '>
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
                    <p className='mt-6 '>
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
                    <p className='mt-6 '>
                    Eliminate the monotonous parts of document review that consumes expensive chargeable hours (and not recoverable from clients) using our AI augmented review such as entity extraction.
                    </p>   
                </div> 
                
                </div>               
            </div>
            </div>  
        </section>
        );
};

export default Review;