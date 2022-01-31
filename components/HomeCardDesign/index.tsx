import type { FC } from "react"
import { Card } from "@components/Cards/homecard"
import { CONFIG } from "../../lib/stuffs"
export const HomeCardDesing:FC = () => {
    return (
        <div className="mt-20 flex justify-center">
            <div className="w-10/12 md:w-6/12">
                <p className="text-center text-[#6C63FF] text-3xl md:text-gray-200 font-semibold">Page Directory</p>
                    <div className="grid  md:grid-cols-2 text-start gap-2 mt-4 ml-1">
                    {CONFIG.Cards.map((v,index) => ( 
                    <div className="">
                        <Card title={v.title} description={v.description} link={v.link} key={index}/> 
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