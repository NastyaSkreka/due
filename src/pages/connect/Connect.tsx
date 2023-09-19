import ConnectForm from "./components/ConnectForm";

const Connect = () => {
    return (
        <section className="pt-60 pb-20 max-container">
            <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
                <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">Let's <span className="text-blue-600">Connect</span></h1>
                <p className="leading-normal mb-12 text-center  mx-auto text-xl">Have a big idea? We would love to hear from you.</p>
            </div> 
            <div className="flex flex-row justify-between items-center lg:pt-12 pb-10">     
            <div className="flex flex-row w-full md:w-8/12 xl:w-1/2 2xl:w-5/12 mx-auto">
            <div className="flex flex-row justify-center items-center rounded-2xl mt-10 lg:mt-0 shadow-lg border border-transparent p-6 w-full">
                <ConnectForm/>
            </div>    
            </div>
            </div>        
        </section>
    );
};

export default Connect;

/*
  <form className="w-full max-w-md">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-xl mb-3" >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className=" bg-gray-200 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-xl mb-3 ">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full bg-gray-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3"
                    />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-xl mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type your message here..."
                            className="w-full bg-gray-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3"
                            
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-4 bg-primary-3 w-full text-white rounded-lg hover:bg-primary-4 focus:outline-none focus:ring focus:border-primary-3"
                        >
                            Submit
                        </button>
                    </div>
            </form>

*/