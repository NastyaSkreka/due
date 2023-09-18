const Table = () => {
    return (
        <div className='flex justify-center relative w-screen lg:w-full'>
        <div className='flex'>
        <div className="flex flex-col align-center gap-5 max-w-sm  py-10">
            <div className="flex flex-col w-full h-20">
                <div className="flex flex-col gap-4">
                </div>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                <p className="p-4 max-xl:text-sm text-lg">Users</p></div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Data storage and secure document sharing</p>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm  text-lg">Report templates</p>
            </div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm  text-lg">Report sharing</p>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm  text-lg">Automated question-answering</p>
            </div>    
        </div>
        <div className="flex flex-col align-center gap-5 max-w-sm  py-10">
            <div className="flex flex-col w-full h-20">
                <div className="flex flex-col gap-4">
                    <span className="text-center">
                        <p className="text-xl mb-2 text-primary">Free</p>
                        <p className="text-3xl mb-2 font-semibold">Freemium</p>
                    </span>
                </div>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                <p className="p-4 max-xl:text-sm text-lg">Up to 10 free users (including view-only users)</p></div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Limited (500MB per organization)</p>
            </div>
            <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Data storage and secure document sharing</p>
            </div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Access to standard report templates</p>
            </div>
            <div className="mt-4 h-[70px]  bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Online sharing of report with client</p>
            </div>
            
        </div>
        <div className="flex flex-col align-center gap-5 max-w-sm  py-10 rounded-lg border-4 border-blue-500 drop-shadow-lg ">
            <div className="flex flex-col w-full h-20">
                <div className="flex flex-col gap-4">
                    <span className="text-center">
                        <p className="text-xl mb-2 text-primary">Teams</p>
                        <p className="text-3xl mb-2 font-semibold">$149/mth</p>
                    </span>
                </div>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                <p className="p-4 max-xl:text-sm text-lg">Pay per user. Unlimited view-only users included</p></div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="px-6 pt-4 max-xl:text-sm text-lg">Unlimited</p>
            </div>
            <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Unlimited customization of report templates</p>
            </div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Downloadable PDF report. Downloadable Word report (coming soon)</p>
            </div>
            <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Coming Soon</p>
            </div>
            
        </div>
        <div className="flex flex-col align-center gap-5 max-w-sm  py-10">
            <div className="flex flex-col w-full h-20">
                <div className="flex flex-col gap-4">
                    <span className="text-center">
                        <p className="text-xl mb-2 text-primary">Enterprise</p>
                        <p className="text-3xl font-semibold">$129/mth</p>
                        <p className="text-sm  opacity-8">(for organizations with 50 or more users )</p>
                    </span>
                </div>
            </div>
            <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                <p className="p-4 max-xl:text-sm text-lg">Pay per user. Unlimited view-only users included</p></div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Unlimited</p>
            </div>
            <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Unlimited customization of report templates</p>
            </div>
            <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Downloadable PDF report. Downloadable Word report (coming soon)</p>
            </div>
            <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                <p className="p-4 max-xl:text-sm text-lg">Coming Soon</p>
            </div>               
        </div>  
    </div>
</div>
    );
};

export default Table;