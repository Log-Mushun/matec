import React, { useRef, useEffect } from 'react';
import ServiceSlider from '@/components/ServiceSlider';
import { useState } from 'react';
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "@/i18n";

const Closing = () => {
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && containerRef.current) {
      // Obtén la altura del video
      const videoHeight = videoRef.current.offsetHeight;

      // Establece la altura del contenedor según la altura del video
      containerRef.current.style.height = `${videoHeight}px`;
    }
  }, []);

  return (
    <I18nextProvider i18n={i18nfile}>
      <div className='h-full flex items-center' id="closing" ref={containerRef}>
        <div className='container mx-auto z-[11]'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <p className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'>
                {t("closing-text1")}
              </p>
              <p className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'>
                {t("closing-text2")}
              </p>
            </div>

            {/* slider */}
            <div className='w-full xl:max-w-[65%]'>
              {/* Your slider component or content */}
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11] object-fit"
          ref={videoRef}
        >
          <source src='/videos/8checkout.mp4' type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </I18nextProvider>
  );
};

export default Closing;
