// next image
import Image from 'next/image';

import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaBoxesPacking } from 'react-icons/fa6'

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-radial-a'>
        <div className='text-center flex flex-row justify-center xl:pt-[21rem] xl:text-left h-full container mx-auto'>
          {/* suitcase */}
          <motion.div
            className='pr-20 z-10'
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <FaSuitcaseRolling className='text-[#003d71]  w-36 h-36' />
            <h1 className='text-[#003d71] text-center pt-5'>Aeropuertos</h1>
          </motion.div>
          {/* papers */}
          <motion.div
            className='pr-20 z-10'
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <GiCardboardBoxClosed className='text-[#003d71]  w-36 h-36' />
            <h1 className='text-[#003d71] text-center pt-5'>Papel y carton</h1>
          </motion.div>
          {/* papers */}
          <motion.div
            className='z-10'
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <FaBoxesPacking className='text-[#003d71]  w-36 h-36' />
            <h1 className='text-[#003d71] text-center pt-5'>Logistica</h1>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-transparent xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
