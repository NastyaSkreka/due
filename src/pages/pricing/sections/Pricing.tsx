const Pricing = () => {
    return (
        <main className='relative '>               
        <section className="w-full flex xl:flex-row flex-col justify-center p-28 max-container" >
  <div className="relative  flex items-center flex-col justify-center gap-20 w-full max-xl:padding-x pt-28">
    <h1 className="text-8xl mb-5 font-semibold">
      Membership <span className="text-blue-600">Pricing</span>
    </h1>
    <div className="mt-10 flex justify-center gap-10 w-full mx-auto flex-wrap mb-10" >
        <div className='p-5 border-primary-3 rounded-xl shadow-md'>
        <div className='flex items-start  gap-3'>
            <div className='p-1 bg-primary-3 rounded-full flex items-center justify-center'>
            <svg className="fill-current text-white" height="10" viewBox="0 0 24 24" width="10"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"></path></svg>
            </div>
      <p className="text-center w-60 text-xl">
        Monthly subscription based pricing (per user).
      </p>
      </div>
      </div>
      <div className='p-5 border-primary-3 rounded-xl shadow-md'>
      <p className="text-center w-60 text-xl">
        Monthly subscription based pricing (per user).
      </p>
      </div>
      <div className='p-5 border-primary-3 rounded-xl shadow-md'>
      <p className="text-center w-60 text-xl">
        Monthly subscription based pricing (per user).
      </p>
      </div>
    </div>
    <div className='flex justify-center relative w-screen lg:w-full'>
            <div className='flex'>
            <div className="flex flex-col align-center gap-3 max-w-sm  py-10">
                <div className="flex flex-col w-full h-20">
                    <div className="flex flex-col gap-4">
                     
                    </div>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                    <p className="px-6 pt-4 text-lg">Users</p></div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Data storage and secure document sharing</p>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Report templates</p>
                </div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Report sharing</p>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Automated question-answering</p>
                </div>    
            </div>
            <div className="flex flex-col align-center gap-3 max-w-sm  py-10">
                <div className="flex flex-col w-full h-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-center">
                            <p className="text-xl mb-2 text-primary">Free</p>
                            <p className="text-3xl mb-2 font-semibold">Freemium</p>
                        </span>
                    </div>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                    <p className="px-6 pt-4 text-lg">Up to 10 free users (including view-only users)</p></div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Limited (500MB per organization)</p>
                </div>
                <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Data storage and secure document sharing</p>
                </div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Access to standard report templates</p>
                </div>
                <div className="mt-4 h-[70px]  bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Online sharing of report with client</p>
                </div>
                
            </div>
            <div className="flex flex-col align-center gap-3 max-w-sm border py-10 rounded-lg border-4 border-blue-500 drop-shadow-lg ">
                <div className="flex flex-col w-full h-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-center">
                            <p className="text-xl mb-2 text-primary">Teams</p>
                            <p className="text-3xl mb-2 font-semibold">$149/mth</p>
                        </span>
                    </div>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                    <p className="px-6 pt-4 text-lg">Pay per user. Unlimited view-only users included</p></div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Unlimited</p>
                </div>
                <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Unlimited customization of report templates</p>
                </div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Downloadable PDF report. Downloadable Word report (coming soon)</p>
                </div>
                <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Coming Soon</p>
                </div>
                
            </div>
            <div className="flex flex-col align-center gap-3 max-w-sm  py-10">
                <div className="flex flex-col w-full h-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-center">
                            <p className="text-xl mb-2 text-primary">Enterprise</p>
                            <p className="text-3xl mb-2 font-semibold">$129/mth</p>
                            <p className="text-sm opacity-8">(for organizations with 50 or more users )</p>
                        </span>
                    </div>
                </div>
                <div className="mt-4 h-[70px] text-center bg-slate-100 w-full items-center justify-center ">
                    <p className="px-6 pt-4 text-lg">Pay per user. Unlimited view-only users included</p></div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Unlimited</p>
                </div>
                <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Unlimited customization of report templates</p>
                </div>
                <div className="mt-4 h-[70px] text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Downloadable PDF report. Downloadable Word report (coming soon)</p>
                </div>
                <div className="mt-4 h-[70px] bg-slate-100 text-center w-full flex items-center justify-center">
                    <p className="px-6 pt-4 text-lg">Coming Soon</p>
                </div>               
            </div>  
        </div>
    </div>
  </div>
</section>
    </main>
    );
};

export default Pricing;