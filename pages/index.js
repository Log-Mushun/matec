'use client'
import Image from 'next/image';
import Link from 'next/link';

import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { FaBoxesPacking } from 'react-icons/fa6'
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../i18n";
// components
import NoSSR from 'react-no-ssr'; // Importa react-no-ssr

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import HeaderSelector from '../components/Headers/HeaderSelector';

import Transition from '../components/Transition';
import Plexus from '../components/Plexus';
import { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";

import SplitType from 'split-type';
import Languages from '@/components/Languages/Languages';



// ... (código anterior)

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const ourText = new SplitType('#titulo_selector', { types: 'chars' })
    const chars = ourText.chars
    // Animación de aparición para titulo_selector
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    );
    // Animación de aparición para la línea
    gsap.fromTo(
      '#titulo_selector_span',
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
        duration: 10,
        ease: 'power4.out',
      }
    );
  }, []);


  return (
    <I18nextProvider i18n={i18nfile}>
      <NoSSR>

    <AnimatePresence>
      <motion.div className='h-full'>
        <Transition />
        <div className='container'>
          <HeaderSelector />
          <div className='h-screen w-screen bg-gradient-radial-c flex flex-col justify-center items-center'>
            {/* text */}
            <div className='relative top-[15%] pb-5 md:pb-10 lg:pb-0 z-10'>
              <h4
                id='titulo_selector'
                className='text-l md:text-2xl lg:text-2xl text-[#003b71] opacity-80 text-center hover:opacity-20 transition-opacity duration-300 z-10'
              >
                {t('selector-title')}
              </h4>


            </div>
            <div className='text-center md:flex-row lg:flex-row flex items-center justify-center sm:gap-0 lg:gap-20 lg:pt-20  container mx-auto flex-col relative top-[10%]'>
              {/*suitcase*/}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <FaSuitcaseRolling size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 w-14 z-10 hidden md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 z-10 text-2xl'>{t('selector-aeropuerto')}</h1>
                  </div>
                </Link>
              </motion.div>
              {/* papers */}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <GiCardboardBoxClosed size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 hidden lg:block md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>{t('selector-papel')}</h1>
                  </div>
                </Link>
              </motion.div>
              {/* logistics */}
              <motion.div
                className='z-10 flex items-center mb-8'
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                <Link href='/airports'>
                  <div className='bg-transparent hover:bg-hoverbg hover:bg-cover hover:bg-no-repeat h-full w-[12rem] flex justify-end flex-col items-center'>
                    <FaBoxesPacking size={128} className='text-[#003d71] lg:w-36 lg:h-36 md:w-20 md:h-20 hidden lg:block md:inline' />
                    <h1 className='text-[#003d71] text-center pt-5 text-2xl'>{t('selector-logi')}</h1>
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className='fixed bottom-0 left-0 w-full p-4 text-center z-10'>
        <div className='flex justify-center items-center'>
          <Languages />
        </div>
      </div>
          </div>
          
          <div className='w-full h-full absolute right-0 bottom-0 z-0'>
            <Plexus isStart={true} />

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
    </NoSSR>
    </I18nextProvider>

  );
};

export default Home;

