import type { FC } from "react"
import { Cards } from "@components/Cards/index"
import { CONFIG } from "../../lib/stuffs"
export const Home:FC = () => {
    return (
        <div className="w-screen h-full">
            <h1 className="text-gray-400 text-center my-20">zort</h1>
            <h1 className="text-gray-300 text-center font-semibold text-4xl">About Me</h1>
            <div className="flex flex-col-2 h-screen justify-between">
                {CONFIG.Cards.map((v,index) => ( 
                    <div className="">
                        <Cards title={v.title} description={v.description} link={v.link} key={index}/> 
                    </div>
                )
                )}        
                </div>
            </div>
    )
}