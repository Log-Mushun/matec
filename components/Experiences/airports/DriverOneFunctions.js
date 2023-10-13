import React, { useRef, useEffect } from 'react';
import FunctionsText from "./FunctionsText";
import VideoComponent from "@/components/VideoComponent";
import { motion } from "framer-motion"

const DriverOneFunctions = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && containerRef.current) {
      // Obtén la altura del video
      const videoHeight = videoRef.current.offsetHeight;

      // Establece la altura del contenedor principal según la altura del video
      containerRef.current.style.height = `${videoHeight}px`;
    }
  }, []);

  return (
    <div className="text-right pr-40 relative" id='driverone-functions' ref={containerRef}>
      <FunctionsText />
      <div>
        <video
          autoPlay
          loop
          muted
          className="top-0 w-screen absolute object-fill z-[11]"
          ref={videoRef}
        >
          <source src='/videos/4cbra.mp4' type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  )
}

export default DriverOneFunctions;
