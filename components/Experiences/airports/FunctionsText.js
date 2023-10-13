import React, { useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../../../i18n";

const FunctionsText = () => {
    const [index, setIndex] = useState(0);
    const { t, i18n } = useTranslation();

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        console.log('clicked');
        setSelectedIndex(index);
    }

    const buttons = [t('functions-title1'), t('functions-title2')];
    const descriptions = [
        t("functions-text1"),
        t("functions-text2"),
    ];

    return (
        <>
            <div className='absolute functions-text flex flex-col justify-center py-[5%] w-screen'>
                <div className="bg-[#121521] bg-opacity-70 h-[40vh] w-[100vw] absolute top-[30%] z-[14]" />
                <div className='w-full flex flex-row mt-20 pl-28 z-[32]'>
                    {buttons.map((button, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer mr-8 ${index === 0 ? '0' : '10'} w-[15vh] h-[1vh] hover:bg-white transition-colors duration-200 ${selectedIndex === index ? 'bg-white' : 'bg-[#b2cde0]'}`}
                            onClick={() => handleClick(index)}
                        ></div>
                    ))}
                </div>
                <div className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white w-[30%] z-[15]'>
                    <div className='md:mb-0 flex flex-row w-screen justify-around px-20'>
                        {buttons.map((button, index) => (
                            <div key={index} className={`flex flex-col items-start text-left ${index === selectedIndex ? 'opacity-100' : 'opacity-25'} w-[40%] transition-opacity duration-300`}>
                                <h1 className='text-[150%] pt-10'>{button}</h1>
                                <p className='text-[80%] text-white'>{descriptions[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunctionsText;
