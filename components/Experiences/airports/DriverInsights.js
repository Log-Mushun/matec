'use client'

import React, { useEffect, useState } from 'react';

import VideoComponent from "../../VideoComponent"
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../../../i18n";

//  about data

const DriverInsights = () => {
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();

  const handleIndexChange = (itemIndex) => {
    setIndex(itemIndex);
  };


  useEffect(() => {
    // Suscribirse al evento personalizado
    const handleCustomEvent = () => {
      // Realizar la acción necesaria para forzar el rerender en ComponenteB
      console.log('ComponenteB ha sido forzado a rerender', i18n.language);
    };

    window.addEventListener('customEvent', handleCustomEvent);

    return () => {
      // Desuscribirse al desmontar el componente (limpiar)
      window.removeEventListener('customEvent', handleCustomEvent);
    };
  }, []);

  const driverData = [
    {
      title: t('airport-driver1-tab3-title'),
      info: [
        {
          description: t('airport-driver1-tab3-text')
        },
      ],
    },
    {
      title: t('airport-driver1-tab2-title'),
      info: [
        {
          description: t('airport-driver1-tab2-text')
        },
      ],
    },
    {
      title: t('airport-driver1-tab1-title'),
      info: [
        {
          description: t('airport-driver1-tab1-text')
        },
      ],
    }
  ];

  return (
    <I18nextProvider i18n={i18nfile}>

      <div className="text-right relative" id="driver-insights">
        <h1 className='text-left pb-6 text-[7vh] absolute z-[32] top-[13%] left-[4%]'>{t('airport-driver2-title-safety')}</h1>
        <div className='driver-insightsclass opacity-0 z-[33] absolute w-[40vw] pl-[4%] pr-[3%] top-1/2 transform -translate-y-1/2'>
          <div className='flex h-[1vh] mb-4'>
            {driverData.map((item, itemIndex) => (
              <div key={itemIndex} className='w-[60vw]'>
                <div
                  key={itemIndex}
                  className={`cursor-pointer left-0 w-[7vw] h-[1vh] ${itemIndex === index ? 'bg-white' : 'bg-[#b2cde0]'} hover:bg-white transition-colors duration-200`}
                  onClick={() => handleIndexChange(itemIndex)}
                ></div>
              </div>
            ))}
          </div>
          <div>
            {driverData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white'>
                <div className='font-light mb-2 md:mb-0 text-start'>
                  <h1 className='text-[200%]'>
                    {driverData[index].title}
                  </h1>
                </div>
                <div className='mb-2 md:mb-0 text-start'>
                  <p className='text-[80%] text-white'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='h-[100vh] relative'>
          <VideoComponent videoIndex={index} isFunctions={1} />
          <div className='bg-[#121521] bg-opacity-70 absolute w-[50%] h-[80%] z-[15] top-1/2 transform -translate-y-1/2' />
        </div>
      </div>
    </I18nextProvider>

  );
}

export default DriverInsights;
