import DataRoomSnippet from '../../../assets/snippets/data-room-snippet'
import AnimatedUploadItems from '@/components/animation/items/AnimatedUploadItems'

const Upload = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="-mb-1 h-28 w-0.5 bg-gradient-to-t from-blue-600 to-white"></div>
        <div className="flex flex-col items-center  gap-4">
          <div className="flex flex-col justify-center items-center h-10 w-10 rounded-full bg-blue-500">
            <p className="font-bold text-center text-white">1</p>
          </div>
          <h2 className="max-md:text-2xl max-lg:text-3xl text-center text-4xl font-bold text-blue-600 mb-12">
            Upload
          </h2>
        </div>
      </div>
      <p className="max-md:text-xl max-lg:text-2xl text-center text-3xl font-semibold mb-2">
        Store and manage documents in a secure data room.
      </p>
      <p className="max-md:text-sm max-md:max-w-2xl max-lg:max-w-3xl  m-auto  text-center max-w-4xl max-sm:mb-2 mb-12 text-d">
        Use our data room to project manage your due diligence. Upload the
        documents from the seller’s Virtual Data Room (VDR), securely store
        them, classify and assign them to the relevant specialists for review.
      </p>

      <div className="flex justify-between max-lg:items-center items-start max-lg:flex-col max-sm:gap-5 gap-20 w-full max-container">
        <div className=" flex-1 flex justify-center">
          <DataRoomSnippet />
        </div>
        <div className="max-lg:hidden flex flex-col items-center px-8 lg:flex">
          <div className="flex flex-col items-center">
            <div className="h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white"></div>
            <svg
              className="fill-current"
              height="18"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white"></div>
            <svg
              className="fill-current"
              height="18"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-44 w-0.5 rounded-full bg-gradient-to-t bg-gradient-to-t from-blue-600 to-white"></div>
            <svg
              className="fill-current"
              height="18"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path>
            </svg>
          </div>
        </div>
        <AnimatedUploadItems />
      </div>
    </>
  )
}

export default Upload
