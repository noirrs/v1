import type { FC } from "react"
import {RepoCard} from "@components/Cards/repocard"
const Repos:FC = function (){
    const arrayo = [
        {name: "Reponame#1",language: "Typescript", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#2",language: "Javascript", stars: 40,description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#3",language: "Go", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},
        {name: "Reponame#4",language: "Dart", stars: 40, description: "Açıklama a a loremipsum  loremipsum loremipsum loremipsum"},

    ]
   /*
    return(
        <div className="mt-20 flex justify-center">
        <div className="w-8/12 md:w-8/12">
            <p className="text-center text-[#6C63FF] text-3xl md:text-gray-200 font-semibold">My Github Repositories</p>
                <div className="grid md:grid-cols-2 text-start mt-4">
                {arrayo.map((repo,int) =>(
                 <RepoCard key={int} language={repo.language} stars={repo.stars} reponame={repo.name} repodesc={repo.description}/>
            ))
        }     
            </div>
        </div>
    </div>
    )*/
    return (
        <h1 className="text-6xl text-center text-white ">DEMO</h1>
    )
   
}

export default Repos