import React from "react";
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

const Container = styled.div`
height: 100vh;
position: relative;
  z-index: 13;
  background-color: transparent;
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 13;

  background-color: "#DBDBDB";
`;
const Modelos = styled.div`
  width: 100%;
  height: 100%;
  top:4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 2rem;

`;

const ModelsInteractive = () => {
  const sectionRef = useRef(null);
  const refModel = useRef(null);

  const { t, i18n } = useTranslation();

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    console.log("cargando modelos draggables")
  }, [])
  

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `#8C8C8C`;
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
          <IndicatorText>Check our solutions</IndicatorText>
          <CrossBeltModelCanvas/>

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
{/*           <SubTitle>(BHS)</SubTitle>
 */}          {/* <Title>Baggage Handling System</Title>
          <SubTitle>Contactanos</SubTitle> */}
          <ButtonContainer>
            <Btn>COMPRAR</Btn>
            <BtnLink href="#">CONOCER MÁS &#x2192;</BtnLink>
          </ButtonContainer>
        </Details>
      </Section>
    </Container>
    </I18nextProvider>

  );
};

export default ModelsInteractive;
