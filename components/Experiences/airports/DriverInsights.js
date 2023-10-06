'use client'

import React, { useEffect, useState } from 'react';

import VideoComponent from "../../VideoComponent"
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../../i18n";

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
                description:  t('airport-driver1-tab3-text')
            },
        ],
    },
    {
      title: t('airport-driver1-tab2-title'),
      info: [
          {
              description:  t('airport-driver1-tab2-text')
          },
      ],
    },
    {
      title: t('airport-driver1-tab1-title'),
      info: [
          {
              description:  t('airport-driver1-tab1-text')
          },
      ],
    }
];

  return (
    <I18nextProvider i18n={i18nfile}>

    <div className="h-[100vh] text-right pr-40 relative" id="driver-insights">
      <div className='driver-insightsclass opacity-0 z-[100] absolute w-[35%] pt-[8%] pl-[4%] pr-[3%] bg-[#003b71] bg-opacity-40 h-[100%]'>
        <div className='flex h-[1vh] mb-4'>
          {driverData.map((item, itemIndex) => (
            <div key={itemIndex} className='w-[20rem]'>
              <div
                key={itemIndex}
                className={`cursor-pointer top-0 left-0 w-[15vh] h-[1vh] ${itemIndex === index ? 'bg-white' : 'bg-[#b2cde0]'} hover:bg-white transition-colors duration-200`}
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
      <div className='w-screen h-screen relative'>
        <VideoComponent videoIndex={index} />
      </div>
    </div>
    </I18nextProvider>

  );
}

export default DriverInsights;
