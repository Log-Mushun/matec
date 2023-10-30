import Image from "next/image";
import { useEffect } from "react";
import { LuMailOpen } from "react-icons/lu"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Languages from "@/components/Languages/Languages";
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "@/i18n";


gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflowY = 'auto';
    animateElements();
  })

  const animateElements = () => {
    const web02Img = document.querySelector('#image-container-web02');
    const web03Img = document.querySelector('#image-container-web03');
    const title2 = document.querySelector('#title2');
    const title3 = document.querySelector('#title3');
    const description2 = document.querySelector('#desc2');
    const description3 = document.querySelector('#desc3');
    const container3 = document.querySelector('#container3');

    gsap.to(web02Img, {
      x: -20,
      scrollTrigger: {
        trigger: '.section2',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        delay: 1
      }
    })

    gsap.to(web03Img, {
      x: -20,
      scrollTrigger: {
        trigger: '.section3',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        delay: 1
      }
    })

    gsap.to(title2, {
      y: -20,
      delay: 1,
      scrollTrigger: {
        trigger: '.section2',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
      }
    })
    gsap.to(title3, {
      opacity: 1,
      delay: 1,
      scrollTrigger: {
        trigger: '.section3',
        start: 'top-=200 top',
        end: 50,
        scrub: 2,
      }
    })

    gsap.to(description2, {
      opacity: 1,
      y: -10,
      scrollTrigger: {
        trigger: '.section2',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
      }
    })
    gsap.to(description3, {
      opacity: 1,
      delay: 1,
      scrollTrigger: {
        trigger: '.section3',
        start: 'top-=150 top',
        end: 50,
        scrub: 2,
      }
    })

    gsap.to(container3, {
      opacity: 1,
      delay: 3,
      scrollTrigger: {
        trigger: '.section3',
        start: 'top-=100 top',
        end: 90,
        scrub: 5,
      }
    })



  }

  return (
    <I18nextProvider i18n={i18nfile}>

      <div className='bg-gradient-radial-a h-full'>
        <section className="min-h-screen h-full">
          <div className='flex flex-row relative'>
            <video
              autoPlay
              loop
              muted
              className="z-[1] h-screen object-fill absolute opacity-70"
            >
              <source src='/videos/blanco.mp4' type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
            <div className='w-[45%] pt-[12vh] px-[9vh] z-10 bg-[#121521] bg-opacity-70'>
              <motion.h1 className="text-[9vh]"
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                {t('about-title1')}
              </motion.h1>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <p className="pr-[3vw] leading-5 text-[110%]">
                  {t("about-p1")}
                </p>
                <p className="pt-[3vh] pr-[3vw] leading-5 text-[110%]">
                  {t("about-p2")}
                </p>
              </motion.div>

            </div>
            <motion.div className="pt-[5vh] pl-[3vw] z-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <Image
                src="/images/about/web01.png"
                width={550}
                height={550}

              />
            </motion.div>
          </div>
        </section>
        <section className="section2 min-h-screen">
          <video
            autoPlay
            loop
            muted
            className="z-[1] h-screen object-fill absolute opacity-70"
          >
            <source src='/videos/blanco.mp4' type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
          <div className='flex flex-row'>
            <div className="pt-[5vh] pl-[3vw] transform -translate-x-[20] z-10" id="image-container-web02">
              <Image
                src="/images/about/web02.png"
                width={550}
                height={550}

              />
            </div>
            <div className='w-[45%] pt-[12vh] px-[9vh] flex items-center z-10 bg-[#121521] bg-opacity-70'>
              <div>
                <h1 className="text-[9vh] transform -translate-y-20" id="title2">
                  {t('about-title2')}
                </h1>
                <p className="leading-5 text-[110%] transform translate-y-10 opacity-0" id="desc2">
                  {t('about-p3')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#003b71] section3">
          <div className="bg-white rounded-3xl p-5">
            <div className="bg-[#003b71] rounded-3xl">
              <div className='flex flex-row'>
                <div className="pt-[5vh] pl-[3vw] transform -translate-x-[20]" id="image-container-web03">
                  <Image
                    src="/images/about/web04.png"
                    width={550}
                    height={550}

                  />
                </div>
                <div className='w-[45%] pt-[12vh] px-[9vh] flex items-center'>
                  <div>
                    <h1 className="text-[9vh] leading-[10vh] opacity-0" id="title3">
                      {t('about-title3')}
                    </h1>
                    <p className="leading-7 text-[3.5vh] mt-3 opacity-0" id="desc3">
                      {t('about-p4')}
                    </p>
                    <div className="bg-white rounded-xl h-[9vh] flex items-center justify-between px-4 mt-7 opacity-0" id="container3">
                      <div className="w-[15%] p-2">
                        <LuMailOpen className="text-black w-full h-full" />
                      </div>
                      <input className="text-black focus:outline-none caret-black w-full"
                        placeholder={t('about-mail')}>
                      </input>
                      <button className="bg-[#003b71] text-white px-4 py-2 rounded-md text-[3vh] bold-text">{t('about-subscribe')}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='fixed bottom-0 left-0 w-full p-4 text-center z-10'>
          <div className='flex justify-center items-center'>
            <Languages />
          </div>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default About;
