import AnimatedOurValues from '@/components/animation/items/AnimatedOurValues'

const OurValues = () => {
  return (
    <div className="max-container">
      <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
        <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
          Our <span className="text-blue-600">Values</span>
        </h1>
        <p className="leading-normal mb-12 text-center lg:w-3/4 mx-auto text-xl">
          Our purpose is to empower professionals to spend more time on what
          matters.
        </p>
      </div>
      <AnimatedOurValues />
    </div>
  )
}

export default OurValues
