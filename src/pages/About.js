import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/Componets/Layout";
import Image from "next/image";
import Anitmatedtxt from "@/Componets/Anitmatedtxt";
import ProfilePic from "../../public/images/profile/pic.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "@/Componets/Education";
import TransitonEffect from "@/Componets/TransitonEffect";



const About = () => {
  const AnimateNumbers =({value})=>{
     const ref = useRef(value);

     const motionValue = useMotionValue(0);
     const springValue = useSpring(motionValue , {duration: 3000})
     const isInView = useInView(ref);

     useEffect(()=>{
     if(isInView){
      motionValue.set(value);
     }
     },[isInView ,value , motionValue]); 


     useEffect(()=>{
       springValue.on("change" , (latest)=>{
        // console.log(latest)
        if(ref.current && latest.toFixed(0) <= value){
          ref.current.textContent = latest.toFixed(0);
        }
       })
     },[springValue , value])




    return <span ref={ref}></span>;
  }
  return (
    <>
      <Head>
        <title>Vivek kumar | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitonEffect/>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-1">
          <Anitmatedtxt text="Passion Fules Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"  />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="text-lg text-dark/75 font-bold mb-4 uppercase dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, I'm Vivek kumar, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2+ years of experience in the field as a Freelancer. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium py-4">
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium ">
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ">
              {/* <div className="absolute  -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"> */}
              <Image
                src={ProfilePic}
                alt=""
                className="h-auto w-full rounded-2xl "
                priority   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* </div> */}
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3 md:gap-7">
              <div className="flex flex-col items-end justify-center xl:items-center  " >
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"> <AnimateNumbers value={5}/>+ </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimateNumbers value={10}/>+</span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light  xl:text-center md:text-lg sm:text-base xs:text-sm">projets completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimateNumbers value={2}/>+</span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light  xl:text-center md:text-lg sm:text-base xs:text-sm ">year of experience</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;
