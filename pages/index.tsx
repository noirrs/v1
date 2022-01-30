import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Home } from "@components/Home/index"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Home/>
    </div>
  )
}

export default Main
