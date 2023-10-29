'use client';
import styles from './style.module.scss';
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
import { AiOutlineClose } from 'react-icons/ai'
import { MyContext } from '@/MyContextProvider';

const links = [
  {
    title: "Start Page",
    href: "/",
    src: "drivers/driver1.png"
  },
  {
    title: "Check In",
    href: "#check-in",
    src: "drivers/driver2.png"
  },
  {
    title: "Airport Safety",
    href: "#airport-safety",
    src: "drivers/driver3.png"
  },
  {
    title: "BHS Control Center",
    href: "#bhs",
    src: "drivers/driver1.png"
  },
  {
    title: "Inspection Zone",
    href: "#inspection-zone",
    src: "drivers/driver1.png"
  },
  {
    title: "Check Out",
    href: "#check-out",
    src: "drivers/driver1.png"
  },
  {
    title: "Guardian Angel",
    href: "#guardian",
    src: "drivers/driver1.png"
  },
  {
    title: "About",
    href: "/about",
    src: "drivers/driver1.png"
  },
]

export default function Index() {

  const { menuOpen, setMenuOpen } = useContext(MyContext);
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  const handleClick = () => {
    setMenuOpen(false);
    console.log(menuOpen);
  }

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={`${styles.nav}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        </div>
        {menuOpen == true ? (
          <motion.div className="opacity-0" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <AiOutlineClose className="w-[7vw] h-[7vh] mt-[3vh] absolute top-0 right-0 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </motion.div>
        ) : null}
      </div>
      <div className={`${styles.light} ${styles.x1}`}></div>
      <div className={`${styles.light} ${styles.x2}`}></div>
      <div className={`${styles.light} ${styles.x3}`}></div>
      <div className={`${styles.light} ${styles.x4}`}></div>
      <div className={`${styles.light} ${styles.x5}`}></div>
      <div className={`${styles.light} ${styles.x6}`}></div>
      <div className={`${styles.light} ${styles.x7}`}></div>
      <div className={`${styles.light} ${styles.x8}`}></div>
      <div className={`${styles.light} ${styles.x9}`}></div>
    </motion.div>
  )
}