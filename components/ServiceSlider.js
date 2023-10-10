import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "@/i18n";
import { useState } from 'react';


const ServiceSlider = () => {
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();

  const serviceData = [
    {
      title: t("bhs-solution-title1"),
      description: t("bhs-solution-text1")
    },
    {
      title: t("bhs-solution-title2"),
      description: t("bhs-solution-text2")
    },
    {
      title: t("bhs-solution-title3"),
      description: t("bhs-solution-text3")
    },
    {
      title: t("bhs-solution-title4"),
      description: t("bhs-solution-text4")
    },
    {
      title: t("bhs-solution-title5"),
      description: t("bhs-solution-text5")
    },
    {
      title: t("bhs-solution-title6"),
      description: t("bhs-solution-text6")
    },
    {
      title: t("bhs-solution-title7"),
      description: t("bhs-solution-text7")
    },
  ];
  return (
    <div
      className='h-full sm:h-full'
    >
      {serviceData.map((item, index) => {
        return (
          <div key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 z-[30] mb-5 w-[80%]'>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'><h3>
                  {item.title}
                </h3></div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSlider;
