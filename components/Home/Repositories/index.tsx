import type { FC } from "react";
import { VscTerminalBash } from "react-icons/vsc";
import Tilt from "react-tilt";
import Link from "next/link";
import { useEffect, useState } from "react"
import { AiOutlineStar } from "react-icons/ai"
const Colors = require("../../../public/assets/colors.json")
interface IProps {
  color: string;
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const Repositories: FC = () => {
    let repos: { name: any; description: any; url: any; language: any; stars: any, forked: any; }[]= []
    let [repositories,setRepos] = useState<any>([])
    useEffect(()=>{ 
    
        fetch("https://api.github.com/users/Noirrs/repos", {}).then((response) => response.json()).then(async(response) => {
            await response.map((repo:any) => {
                 let {name, description,html_url,language,stargazers_count,fork} = repo
                 repos.push({name, description,url:html_url,language,stars:stargazers_count,forked: fork})
            })
           repos && setRepos(repos)

         })

    })
    return (
    <div className="">
       <div className="lg:mt-60 mt-40">
        <p className="text-white font-bold text-3xl lg:w-1/12 lg:min-w-max lg:ml-24 text-center">
          Repositories
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:ml-14 mt-4 gap-y-4">
        {
       
       repositories && repositories.filter((a:any) => !a.forked).map((repo:any) => { 
          return (
            <Tilt
            className="w-96 rounded-lg h-28 mx-auto  over:scale-110 bg-[#1f2023]"
            options={{ max: 20 }}
          >
            <Link href={repo.url}>
              <a href={repo.url} target="_blank">
                <div className="">
                <div className="flex">
                  <div className="flex flex-col mx-auto ml-4 mt-4">
                    <p className=" text-white text-xl font-bold">{repo.name}</p>
                    <p className="text-gray-300 text-sm">
                     {repo.description}
                    </p>
                  </div>
                  <div className="flex mt-4 mr-4">
                  <p className="text-white">{repo.stars}</p>
                  <AiOutlineStar  className="w-6 h-6  text-yellow-400 ml-1"/>
                  </div>
                </div>
                { repo.language && (
                <div className="flex">
                    <div className="w-3 h-3 rounded-full mt-7 ml-2" style={{backgroundColor: Colors[repo.language].color}}></div>
                    <p className="text-white ml-1.5 mt-[22px]">{repo.language}</p>
                </div>
                  )}
                </div>
              </a>
            </Link>
          </Tilt>
          )
      })
}
        </div>
        </div>
     
    </div>
  );
};
