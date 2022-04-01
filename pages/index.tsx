import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from "@components/Home/About"
import { Experiences } from "@components/Home/Experiences"
const Main: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Home - Noir</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Head>
        <meta property="og:title" content="Noir" key="title" />
      </Head>
      <About/>
      <Experiences/>
    </div>
  )
}

export default Main
