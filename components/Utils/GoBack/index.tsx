import { IoIosArrowRoundBack } from "react-icons/io"
import { useEffect, useState } from "react"
import Link from "next/link"
export const GoBack = ({url }:any) => {
    let [windower, setWindow ] = useState<any>()
    useEffect(() => { 
        if(typeof window != "undefined" ) {
            setWindow(window)
        }
    })
    return (
        <div className="w-24 bg-opacity-100 rounded">
            <Link href={url || ""}>
             <a className="flex w-21" href={windower && windower.location.hostname == "localhost" ? "http://localhost:3000" + url  : "https://noirs.me" + url}>
            <IoIosArrowRoundBack className="w-8 h-8 text-white hover:-ml-1"/ >
            <p className="text-white mt-1.5 text-sm ">Go Back</p>
        </a>
        </Link>
        </div>
       
    )
}