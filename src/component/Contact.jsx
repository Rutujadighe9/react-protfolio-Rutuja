
import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in touch
      </motion.h1>

      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className='my-4'
        >
          Sagmner Kolhewadi Manoli-Road
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className='my-4 text-center'
        >
          8668211273
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;