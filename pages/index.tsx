import type { NextPage } from 'next'
import { About } from "@components/Home/About"
import { Experiences } from "@components/Home/Experiences"
import { Heads } from "@components/Head"
import { Projects } from "@components/Home/Projects"
import { Repositories } from "@components/Home/Repositories"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Heads page='Home'/>
      <About/>
      <Experiences/>
      <Projects/>
      <Repositories/>
      
    </div>
  )
}

export default Main
