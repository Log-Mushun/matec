'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
import { ImCross } from 'react-icons/im'

const PlusButton = (props) => {
  const [clicked, setClicked] = new useState(false);

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


  const handleClick = () => {

    getTheElements();

    if (driverOneElement) {
      gsap.to(webGiViewer, { x: -450, duration: 0.5 });
      gsap.to(plusButton, { opacity: 0, cursor: "auto", duration: 0 });
      gsap.to(slidableDriverInfo, { width: 500, duration: 0.5 });
      gsap.to(crossClose, { opacity: 1, cursor: "pointer", duration: 0.3 });
      gsap.to(headerExperience, { zIndex: 30, duration: 0.1 });

      if (props.number == 1) {
        gsap.to(driverOneElement, { x: -450, duration: 0.5 });
        gsap.to(buttonTitle1, { opacity: 0, duration: 0.5 });
      }

      if (props.number == 2) {

        gsap.to(buttonTitle2, { opacity: 0, duration: 0.5 });
      }


      if (props.number == 3) {
        // gsap.to(driverOneFunctions, { opacity: 0, duration: 0.5 });
        gsap.to(buttonTitle3, { opacity: 0, duration: 0.5 });
      }

    }

    setClicked(!clicked);
  };

  const closeFunction = () => {
    getTheElements();

    if (clicked) {

      gsap.to(webGiViewer, { x: 0, duration: 0.5 });
      gsap.to(plusButton, { opacity: 1, cursor: "pointer", duration: 0.5, delay: 0.5 });
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

      setClicked(false);
    }
  };

  const getTheElements = () => {
    webGiViewer = document.getElementById("webgi-viewer");
    driverOneElement = document.getElementById("driver-one");
    plusButton = document.getElementById(`plus-button${props.number}`);
    slidableDriverInfo = document.getElementById(`slidable-driver-info${props.number}`);
    crossClose = document.getElementById(`cross-close${props.number}`);
    driverInsights = document.getElementById("driver-insights");
    headerExperience = document.getElementById("header-experience");

    buttonTitle1 = document.getElementById("button-title1");

    driverInsights = document.getElementById("driver-insights");
    buttonTitle2 = document.getElementById("button-title2");

    driverOneFunctions = document.getElementById("driverone-functions");
    buttonTitle3 = document.getElementById("button-title3");
  }

  useEffect(() => {
    window.addEventListener("scroll", closeFunction);

    return () => {
      window.removeEventListener("scroll", closeFunction);
    };
  }, [clicked]);

  return (
    <div key={props.number} className="w-full h-full">
      <div className={`absolute w-full h-full ${props.right} ${props.top}`}>
        <div className="flex flex-row z-1 items-center">  {/* Updated this line */}
          <div
            className={`flex items-center justify-center w-24 h-24 relative cursor-pointer z-1 opacity-0 plus-button${props.number}`}
            id={`plus-button${props.number}`}
            onClick={handleClick}
            key={props.number}
          >
            <Image
              src={"/circle_outside_plus.svg"}
              width={200}
              height={200}
              alt="a rotating circle"
              className="relative animate-spin"
            />
            <Image
              src={"/icon_button_driverv2.svg"}
              width={50}
              height={50}
              alt="matec logo, it represents two wings"
              className="absolute"
            />
          </div>
          <h2 className={`z-[200] relative ml-4 ${props.titlesize}`} id={`button-title${props.number}`}>
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PlusButton;
