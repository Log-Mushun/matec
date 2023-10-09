import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CrossBeltModel from "./CrossBeltModel";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";
import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../i18n";
import CrossBeltModelCanvas from "./CrossBeltModelCanvas";
import PlusButton from "../PlusButton";
import TitleAux from "../TitleAux";
import CVRAModelCanvas from "./CVRAModelCanvas";
import MakeupModelCanvas from "./MakeupModelCanvas";

const Container = styled.div`
height: 100vh;
position: relative;
  z-index:12;
  background-color: transparent;
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index:200;
`;
const Modelos = styled.div`
  width: 100%;
  height: 90%;
  top:4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:200;
  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  border: 1px solid var(--dark);
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: grey;
  border-radius: 24px;
  padding-top:1rem;
  padding-right:1rem;
  padding-left:1rem;

  z-index: 100000000;
  opacity:0.8;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Btn = styled.button`
  width: 100%;
  margin: 0;
  padding:0.2rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  border: none;
  outline: none;
  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;
  z
  opacity: 0.9;
  transition: opacity 0.2s ease, filter 0.2s ease; /* Agregar transiciones para opacidad y filtro */

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  /* Agregar estilos para el botón activo */
  ${props =>
    props.active &&
    `
    background-color: black;
    color: white;
    opacity: 1;
    filter: blur(0); /* Eliminar el efecto de desenfoque cuando está activo */
    transform: translateY(0); /* Eliminar el desplazamiento */
  `}
`;


const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 2rem;

`;

const ModelsInteractive = () => {
  const sectionRef = useRef(null);
  const refModel = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };
  const { t, i18n } = useTranslation();

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    console.log("cargando modelos draggables")
  }, [])
  

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `#134579`;
  }, [currentColor]);

  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };
    changeColorContext(colorObj);
  };

  return (
    <I18nextProvider i18n={i18nfile}>

    <Container>
      <Section ref={sectionRef}>
        <Modelos>
        <TitleAux number={3}
              
              title={t("visor-modelos-title")}
              titlesize='text-[4.5vh]'/>
          {activeTab === 0 ? <CrossBeltModelCanvas /> : null}
          {activeTab === 1 ? <CVRAModelCanvas /> : null}
          {activeTab === 2 ? <MakeupModelCanvas /> : null}

          {/* <Colors>
            <Color
              color="#9BB5CE"
              onClick={() =>
                updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")
              }
            />
            <Color
              color="#F9E5C9"
              onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")}
            />
            <Color
              color="#505F4E"
              onClick={() =>
                updateColor("#505F4E", "Alpine Green", "80, 95, 78")
              }
            />
            <Color
              color="#574f6f"
              onClick={() =>
                updateColor("#574f6f", "Deep Purple", "87, 79, 111")
              }
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}
            />
            <Color
              color="#215E7C"
              onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}
            />
          </Colors> */}
        </Modelos>

        <Details>

          <ButtonContainer>
          <Btn active={activeTab === 0} onClick={() => handleTabClick(0)}>CROOSBELT SORT</Btn>
          <Btn active={activeTab === 1} onClick={() => handleTabClick(1)}>CVRA</Btn>
          <Btn active={activeTab === 2} onClick={() => handleTabClick(2)}>MAKEUP</Btn>
          </ButtonContainer>
        </Details>
      </Section>
    </Container>
    </I18nextProvider>

  );
};

export default ModelsInteractive;
