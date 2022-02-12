import type { FC } from "react"
import { AiTwotoneStar } from 'react-icons/ai';
import Link from "next/link"
interface IProps {
    language:string
    stars: number
    reponame: string
    repodesc: string
    link: string
}
export const RepoCard:FC<IProps> = function ({language,stars,reponame,repodesc,link}){
    return (//1A1C1F
        <div className="w-12/12 md:w-10/12 h-2/3 mx-auto mb-20 rounded hover:bg-[#242629] hover:shadow-xl transition-all">
                <Link href={link}>
                    <a>
                   <h1 className="text-center text-white">{reponame}</h1>
                   <p className="text-gray-300 mx-2">{repodesc}</p>
                   <p className="flex text-yellow-300 mx-2">{stars} <div className="mt-1 ml-0.5"><AiTwotoneStar /></div></p>
                   <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                   <p className="text-gray-200 mt-2">{language}</p>
               </a>
               </Link>
               </div>
         
    )
}