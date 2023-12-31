/* eslint-disable react-hooks/exhadriverOneElementvustive-deps */
'use client'
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import styled from "styled-components";
import {i18n as i18nfile} from "../../i18n";



const Section = styled.section`
height: 100vh;
position: relative;
  z-index: 12;
  background-color: transparent;
`;

const V1 = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
  
`;

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;

  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const V3 = styled.video`
  position: absolute;
  top: 60%;
  right: 10%;
  width: 30%;
  height: auto;

  z-index: 1;

`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`;

const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 1;
  text-transform: capitalize;
  color:black;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;

const GaleryAirports = () => {
  const { t, i18n } = useTranslation();

  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
/* 
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    }); */

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <I18nextProvider i18n={i18nfile}>

    <Section ref={sectionRef}>
      
      <V1 ref={videoRef1} src={'videos/bhs.mp4'} type="video/mp4" autoPlay muted loop />
      <V2 ref={videoRef2} src={'videos/corporativo2.mp4'} type="video/mp4" autoPlay muted loop />
      <V3 ref={videoRef3} src={'videos/bhs3d.mp4'} type="video/mp4" autoPlay muted loop />

      <TitleContainer ref={titleRef}>
        <Title>Conoce MATEC</Title>
        <Title>Nuestras</Title>
        <Title>Soluciones</Title>
      </TitleContainer>
    </Section>
    </I18nextProvider>

  );
};

export default GaleryAirports;
