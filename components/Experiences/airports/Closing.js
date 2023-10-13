import React, { useRef, useEffect } from 'react';
import ServiceSlider from '@/components/ServiceSlider';
import { useState } from 'react';
import { I18nextProvider, useTranslation } from "react-i18next";
import { i18n as i18nfile } from "@/i18n";

const Closing = () => {
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && containerRef.current) {
      // Obtén la altura del video
      const videoHeight = videoRef.current.offsetHeight;

      // Establece la altura del contenedor según la altura del video
      containerRef.current.style.height = `${videoHeight}px`;
    }
  }, []);

  return (
    <div className="relative" id="closing">
      <video
        autoPlay
        loop
        muted
        className="w-screen z-[11] object-fill"
      >
        <source src='/videos/8checkout.mp4' type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default Closing;
