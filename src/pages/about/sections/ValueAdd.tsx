import AnimatedValueAdd from '@/components/animation/items/AnimatedValueAdd'

const ValueAdd = () => {
  return (
    <div className="max-container">
      <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
        <div className=" max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
          What <span className="text-blue-600">Value</span> Do We
          <span className="text-blue-600"> Add?</span>
        </div>
        <p className="leading-normal mb-12 text-center lg:w-3/4 mx-auto text-xl">
          We focus on automating administrative tasks in the due diligence
          process that can't be charged to your client, reducing your costs and
          increasing your profit margins.
        </p>
      </div>
      <AnimatedValueAdd />
    </div>
  )
}

export default ValueAdd
