
import React from 'react';
import profilePic from "../assets/assets/rutuja.jpg";
const HERO_CONTENT = "I am a passionate full-stack developer specializing in creating dynamic, responsive web and mobile applications. With 3 years of experience at Baap Company, I have honed my skills in both front-end and back-end development, working primarily with Flutter for mobile apps and Node.js, MongoDB, MySQL, and SQL on the server side. I thrive on solving complex problems and enjoy building scalable, user-friendly applications. Currently pursuing my Bachelor’s in Computer Applications (BCA), I’m always looking to learn new technologies and improve my skills. My goal is to contribute to innovative projects and grow within a multinational company.";
import { motion } from "framer-motion";
const contanier = (dealy) => ({
    hidden: { x: -100, opacity: 1 },
    visible: {
        x: 0, opcity: 1,
        transition: { duration: 0.5, dealy: dealy }
    }
})
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        < motion.h1
                            variants={contanier(0.5)}
                            initial="hidden"
                            animate="visible"
                            // transition={{ duration: 0.5, delay: 1 }}
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Rutuja Dighe
                        </motion.h1>

                        < motion.span

                            variants={contanier(1)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300
                            via-slate-500 to-purple-50
                            bg-clip-text text-4xl tracking-tight text-transparent'>
                            Full-stack Developer
                        </motion.span>

                        < motion.p
                            variants={contanier(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt='profile' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
