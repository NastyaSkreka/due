interface TitleProps {
  number: string
  title: string
  content: string
  descr: string
}

const Title: React.FC<TitleProps> = ({ number, title, content, descr }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="-mb-1 h-28 w-0.5 bg-gradient-to-t from-blue-600 to-white"></div>
        <div className="flex flex-col items-center  gap-4">
          <div className="flex flex-col justify-center items-center h-10 w-10 rounded-full bg-blue-500">
            <p className="font-bold text-center text-white">{number}</p>
          </div>
          <h2 className="max-md:text-2xl max-lg:text-3xl text-center text-4xl font-bold text-blue-600 mb-12">
            {title}
          </h2>
        </div>
      </div>
      <p className="max-md:text-xl max-lg:text-2xl text-center text-3xl font-semibold mb-2">
        {content}
      </p>
      <p className="max-md:text-sm max-md:max-w-2xl max-lg:max-w-3xl  m-auto  text-center max-w-4xl max-sm:mb-2 mb-12 text-d">
        {descr}
      </p>
    </>
  )
}

export default Title
