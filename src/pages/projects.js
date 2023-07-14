import React from 'react'
import Head from "next/head";
import Layout from '@/Componets/Layout';
import Anitmatedtxt from '@/Componets/Anitmatedtxt';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from '@/Componets/icons';
import VotingSystemImg from '../../public/images/projects/Voting-system.png'
import NetflixImg from '../../public/images/projects/netflix_clone.png'
import TravelImg from '../../public/images/projects/Travel_page.png'
import CryptoTracker from '../../public/images/projects/CryptoTracker.png'
import Carekloud from '../../public/images/projects/Carekloud_CRM.png'
import CarekloudWeb from '../../public/images/projects/Carekloud_web.png'
import CryptoTokenWeb from '../../public/images/projects/crypto_website.png' 
import PortfilioImg from '../../public/images/projects/Protfolio.png'
import FilmOcean from '../../public/images/projects/filmOcean.png'
import { motion } from "framer-motion";
import TransitonEffect from '@/Componets/TransitonEffect';



const FramerImage = motion(Image);



const FeaturedProject =({type , title , summary , img , link , github})=>{
    return(
      <article className='w-full flex  items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl ' >
         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'/>
        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  '>
             <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}}  priority   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
        </Link>
       
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
          <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
          <Link href={link} 
                target='_blank' 
                className='hover:underline underline-offset-2' >
          <h2 className='my-2 w-full  text-left text-4xl font-bold dark:text-light sm:text-sm  '>{title}</h2>
          </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
         <div className='mt-2 flex items-center '>
            <Link 
              href={github} 
              target='_blank' 
              className='w-10' >
                <GithubIcon/>
              </Link>
            <Link 
              href={link} 
              target='_blank' 
              className='ml-4 rounded-lg bg-dark text-light px-6 p-2 text-lg font-semibold dark:bg-light dark:text-dark hover:dark:bg-black hover:dark:text-light sm:px-4 sm:text-base ' >Visit Project</Link>
          </div>
          </div>
      

      </article>
    )
}


const Project =({title , type , img , link , github})=>{
   return(
        <article className='w-full flex flex-col items-center justify-center rounded-xl border border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
             <FramerImage src={img} alt={title} className='w-full h-auto ' whileHover={{scale:1.05}} transition={{duration:0.2}}/>
        </Link>
       
        <div className='w-full flex flex-col items-start justify-between pl-6 mt-4'>
          <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
          <h2 className='my-2 w-full  text-left text-4xl font-bold '>{title}</h2>
          </Link>
         <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank' className=' rounded-lg bg-dark text-light px-6 p-2 text-lg font-semibold underline ' >Visit</Link>
            <Link href={github} target='_blank' className='w-8 md:w-6' ><GithubIcon/></Link>
          </div>
          </div>
        </article>
   )
}

 

const projects = () => {
  return (
     <>
       <Head>
        <title>Vivek kumar | Projects Page</title>
        <meta name="description" content="any description" />
       </Head>
       <TransitonEffect/>
       <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 sm:p-6 xs:p-4'>
            <Anitmatedtxt text="Imagination Trumps Knowledge" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl    " />


            <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                  <div className='col-span-12'>
                       <FeaturedProject title= "Voting system" img={VotingSystemImg} summary="Block_Votes is the voting system based on blockchain . React js is used with tailwind css and matierial ui for the frontend . Nodejs is used for backend and the votes are secured by the blockchain technology." link="https://neon-moxie-1221fb.netlify.app" type="Featured Project" github="/"/>
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                    <Project  title= "Netflix Clone" img={NetflixImg}  link="https://quiet-tarsier-a7c36b.netlify.app" type=" Project" github="https://github.com/Vivekkr7k/react-netflix_clone" />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project  title= "FilmOcean" img={FilmOcean}  link="https://deft-klepon-240754.netlify.app" type=" Project" github="https://github.com/Vivekkr7k/FimlOcean" />
                  </div>
                  <div className='col-span-12'>
                  <FeaturedProject title= "Portfolio Website" img={PortfilioImg} summary="A feature rich Portfolio Website , build using Nextjs with tailwind css and Framer Motion  . This Portfolio  contains 4 pages with beauiful transition effects with the help of Framer motion. " link="/" type="Featured Project" github="https://github.com/Vivekkr7k/Portfolio"/>
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project  title= "Carekloud website " img={CarekloudWeb}  link="https://glittery-daifuku-059059.netlify.app" type=" Project" github="https://github.com/Vivekkr7k/Carekloud_webstie" />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project  title= "Crypto Website " img={CryptoTokenWeb}  link="https://main--mellifluous-wisp-583acd.netlify.app/" type=" Project" github="https://github.com/Vivekkr7k/2CRO_Website" />
                  </div>
                  <div className='col-span-12'>
                  <FeaturedProject title= "Hospital CRM" img={Carekloud} summary="A feature rich hospital CRM , build using React js with tailwind css and for backend nodejs is used . The CRM contains losts of featured on each login types like Appointment booking , Bill Generation , Patient Report managemnet and downlaod it in pdf and a lot more..." link="/" type="Featured Project" github="/"/>
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project  title= "Travel Website " img={TravelImg}  link="https://preeminent-biscotti-f79790.netlify.app" type=" Project" github="https://github.com/Vivekkr7k/Travel-website-Landing_page" />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project  title= "Crypto Tracker" img={CryptoTracker}  link="https://fantastic-sable-8b96e8.netlify.app" type=" Project" github="https://github.com/Vivekkr7k/CryptoTracker-Reactjs" />
                    <img src={GithubIcon} alt="" />
                  </div>
            </div>
        </Layout>
       </main>

     </>
    )
}

export default projects
