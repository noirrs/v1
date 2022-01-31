import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomeCardDesing } from "@components/HomeCardDesign"
import { About } from "@components/About"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <About/>
      <HomeCardDesing/>
    </div>
  )
}

export default Main
