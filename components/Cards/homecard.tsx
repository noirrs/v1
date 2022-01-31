import type { FC } from "react"
import Link from "next/link"
interface IProps {
    title: string
    description: string
    link: string
}
export const Card:FC<IProps> = function({title,description,link}){
    return (
        <div className="bg-[#191a1d] text-white rounded p-4 transition hover:bg-[#242629]">
        <Link href={link} ><a className="w-3/12">
        <h1 className="text-gray-200 font-medium text-start">{title}</h1>
        <h3 className="text-gray-400">{description}</h3>
        </a></Link>
        </div>


    )
}