import type { FC } from "react"
interface IProps {
    title: string
    description: string
    link: string
}
export const Cards:FC<IProps> = function({title,description,link}){
    return (
        <div className="text-white rounded p-4 transition hover:bg-[#242629]">
        <a href={link} className="w-3/12">
        <h1 className="text-white font-medium">{title}</h1>
        <h3 className="text-gray-400">{description}</h3>
        </a>
        </div>


    )
}