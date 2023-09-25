import DataRoomSnippet from '../../../assets/snippets/data-room-snippet'
import AnimatedUploadItems from '@/components/animation/items/AnimatedUploadItems'
import Decor from './components/Decor'
import Title from './components/Title'

const Upload = () => {
  return (
    <>
      <Title
        number="1"
        title="Upload"
        content="Store and manage documents in a secure data room."
        descr="Use our data room to project manage your due diligence. Upload the documents from the seller’s Virtual Data Room (VDR), securely store them, classify and assign them to the relevant specialists for review."
      />

      <div className="flex justify-between max-lg:items-center items-start max-lg:flex-col max-sm:gap-5 gap-20 w-full max-container">
        <div className=" flex-1 flex justify-center">
          <DataRoomSnippet />
        </div>
        <Decor />
        <AnimatedUploadItems />
      </div>
    </>
  )
}

export default Upload
