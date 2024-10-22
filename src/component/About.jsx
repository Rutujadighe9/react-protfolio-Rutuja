import React from 'react'
import aboutImg from '../assets/assets/about.jfif';
const ABOUT_TEXT = "Hi, my name is Rutuja. I am a full-stack developer with 3 years of experience at Baap Company. I specialize in building applications using Flutter and have worked extensively with Node.js, MongoDB, MySQL, and SQL. I'm passionate about creating efficient and scalable software solutions. Currently, I am pursuing my Bachelor's degree in Computer Applications (BCA), and I enjoy working on both front-end and back-end development. My goal is to continue growing as a developer and work in a multinational company where I can contribute to exciting projects.You can customize it further based on the specific context!";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <h1 className='my-20 text-center text-4xl'> About
                <span className='text-neutral-500'> Me</span></h1>
            <div className='flex flex-wrap'>
                <motion.div

                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex item-center justify-center'>
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-1 text-lg font-medium text-purple-900'>
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
