import { type UserJourneyType } from "@/pages/about/sections/Journey";


export default function CardItem({ imageUrl, description, step, leftColor, rightColor }:UserJourneyType & { leftColor?: string; rightColor?: string }) {
    return (
        <div className="flex relative max-lg:flex-col border rounded-xl h-screen max-lg:max-w-3xl max-lg:mx-auto">
            <div className={`flex items-center justify-center lg:flex-1 p-20 max-lg:py-5  ${leftColor}`}>
                <p className="font-semibold md:text-lg py-4 max-lg:p-0 lg:text-2xl xl:text-3xl px-2 md:px-0 pt-6 md:w-7/12 text-center dark:text-black/80">{description}</p>
                <p className={`font-semibold md:text-lg absolute px-1 py-1  md:px-2 lg:left-0 -top-3 lg:top-3 rounded ${rightColor}`}>{step}</p>
            </div>
            <div className={`w-full flex-1 ${rightColor} relative`}>
                <div className="w-3/4 h-3/4  bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={imageUrl} alt="" className="w-full h-full rounded-full" />
                </div>
            </div>
        </div>
    );
}

