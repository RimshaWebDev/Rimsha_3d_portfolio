import React from 'react'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {textVariant } from "../utils/motion";
import { styles } from "../styles";
import {css, figma, git, html, javascript, mongodb, nodejs, reactjs, tailwind, redux, threejs, nextjs, docker, typescript} from "../assets";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I know at best
        </p>
      </motion.div>
      <div className='margin-30px-8px'>
      <Marquee play={true}>
      <div className='w-20 h-20 mt-5'><img src={css} alt='css'/></div>
      <div className='w-20 h-20 mt-5'><img src={figma} alt='figma'/></div>
      <div className='w-20 h-20 mt-5'><img src={git} alt='git'/></div>
      <div className='w-20 h-20 mt-5'><img src={html} alt='html' /></div>
      <div className='w-20 h-20 mt-5'><img src={javascript} alt='javascript'/></div>
      <div className='w-20 h-20 mt-5'><img src={mongodb} alt='mongodb'/></div>
      <div className='w-20 h-20 mt-5'><img src={nodejs} alt='nodejs'/></div>
      <div className='w-20 h-20 mt-5'><img src={reactjs} alt='reactjs'/></div>  
      <div className='w-20 h-20 mt-5'><img src={tailwind} alt='tailwind'/></div>
      <div className='w-20 h-20 mt-5'><img src={redux} alt='redux'/></div>
      <div className='w-20 h-20 mt-5'><img src={threejs} alt='threejs'/></div>
      <div className='w-20 h-20 mt-5'><img src={nextjs} alt='nextjs'/></div>
      <div className='w-20 h-20 mt-5'><img src={docker} alt='docker'/></div>
      <div className='w-20 h-20 mt-5'><img src={typescript} alt='typescript'/></div>
      </Marquee>
      </div> 
      </> 
  )
}

export default Tech