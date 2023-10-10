// components
import ServiceSlider from '@/components/ServiceSlider';
import { useState } from 'react';
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "@/i18n";


const Closing = () => {
    const [index, setIndex] = useState(0);
    const { t, i18n } = useTranslation();

    return (
        <I18nextProvider i18n={i18nfile}>
            <div className='h-full bg-black pt-10 flex items-center'>
                <div className='container mx-auto z-[11]'>
                    <div className='flex flex-col xl:flex-row gap-x-8'>
                        {/* text */}
                        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                            <h2
                                className='h2 xl:mt-8 text-[160%] pb-[1%]'
                            >
                                {t("closing-title")}
                                <span className='text-accent'>.</span>
                            </h2>
                            <p
                                className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'
                            >
                                {t("closing-text1")}
                            </p>
                            <p
                                className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'
                            >
                                {t("closing-text2")}
                            </p>
                        </div>

                        {/* slider */}
                        <div
                            className='w-full xl:max-w-[65%]'
                        >
                            <ServiceSlider />
                        </div>
                    </div>
                </div>
            </div>
        </I18nextProvider>
    );
};

export default Closing;
