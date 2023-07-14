import React, { useRef } from "react";
import {motion, useScroll  } from "framer-motion";
import LiIcon from "@/Componets/LiIcon";

const Details = ({ postion, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-10 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5 , type:"spring"}} viewport={{once:true}} >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {postion}&nbsp;
          <a
            href={companyLink}
            target="_black"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
 
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
        target:ref,
        offset:["start end", "center start"]
    }
    )
    
  return (
    <div className="my-64">
      <h2 className="font-bold text-7xl w-full text-center  mb-10 md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div 
          style={{scaleY:scrollYProgress}} 
           className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] "/>
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            postion="Reactjs Developer"
            company="Feelancer"
            companyLink="www.freelancer.com"
            time="Full-Time"
            address="unknown"
            work="Worked on a  various project as a freelancer and provided qaulity work within time and satified client ."
          />
          <Details
            postion="Looking for Job"
            company="OpenToWork"
            companyLink="www.freelancer.com"
            time="Full-Time"
            address="unknown"
            work="Looking for an job opportunity where i can use my skills and imporve it while working ."
          />
          {/* <Details
            postion="Reactjs Developer"
            company="Feelancer"
            companyLink="www.freelancer.com"
            time="everytime"
            address="unknown"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            postion="Reactjs Developer"
            company="Feelancer"
            companyLink="www.freelancer.com"
            time="everytime"
            address="unknown"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            postion="Reactjs Developer"
            company="Feelancer"
            companyLink="www.freelancer.com"
            time="everytime"
            address="unknown"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
