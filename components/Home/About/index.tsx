import type { FC } from "react"
import { useState, useEffect } from "react"
import { useLanyard } from "react-use-lanyard";
import { DEFAULTS } from "../../../lib/stuffs";
import ReactTooltip from 'react-tooltip';
import Tilt from 'react-tilt';
import Link from "next/link"
export const About:FC = () => {
  let userid = DEFAULTS.DiscordUserID
  let scolor;
  let activities;
  let details;
  let statuso;
    const { loading, status } = useLanyard({
      userId: userid,
      socket: true,
    }); 
    if(!loading && status?.discord_status) {
      switch(status.discord_status) {
        case "dnd":
          scolor = "#ff3640"
          statuso = "Do not Disturb"
          break;
        case "online":
          scolor = "#2afa62"
          statuso = "Online"
          break;
        case "offline":
          scolor = "#747F8D"
          statuso = "Offline"
          break;
        case "idle":
          scolor ="#eddf47"
          statuso = "Idle"
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
    <div className="lg:flex  justify-evenly">
      <div className="lg:w-3/12 lg:min-w-max lg:ml-10 flex flex-col">
      <Tilt className="mt-16 w-60 mx-auto">
      <img src={"assets/pp.png"} className="rounded-xl cursor-pointer" />
      </Tilt>
      <div className="mx-auto mt-5 flex">
      <div data-tip data-for="statuso" className="w-2.5	h-2.5 rounded-full text-gray-300 mt-2" style={{backgroundColor: scolor || "#747F8D"}}></div>
      <p data-tip data-for="zort"  className="ml-2 text-base text-gray-300">{activities || "Nothing is playing right now"}</p>
      <ReactTooltip place="left" backgroundColor="black" effect="solid" id="statuso">{statuso}</ReactTooltip>
      {activities && <ReactTooltip place="bottom" backgroundColor="black" effect="solid" id="zort">{details}</ReactTooltip>}
      </div>
      </div>
      <div className="lg:w-9/12 lg:my-auto">
      <p className="text-gray-200 text-center font-bold text-5xl mt-10 lg:mt-32">Taha Kaçmaz</p>
      <p className="text-center text-indigo-600 font-semibold mt-1">Backend Developer</p>
      <p className="text-gray-400 text-center mx-5 md:mx-32 lg:mt-5">I'm a self-educated backend developer. I'm interested in developing frontend projects too. I use mostly <Link  href="https://nextjs.org/"><a target="_blank"><span className="link link-underline link-underline-black text-gray-200">NextJS</span></a></Link> and <Link href="https://tailwindcss.com/"><a target="_blank"><span className="link link-underline link-underline-black text-gray-100">TailwindCSS</span></a></Link> in frontend development and <Link href="https://www.typescriptlang.org/"><a target="_blank"><span className="link link-underline link-underline-black text-gray-100">Typescript</span></a></Link> in backend development</p>
    </div>
    </div>
  )
}


