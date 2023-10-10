import { ImCross } from 'react-icons/im'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
import ParticlesContainer from '../../ParticlesContainer';

const SlidableDriverInfo = (props) => {
  const [clicked, setClicked] = new useState(false);
  const videoId = 'eoi_TTNt3GY';

  var driverOneElement;
  var webGiViewer;
  var plusButton;
  var slidableDriverInfo;
  var crossClose;
  var driverInsights;
  var headerExperience;
  var buttonTitle1;
  var buttonTitle2;
  var buttonTitle3;
  var driverOneFunctions;

  const closeFunction = () => {
    getTheElements();

    {
      gsap.to(webGiViewer, { x: 0, duration: 0.5 });
      gsap.to(`.plus-button${props.number}`, { opacity: 1, cursor: "pointer", duration: 0.5, delay: 0.4 });
      gsap.to(slidableDriverInfo, { width: 0, duration: 0.5 });
      gsap.to(crossClose, { opacity: 0, cursor: "auto", duration: 0.1 });
      gsap.to(headerExperience, { zIndex: 200, duration: 0.1 });

      if (props.number == 1) {
        gsap.to(driverOneElement, { x: 0, duration: 0.5 });
        gsap.to(buttonTitle1, { opacity: 1, duration: 0.5 });
      }

      if (props.number == 2) {
        gsap.to(driverInsights, { opacity: 1, duration: 0.5 });
        gsap.to(buttonTitle2, { opacity: 1, duration: 0.5 });
      }

      if (props.number == 3) {
        gsap.to(driverOneFunctions, { opacity: 1, duration: 0.5 });
        gsap.to(buttonTitle3, { opacity: 1, duration: 0.5 });
      }

    }
  };


  const getTheElements = () => {
    webGiViewer = document.getElementById("webgi-viewer");
    driverOneElement = document.getElementById("driver-one");
    plusButton = document.getElementById(`plus-button${props.number}`);
    slidableDriverInfo = document.getElementById(`slidable-driver-info${props.number}`);
    crossClose = document.getElementById(`cross-close${props.number}`);
    headerExperience = document.getElementById("header-experience");

    buttonTitle1 = document.getElementById("button-title1");

    driverInsights = document.getElementById("driver-insights");
    buttonTitle2 = document.getElementById("button-title2");

    driverOneFunctions = document.getElementById("driverone-functions");
    buttonTitle3 = document.getElementById("button-title3");
  }

  return (
    <div className="bg-[#213541] w-[0%] h-full right-0 fixed top-0 z-[33] overflow-y-auto" id={`slidable-driver-info${props.number}`}
      key={props.number}>
      <div key={props.number}>
        <Image
          src={"/plus.svg"}
          width={20}
          height={20}
          id={`cross-close${props.number}`}
          alt="a close button, it's a cross"
          className="absolute cursor-pointer rotate-45 top-10 right-10 z-[30]"
          onClick={closeFunction}
        />
      </div>
      <div className='flex flex-row'>
        <div className='bg-[#021322] w-[20%] h-full min-h-[190vh] relative flex items-center justify-center'>
          <ParticlesContainer number={props.number} />
        </div>
        <div className='relative bg-gradient-to-t from-[#021322] to-[#213541]  h-full w-[80%]'>
          <div className='flex flex-col'>
            <h1 className='text-2xl pt-16 pl-10'>
              {props.title}
            </h1>
            {props.number == 1 && (
              <>
                <Image
                  src={'/images/slidable_img1.png'}
                  width={270}
                  height={200}
                  className='pt-5 flex self-center justify-self-center'
                />
                <div>
                  <p className='pt-3 pl-3 pr-3'>
                    {props.text}
                  </p>
                </div>
                <div>
                  <iframe
                    width="370"
                    height="230"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowfullscreen
                    className='flex self-center justify-self-center'
                  ></iframe>
                </div>
                <div>
                  <p className='pt-3 pl-3 pr-3'>
                    {props.text2}
                  </p>
                </div>
              </>
            )
            }
            {props.number == 2 && (
              <>
                <Image
                  src={'/images/ATR-01.png'}
                  width={320}
                  height={200}
                  className='pt-5 flex self-center justify-self-center'
                />
                <div>
                  <p className='pt-3 pl-3 pr-3 text-xs'>
                    {props.text}
                  </p>
                </div>
                <Image
                  src={'/images/CBRA-01.png'}
                  width={320}
                  height={250}
                  className='pt-5 flex self-center justify-self-center'
                />
                <div>
                  <p className='pt-3 pl-3 pr-3 text-xs'>
                    {props.text2}
                  </p>
                </div>
              </>
            )
            }
            {props.number == 3 && (
              <>
                <Image
                  src={'/images/CROSSBELTSORT-01.png'}
                  width={320}
                  height={250}
                  className='pt-5 flex self-center justify-self-center'
                />
                <div>
                  <p className='pt-3 pl-3 pr-3 text-xs'>
                    {props.text}
                  </p>
                </div>
                <Image
                  src={'/images/CROSSOVER-01.png'}
                  width={320}
                  height={250}
                  className='pt-5 flex self-center justify-self-center'
                />
                <div>
                  <p className='pt-3 pl-3 pr-3 text-xs'>
                    {props.text2}
                  </p>
                </div>
              </>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlidableDriverInfo;