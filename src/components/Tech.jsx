import React from 'react'
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {css, docker, figma, git, html, javascript, mongodb, nodejs, reactjs, redux,tailwind} from "../assets";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      </motion.div>
      <div className='flex justify-center items-center mt-5'>
      <img src={css} alt='css' className='w-50'/>
      <img src={docker} alt='docker' className='w-100'/>
      <img src={figma} alt='figma' className='w-100'/>
      <img src={git} alt='git' className='w-100'/>
      <img src={html} alt='html' className='w-100'/>
      <img src={javascript} alt='javascript' className='w-100'/>
      <img src={mongodb} alt='mongodb' className='w-100'/>
      <img src={nodejs} alt='nodejs' className='w-100'/>
      <img src={reactjs} alt='reactjs' className='w-100'/>
      <img src={redux} alt='redux' className='w-100'/>
      <img src={tailwind} alt='tailwind' className='w-100'/>
      </div> 
      </> 
  )
}

export default Tech