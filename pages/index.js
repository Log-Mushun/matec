// next image
import Image from 'next/image';
import Link from 'next/link';

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
            <Link
              href='/airports'
            >
              <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-[12.5rem] w-[12rem] flex justify-end flex-col items-center'>
                <FaSuitcaseRolling className='text-[#003d71]  lg:w-36 lg:h-36 md:w-20 md:h-20 sm:w-12 sm:h-12 z-10' />
                <h1 className='text-[#003d71] text-center pt-5 z-10 text-2xl'>Aeropuertos</h1>
              </div>
            </Link>
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
            <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Papel y carton</h1>
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
            <h1 className='text-[#003d71] text-center pt-5 text-2xl'>Logistica</h1>
          </motion.div>
        </div>
      </div>
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
