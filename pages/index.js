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
        <div className='text-center flex flex-row justify-between items-end pb-10 h-full container mx-auto'>
          {/* suitcase */}
          <motion.div
            className='z-10 flex items-center flex-col'
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <FaSuitcaseRolling className='text-[#003d71]  lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-12 sm:h-12' />
            <h1 className='text-[#003d71] text-center pt-5'>Aeropuertos</h1>
          </motion.div>
          {/* papers */}
          <motion.div
            className='z-10 flex items-center flex-col'
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <GiCardboardBoxClosed className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-12 sm:h-12' />
            <h1 className='text-[#003d71] text-center pt-5'>Papel y carton</h1>
          </motion.div>
          {/* papers */}
          <motion.div
            className='z-10 flex items-center flex-col'
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <FaBoxesPacking className='text-[#003d71]  lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-12 sm:h-12' />
            <h1 className='text-[#003d71] text-center pt-5 text-sm'>Logistica</h1>
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
