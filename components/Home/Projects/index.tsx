import type { FC } from "react";
import { VscTerminalBash } from "react-icons/vsc";
import Tilt from "react-tilt";
import Link from "next/link";
import { MdContactPage } from "react-icons/md";
import { HiTerminal } from "react-icons/hi";
import { GiBottleCap } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
interface IProps {
  color: string;
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const Projects: FC = () => {
  return (
    <div className="w-full" id="projects"> 
      <div className="lg:mt-60 mt-40">
        <p className="text-white font-bold text-3xl lg:w-1/12 lg:min-w-max lg:ml-24 text-center">
          Projects
        </p>
        <div className="grid md:grid-cols-2  xl:grid-cols-3 xl:ml-14 grid-cols-1 mt-4 gap-y-5 mr-4">
          <Tilt
            className="w-96 rounded-lg h-24 mx-auto  over:scale-110 bg-[#1f2023]"
            options={{ max: 20 }}
          >
            <Link href="https://github.com/Noirrs/webpage">
              <a href="https://github.com/Noirrs/webpage" target="_blank" rel="noreferrer">
                <div className="flex">
                  <MdContactPage className="w-20 h-20 my-auto mt-2 text-gray-300" />
                  <div className="flex flex-col mx-auto ml-12 mt-4">
                    <p className=" text-white text-2xl font-bold">Portfolio</p>
                    <p className="text-gray-300 text-sm">
                      A Personal Website You're Currently Viewing
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </Tilt>

          <Tilt
            className="w-96 rounded-lg h-24 mx-auto   bg-[#1f2023]"
            options={{ max: 20 }}
          >
            <Link href="https://www.npmjs.com/package/blackly">
              <a href="https://www.npmjs.com/package/blackly" target="_blank" rel="noreferrer">
                <div className="flex">
                  <HiTerminal className="w-16 h-16 my-auto mt-4 ml-2 text-indigo-500" />
                  <div className="flex flex-col mx-auto ml-12 mt-6">
                    <p className=" text-white text-2xl font-bold">Blackly</p>
                    <p className="text-gray-200 text-sm">An Useful CLI Tool</p>
                  </div>
                </div>
              </a>
            </Link>
          </Tilt>

          <Tilt
            className="w-96 rounded-lg h-24 mx-auto bg-[#1f2023] "
            options={{ max: 20 }}
          >
            <Link href="https://covercounter.tk">
              <a href="https://covercounter.tk" target="_blank" rel="noreferrer">
                <div className="flex">
                  <GiBottleCap className="w-16 h-16 my-auto mt-4 ml-2 text-blue-400" />
                  <div className="flex flex-col mx-auto ml-12 mt-5">
                    <p className=" text-white text-2xl font-bold">
                      Cover Counter
                    </p>
                    <p className="text-gray-200 text-sm">
                      A Simple Website for Follow Bottlecap Donates
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </Tilt>

          <Tilt
            className="w-96 rounded-lg h-24 mx-auto bg-[#1f2023]"
            options={{ max: 20 }}
          >
            <Link href="https://github.com/ReponseApp">
              <a href="https://github.com/ReponseApp" target="_blank" rel="noreferrer">
                <div className="flex">
                  <IoChatbubblesSharp className="w-12 h-12 my-auto mt-6 ml-2 text-green-400" />
                  <div className="flex flex-col mx-auto ml-12 mt-6">
                    <p className=" text-white text-2xl font-bold">
                      Reponse App
                    </p>
                    <p className="text-gray-200 text-sm">
                      An Old Chat Application
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </Tilt>
        </div>
      </div>
    </div>
  );
};
