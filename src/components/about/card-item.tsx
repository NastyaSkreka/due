import { type UserJourneyType } from "@/pages/about/sections/Journey";


export default function CardItem({ imageUrl, description, step, leftColor, rightColor }:UserJourneyType & { leftColor?: string; rightColor?: string }) {
    return (
        <div className="flex w-full lg:overflow-hidden flex-col lg:flex-row">
            <div className={`flex items-center justify-center lg:flex-1 p-20 max-lg:py-5  ${leftColor}`}>
                <p className="font-semibold md:text-lg py-4 max-lg:p-0 lg:text-2xl xl:text-3xl px-2 md:px-0 pt-6 md:w-7/12 text-center dark:text-black/80">{description}</p>
                <p className={`font-semibold md:text-lg absolute px-1 py-1  md:px-2 lg:left-0 -top-3 lg:top-3 rounded ${rightColor}`}>{step}</p>
            </div>
            <div className={`w-full p-3 flex-1 lg:rounded-tr-xl ${rightColor} relative`}>
                <div className={`flex flex-col h-9/12 relative z-10  mx-auto w-9/12 ${leftColor} items-center justify-center p-3 border-none dark:bg-white !rounded-full`}>
                    <img src={imageUrl} alt={imageUrl} className="w-full rounded-full object-contain" />
                </div>
            </div>
        </div>
    );
}


/*w-3/4 h-3/4  bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2*/