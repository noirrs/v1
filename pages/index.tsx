import type { NextPage } from 'next'
import { About } from "@components/Home/About"
import { Experiences } from "@components/Home/Experiences"
import { Heads } from "@components/Head"
import { Projects } from "@components/Home/Projects"
import { Repositories } from "@components/Home/Repositories"
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css';
const Main: NextPage = () => {
  const notify = () => toast("Please click the avatar for the page rootes");
  useEffect(() => {
    if(typeof window != "undefined"){
      if(!window.localStorage.getItem("Routeinfo")) {
        console.log(window.localStorage.getItem("Routeinfo"));
        toast("Please click the avatar for the page rootes");
      }
      window.localStorage.setItem("Routeinfo", "true")

    } 
  })
  return (
    <div className="w-full h-screen">
 
    <div className="hidden lg:inline-block">
    <ToastContainer />

    </div>
      <Heads page='Home'/>
      <About/>
      <Experiences/>
      <Projects/>
      <Repositories/>
      <br />
      
    </div>
  )
}

export default Main
