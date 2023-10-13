import React, { useRef, useEffect } from 'react';
import FunctionsText from "./FunctionsText";
import VideoComponent from "@/components/VideoComponent";
import { motion } from "framer-motion"

const DriverOneFunctions = () => {

  return (
    <div className="relative" id="driverone-functions">
      <FunctionsText/>
      <video
        autoPlay
        loop
        muted
        className="w-screen z-[11] object-fill"
      >
        <source src='/videos/4cbra.mp4' type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  )
}

export default DriverOneFunctions;
