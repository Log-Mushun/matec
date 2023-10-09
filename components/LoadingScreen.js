import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Plexus from "./Plexus";
import { FadeLoader } from "react-spinners";
import Image from "next/image";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../i18n";

const LoadingScreen = ({ isVisible }) => {
  const loadingScreenRef = useRef(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadingScreen = loadingScreenRef.current;

    if (isVisible) {
      gsap.to(loadingScreen, {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          // Puedes ejecutar alguna acción cuando la animación de entrada ha terminado
        },
      });
    } else {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loadingScreen.style.display = "none";
        },
      });
    }
  }, [isVisible]);


  return (
    <I18nextProvider i18n={i18nfile}>

    <div ref={loadingScreenRef} className='h-screen fixed w-screen bg-gradient-radial-c flex flex-col justify-around items-center z-[300]' style={{zIndex:10001}}>
      <div className='container mx-auto flex justify-center z-10'>
        {/* logo */}
        <Image
          className='w-[60%] pt-20'
          src={'/logo_start.svg'}
          width={120}
          height={48}
          alt=''
          priority={true}
        />

      </div>
      <div className="flex flex-col items-center">
        <Plexus isStart={true} />
        <FadeLoader
          color="#0d5071" />
        <p className="text-black animate-pulse pt-3">{t('loader-text')}</p>
      </div>
    </div>
    </I18nextProvider>

  )
}

export default LoadingScreen;