import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from "@components/Home/About"
import { Experiences } from "@components/Home/Experiences"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <About/>
      <Experiences/>
    </div>
  )
}

export default Main
