import type { FC } from "react"
import { Cards } from "@components/Cards/index"
import { CONFIG } from "../../lib/stuffs"
export const Home:FC = () => {
    return (
        <div className="mt-20 flex justify-center">
            <div className="w-10/12">
                <p className="text-center text-3xl text-gray-400 font-semibold">Abut mue</p>
                    <div className="grid grid-cols-2 text-center">
                    {CONFIG.Cards.map((v,index) => ( 
                    <div className="">
                        <Cards title={v.title} description={v.description} link={v.link} key={index}/> 
                    </div>
                )
                )}        
                </div>
            </div>
        </div>
    )
}

/*

            <div className="grid grid-cols-2 gap-4 ">
                {CONFIG.Cards.map((v,index) => ( 
                    <div className="w-1/2">
                        <Cards title={v.title} description={v.description} link={v.link} key={index}/> 
                    </div>
                )
                )}        
                </div>

*/