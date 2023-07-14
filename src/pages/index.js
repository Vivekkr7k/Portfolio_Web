import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/Componets/Layout";
import Image from "next/image";
import selfie from '../../public/images/profile/selfie_bg4.png'
import Anitmatedtxt from "@/Componets/Anitmatedtxt";
import Link from "next/link";
import { LinkArrow } from "@/Componets/icons";
import Hireme from "@/Componets/Hireme";
import LightBuld from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitonEffect from "../Componets/TransitonEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
     
        <title>Portfolio Webstie</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitonEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full lg:w-full flex items-center justify-center ">
            <Image src={selfie} alt="Vivek kumar" className="w-[60%] rounded-xl  h-auto lg:hidden md:inline-block md-w-full md:h-auto " priority   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"></Image>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
            
            <Anitmatedtxt text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:mt-7 xs:mt-7 "/>
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/resume.pdf" target={'_blank'} type="application/pdf" className="flex items-center p-2.5 bg-dark dark:bg-light dark:text-dark text-white px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base " download={true}>Resume <LinkArrow className='w-6 ml-1'></LinkArrow></Link>
              <Link href="mailto:vivekkumar787067@gmail.com" target={'_blank'} className="ml-4 text-lg font-medium capitalize text-dark underline hover:no-underline dark:text-light md:text-base">Contact</Link>
            </div>
          </div>
          </div>
        </Layout>
        <Hireme className="dark:bg-light"/>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={LightBuld} alt="Vivek kumar" className="w-full h-auto"></Image> 
        </div>
      </main>
    </>
  );
}