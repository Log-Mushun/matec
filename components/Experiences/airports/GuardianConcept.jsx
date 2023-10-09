import Image from "next/image";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "../../../i18n";

const GuardianConcept = () => {
    const { t, i18n } = useTranslation();
    return (
        <I18nextProvider i18n={i18nfile}>
            <div className="h-full text-right pr-40 pb-24 w-screen left-0 relative flex flex-col items-center justify-start" id="guardian-concept">
                    <h1 className="text-[150%] z-[11]">
                        {t('guardian-angel-title')}
                    </h1>
                <Image
                    src={'/images/wingsV2.png'}
                    width={500}
                    height={500}
                    className="z-[11] relative mix-blend-luminosity"
                />
                <div className="z-[11] relative bottom-[15%] px-[5%] text-left">
                    <div className="flex flex-col">
                        <div>
                            <p className='text-[80%] text-white'>
                            {t('guardian-angel-text1')}
                            </p>
                        </div>
                        <div className="pt-[1%]">
                        <p className='text-[80%] text-white'>
                            {t('guardian-angel-text2')}
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </I18nextProvider>
    )
}

export default GuardianConcept;