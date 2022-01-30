import type { FC } from "react"
interface IProps {
    title: string
    description: string
    link: string
}
export const Cards:FC<IProps> = function({title,description,link}){
    return (
       
       <div className="rounded h-24 transition hover:bg-[#242629]">
            <a href={link} className=" w-3/12 h-28">
           <h1 className="text-white font-medium p-1 ml-2">{title}</h1>
           <h3 className="text-gray-400 p-1 ml-1">{description}</h3>
           </a>
        </div>


    )
}