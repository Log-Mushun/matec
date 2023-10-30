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
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "@/i18n";


export default function Index() {
  const { t, i18n } = useTranslation();

  const links = [
    {
      title: t('menu-start-text'),
      href: "/",
      src: "drivers/driver1.png"
    },
    {
      title: t('menu-checkin-text'),
      href: "#check-in",
      src: "drivers/driver2.png"
    },
    {
      title: t('airport-driver2-title-safety'),
      href: "#airport-safety",
      src: "drivers/driver3.png"
    },
    {
      title: t('airport-slidable-title3'),
      href: "#bhs",
      src: "drivers/driver1.png"
    },
    {
      title: t('menu-inspection-text'),
      href: "#inspection-zone",
      src: "drivers/driver1.png"
    },
    {
      title: t('menu-checkout-text'),
      href: "#check-out",
      src: "drivers/driver1.png"
    },
    {
      title: t('menu-guardian-text'),
      href: "#guardian",
      src: "drivers/driver1.png"
    },
    {
      title: t('Acerca de Nosotros'),
      href: "/about",
      src: "drivers/driver1.png"
    },
  ]

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