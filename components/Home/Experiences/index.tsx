import type { FC } from "react";
import Link from "next/link";
import  Tilt  from "react-tilt";
import { SiTypescript,SiGoland,SiNextdotjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiReactjsFill} from "react-icons/ri";
import { DEFAULTS } from "../../../lib/stuffs"
export const Experiences: FC = () => {
  return (
    <div className="lg:flex flex-row justify-between" id="aboutme">
      <div className="lg:w-6/12 lg:mt-60 mt-40">
        <h1 className="text-white font-bold text-3xl lg:w-1/12 lg:min-w-max lg:ml-24 text-center">
          About Me
        </h1>
        <p className="text-gray-200 text-base lg:ml-24 lg:text-left mt-2 m-4 text-center">
          Hello I'm a student at Galatasaray High School. I love playing video
          games and developing useful open-source projects in my free time. I've
          working on backend stuffs since 2018.
        </p>
        <p className="text-gray-200 text-base lg:ml-24 lg:text-left mt-4 m-4 text-center">
          As a backend developer, I learnt and keep using these technologies in
          my projects. You can check out my projects on my{" "}
          <span className="link link-underline link-underline-black text-gray-300">
            <Link href={DEFAULTS.links.github}>
              <a>Github</a>
            </Link>
          </span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-row-2 lg:mt-60 mt-20 mx-aut lg:w-5/12 xl:w-4/12 gap-y-2 lg:mr-10 gap-x-2 " >

    
      <Tilt className="xl:w-56 lg:w-48 lg:h-24 bg-[#6366f1] rounded-xl w-9/12 h-24 mx-auto cursor-pointer">
            <SiNextdotjs className="w-8 h-12 mt-3 mx-auto text-black" />
            <p className="text-white text-sm text-center font-extrabold">
              For 1 years
            </p>
          </Tilt>
          <Tilt className="xl:w-56 lg:w-48 lg:h-24 bg-[#6366f1] rounded-xl w-9/12 h-24 mx-auto cursor-pointer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" className="w-8 h-12 mx-auto mt-3" />
            <p className="text-white text-sm text-center font-extrabold">
              For 1 years
            </p>
          </Tilt>
          <Tilt className="xl:w-56 lg:w-48 bg-indigo-500 rounded-xl w-9/12 h-24 mx-auto cursor-pointer">
       
            <img src="https://img.icons8.com/color/344/nodejs.png" className="w-12 mt-3 mx-auto" />
            <p className="text-white text-sm text-center font-extrabold">
              For 4 years
            </p>
          </Tilt>
          <Tilt className="xl:w-56 lg:w-48 bg-indigo-500 rounded-xl w-9/12 h-24 mx-auto cursor-pointer">
            <SiTypescript className="w-8 h-12 mt-3 mx-auto text-black" />
            <p className="text-white text-sm text-center font-extrabold">
              For 2 years
            </p>
          </Tilt>
      </div>
    </div>

  );
};
