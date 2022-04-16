import type { FC } from "react";
import Head from "next/head";
interface IProps {
  page: string
}
export const Heads:FC<IProps> = function({page}){
    return (
    <Head>
        <title>Noir - {page}</title>
        <meta name="description" content="I'm backend developer who has also experiences in frontend projects using with NextJS and Tailwindcss" />
        <link rel="icon" href="/assets/pp.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="title" content="Noir"/>
        <meta name="description" content="I'm backend developer who has also experiences in frontend projects using with NextJS and Tailwindcss" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://noirs.me"/>
        <meta property="og:title" content="Noir"/>
        <meta property="og:description" content="I'm backend developer who has also experiences in frontend projects using with NextJS and Tailwindcss"/>
        <meta property="og:image" content="https://noirs.me/assets/pp.png"/>
        <meta name="author" content="Noir" />
        <meta name="keywords" content="Noir, Noirrs, Noirr, noirs.me, Noirs.me, Noirscode, noir, blackly, backend, developer, self-taugh, self-educated"/>
        <meta property="theme-color" content="#6366f1"/>
  

        <meta property="twitter:url" content="https://noirs.me"/>
        <meta property="twitter:title" content="noirs.me"/>
        <meta property="twitter:description" content="I'm backend developer who has also experiences in frontend projects using with NextJS and Tailwindcss"/>
        <meta property="twitter:image" content="https://noirs.me/assets/pp.png"/>
        <meta property="twitter:domain" content="noirs.me"/>


        <meta name="robots" content="index" />
        <meta name="googlebot" content="index" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </Head>
    );
};