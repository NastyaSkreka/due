import ConnectForm from './components/ConnectForm'

const Connect = () => {
  return (
    <section className="pt-60 pb-20 max-container">
      <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
        <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
          Let's <span className="text-blue-600">Connect</span>
        </h1>
        <p className="leading-normal mb-12 text-center  mx-auto text-xl">
          Have a big idea? We would love to hear from you.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center lg:pt-12 pb-10">
        <div className="flex flex-row w-full md:w-8/12 xl:w-1/2 2xl:w-5/12 mx-auto">
          <div className="flex flex-row justify-center items-center rounded-2xl mt-10 lg:mt-0 shadow-lg border border-transparent p-6 w-full">
            <ConnectForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
