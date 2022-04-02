import type { NextPage } from 'next'
import { About } from "@components/Home/About"
import { Experiences } from "@components/Home/Experiences"
import { Heads } from "@components/Head"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Heads page='Home'/>
      <About/>
      <Experiences/>
    </div>
  )
}

export default Main
