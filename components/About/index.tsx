import type { FC } from "react"
import { useState, useEffect } from "react"
import { useLanyard } from "react-use-lanyard";
import { CONFIG } from "../../lib/stuffs";
import ReactTooltip from 'react-tooltip';
import Link from "next/link"
export const About:FC = () => {
  let userid = CONFIG.DiscordUserID
  let scolor;
  let activities;
  let details;
    const { loading, status } = useLanyard({
      userId: userid,
      socket: true,
    }); 
    if(!loading && status?.discord_status) {
      switch(status.discord_status) {
        case "dnd":
          scolor = "#ff3640"
          break;
        case "online":
          scolor = "#2afa62"
          break;
        case "offline":
          scolor = "#747F8D"
          break;
        case "idle":
          scolor ="#eddf47"
        default:
          break;
      }
      if(!loading && status.activities.length > 0) {
        switch(status.activities[0].name) {
          case "Visual Studio Code":
            details = status.activities[0].state && status.activities[0].state.substring(0,38)
            activities = (<p className="text-gray-400">Coding on <span className="text-gray-200">{status.activities[0].details && status.activities[0].details?.split("|")[0].replace("🖋️","").substring(0,38)}</span> in <span className="text-gray-200">Vs Code</span></p>)
            break;
          case "Spotify":
            activities = (<p data-tip data-for="zort" className="text-gray-400" >Listening <span className="text-gray-200">{status.activities[0].details && status.activities[0].details?.substring(0,38)}</span> on <span className="text-gray-200">Spotify</span></p>)
            details = status.activities[0].state && status.activities[0].state.substring(0,38)
            break;
        }
      } 
    }
  return (
    <div className="">
     <img src={  "assets/pp.png"} className="mt-16 w-44 rounded-xl mx-auto" />
      <p className="text-gray-200 text-center font-semibold text-3xl mt-5">Backend Developer</p>
      <p className="text-gray-400 text-center mx-5 md:mx-32">I'm a self-educated backend developer. I'm interested in developing frontend projects too. I most use <Link  href="https://nextjs.org/"><a target="_blank"><span className="hover:underline hover:text-[#6C63FF] underline-offset-2 decoration-slate-700">NextJS</span></a></Link> and <Link href="https://tailwindcss.com/"><a target="_blank"><span className="hover:underline hover:text-[#6C63FF] underline-offset-2 decoration-slate-700">TailwindCSS</span></a></Link> in frontend development and <Link href="https://www.typescriptlang.org/"><a target="_blank"><span className="hover:underline hover:text-[#6C63FF] underline-offset-2 decoration-slate-700">Typescript</span></a></Link> in backend development</p>
      <div className="mx-auto mt-5 flex flex-row justify-center">
      <div className="w-2.5	h-2.5 rounded-full text-gray-300 mt-2" style={{backgroundColor: scolor || "#747F8D"}}></div>
      <p data-tip data-for="zort"  className="ml-2 text-base text-gray-300">{activities || "Nothing is playing right now"}</p>
      {activities && <ReactTooltip place="bottom" type="dark" effect="solid" id="zort">{details}</ReactTooltip>}
      </div>
    </div>
  )
}


