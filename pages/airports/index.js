'use client'

import AirportsComp from "../../components/Experiences/airports/AirportsComp"
import DriverInsights from "../../components/Experiences/airports/DriverInsights";
import DriverOne from "../../components/Experiences/airports/DriverOne";
import HeaderExperience from "../../components/Headers/HeaderExperience";
import HeaderGeneral from "../../components/Headers/HeaderGeneral/HeaderGeneral";
import PlusButton from "../../components/PlusButton";
import WebGiViewer from "../../components/Experiences/airports/WebGiViewer";
import SlidableDriverInfo from "../../components/Experiences/airports/SlidableDriverInfo";
import DriverOneFunctions from "../../components/Experiences/airports/DriverOneFunctions";
import LoadingScreen from "../../components/LoadingScreen";
import SlidableController from "../../components/Experiences/airports/SlidableController";
import Plexus from "../../components/Plexus";
import { MyContextProvider } from "../../MyContextProvider";
import AirportsFooter from "../../components/AirportsFooter";
import GalleryAirports from "../../components/Galleries/GalleryAirports";

import React, { useState, useEffect, useCallback, useRef } from "react";
import GuardianConcept from "../../components/Experiences/airports/GuardianConcept";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../i18n";
import { subscribeToCustomEvent } from "../../components/Languages/eventService";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Airports() {
  const [isWebGiViewerLoaded, setIsWebGiViewerLoaded] = useState(false);

  const { t, i18n } = useTranslation();


  useEffect(() => {
    const handleWebGiViewerLoaded = () => {
      console.log('WebGiViewer cargado completamente');
      setIsWebGiViewerLoaded(true);
      document.body.style.overflowY = 'auto';
    };
    // const driverOne = document.getElementById('driver-one');
    // ScrollTrigger.create({
    //   trigger: driverOne,
    //   start: "top bottom",
    //   end: "+=199%",
    //   onToggle: self => self.isActive && !scrollTween && goToSectionOne()
    // });

    // let panels = gsap.utils.toArray(".panel"),
    //   observer = ScrollTrigger.normalizeScroll(true),
    //   scrollTween;

    // // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    // document.addEventListener("touchstart", e => {
    //   if (scrollTween) {
    //     e.preventDefault();
    //     e.stopImmediatePropagation();
    //   }
    // }, { capture: true, passive: false })

    // function goToSectionOne() {
    //   scrollTween = gsap.to(window, {
    //     scrollTo: { y: innerHeight, autoKill: false },
    //     onStart: () => {
    //       document.body.style.overflow = 'hidden';
    //       observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
    //       observer.enable();
    //       console.log('start');
    //     },
    //     duration: 1,
    //     onComplete: () => { scrollTween = null; document.body.style.overflow = 'auto'; },
    //     overwrite: true
    //   });
    // }

    document.addEventListener('webGiViewerLoaded', handleWebGiViewerLoaded);

    return () => {
      document.removeEventListener('webGiViewerLoaded', handleWebGiViewerLoaded);
    };
  }, []);

  useEffect(() => {
    // Suscribirse al evento personalizado
    const handleCustomEvent = () => {
      // Realizar la acción necesaria para forzar el rerender en ComponenteB
      console.log('ComponenteB ha sido forzado a rerender');
    };

    window.addEventListener('customEvent', handleCustomEvent);

    return () => {
      // Desuscribirse al desmontar el componente (limpiar)
      window.removeEventListener('customEvent', handleCustomEvent);
    };
  }, []);

  return (
    <MyContextProvider>
      <div className="h-full">
        <ProgressBar />
        <LoadingScreen isVisible={!isWebGiViewerLoaded} />
        <WebGiViewer />
        <Plexus isStart={false} />
        <HeaderGeneral />
        <HeaderExperience />
        <section className="panel h-full">
          <AirportsComp />
        </section>
        <section className="panel h-full">
          <SlidableController>
            <DriverOne />
            <PlusButton number={1}
              right="left-[17%]"
              top="top-[15%]" 
              title={t('airport-driver1-title')}
              titlesize='text-[4.5vh]'/>
            <SlidableDriverInfo number={1} 
            title={t('airport-driver1-title-sidebar')}
            text={t('airport-driver1-text-sidebar')}/>
          </SlidableController>
        </section>
        {/*SlidableDriverInfo affects the layout of the next element, so we have to let an empty div here in order to avoid the bug */}
        <div>
        </div>
        <section className="panel h-full">
          <SlidableController>
            <DriverInsights />
            <PlusButton number={2}
              right="right-[-50%]"
              top="top-[65%]"
              title={t('airport-driver1-title2')}
              titlesize='text-[5vh]'
            />
            <SlidableDriverInfo number={2} 
            title={t('airport-slidable-title1')}
            text={t('airport-slidable-texto1')}
            />
          </SlidableController>
        </section>
        <section className="panel h-full">
          <SlidableController>
            <DriverOneFunctions />
            <PlusButton number={3}
              right="left-[9%]"
              top="top-[20%]" 
              title={t("airport-driver2-title")}
              titlesize='text-[4.5vh]'/>
            <SlidableDriverInfo number={3}   title={t('airport-slidable-title3')}
            text={t('airport-slidable-texto3')}/>
          </SlidableController>
        </section>
        {/* <GuardianConcept /> */}
        <GalleryAirports/>
      </div>
    </MyContextProvider>
  )
}
