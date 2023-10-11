import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page) 
  return getLayout(<Component {...pageProps} />)
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
