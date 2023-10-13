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
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../../i18n";
import { subscribeToCustomEvent } from "../../components/Languages/eventService";
import ModelViewer from "@/components/Experiences/airports/ModelViewer";
import ModelsInteractive from "@/components/ModelsInteractive/ModelsInteractive";
import dynamic from 'next/dynamic'
import DispelModel from "@/components/Experiences/airports/DispelModel";
import Closing from "@/components/Experiences/airports/Closing";
import ExperienceLayout from "@/components/Experiences/airports/ExperienceLayout";
import Layout from "@/components/Layout";


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
    <>
      <LoadingScreen isVisible={!isWebGiViewerLoaded} />
      <main data-scroll-container>
        <Plexus isStart={false} />
        <ProgressBar />
        <WebGiViewer />

        {/* <HeaderExperience />
        <AirportsFooter /> */}
        <section data-scroll-section className="panel ">
          <AirportsComp />
        </section>
        <section className="panel " data-scroll-section>
          <SlidableController>
            <DriverOne />
            <PlusButton number={1}
              right="left-[17%]"
              top="top-[15%]"
              title={t('airport-driver1-title')}
              titlesize='text-[4.5vh]'
              clicktext={t('click')} />
            <SlidableDriverInfo number={1}
              title={t('airport-driver1-title-sidebar')}
              text={t('airport-driver1-text-sidebar')}
              text2={t('airport-driver1-text-sidebar2')} />
          </SlidableController>
        </section>
        {/*SlidableDriverInfo affects the layout of the next element, so we have to let an empty div here in order to avoid the bug */}
        <div>
          <DispelModel />
        </div>
        <section className="panel  ">
          <SlidableController>
            <DriverInsights />
            {/* <PlusButton number={2}
              right="right-[-50%]"
              top="top-[65%]"
              title={t('airport-driver1-title2')}
              clicktext={t('click')}
              titlesize='text-[5vh]'
              />
              <SlidableDriverInfo number={2}
              title={t('airport-slidable-title1')}
              text={t('airport-slidable-texto1')}
              text2={t('airport-slidable-texto2')}
            /> */}
          </SlidableController>
        </section>

        <section className="panel">
          <SlidableController>
            <div className="bhs relative">

              <PlusButton number={3}
                right="left-[9%]"
                top="top-[30%]"
                title={t("airport-driver2-title")}
                titlesize='text-[4.5vh]'
                clicktext={t('click')} />

              <SlidableDriverInfo number={3} title={t('airport-slidable-title3')}
                text={t('airport-slidable-texto3')}
                text2={t('airport-slidable-texto4')}
              />
              <video
                autoPlay
                loop
                muted
                className="w-screen z-[11]"
              >
                <source src='/videos/9controlroom.mp4' type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </SlidableController>
        </section>
        <section className="panel  ">
          <DriverOneFunctions />
        </section>
        <section className="panel  ">
          <SlidableController>
            <Closing />
            <PlusButton number={4}
              right="left-[9%]"
              top="top-[40%]"
              title={t("closing-title")}
              titlesize='text-[4.5vh]'
              clicktext={t('click')} />
            <SlidableDriverInfo number={4} title={t("closing-title-slidable")}
              titlelist={t('bhs-solution-title1')}
              textlist={t('bhs-solution-text1')}
              titlelist2={t('bhs-solution-title2')}
              textlist2={t('bhs-solution-text2')}
              titlelist3={t('bhs-solution-title3')}
              textlist3={t('bhs-solution-text3')}
              titlelist4={t('bhs-solution-title4')}
              textlist4={t('bhs-solution-text4')}
              titlelist5={t('bhs-solution-title5')}
              textlist5={t('bhs-solution-text5')}
              titlelist6={t('bhs-solution-title6')}
              textlist6={t('bhs-solution-text6')}
              titlelist7={t('bhs-solution-title7')}
              textlist7={t('bhs-solution-text7')}
            />
          </SlidableController>
          {/* <ModelsInteractive /> */}
        </section>
        <section className="panel  ">
          <GuardianConcept />
        </section>
        <section className="panel ">
          <GalleryAirports />
        </section>

      </main>
    </>
  )
}

Airports.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ExperienceLayout>{page}</ExperienceLayout>
    </Layout>
  )
}
