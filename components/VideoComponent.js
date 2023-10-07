import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const videos = [
  '/videos/2crossover.mp4',
  '/videos/3atr.mp4',
  '/videos/4cbra.mp4',
  // ... Añade más URLs de video según sea necesario
];

const videos2 = [
  '/videos/5crossbelt.mp4',
  '/videos/6mes.mp4',
  '/videos/7makeup.mp4',
  // ... Añade más URLs de video según sea necesario
];

const VideoComponent = (props) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[props.videoIndex];
      videoRef.current.load();
    }
  }, [props.videoIndex]);

  const handleLoad = () => {
    setIsVideoLoaded(true);
    controls.start({ opacity: 1 }); // Iniciar animación de carga
  };

  const handleUnload = () => {
    setIsVideoLoaded(false);
  };

  return (
    <>
      {props.isFunctions == 1 && (
        <div>
          <motion.video
            autoPlay
            loop
            muted
            className="h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11]"
            ref={videoRef}
            onCanPlay={handleLoad}
            onLoadedMetadata={handleLoad}
            onAbort={handleUnload}
            onError={handleUnload}
            initial={{ opacity: 0 }}
            animate={controls}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <source src={videos[props.videoIndex]} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </motion.video>
          {!isVideoLoaded && <div className="loading-indicator">Cargando video...</div>}
        </div>
      )
      }
      {props.isFunctions == 2 && (
        <div classname="relative">
          <motion.video
            autoPlay
            loop
            muted
            className="flex self-center justify-self-center pl-[50%] w-[50%] h-[300px] z-[11]"
            ref={videoRef}
            onCanPlay={handleLoad}
            onLoadedMetadata={handleLoad}
            onAbort={handleUnload}
            onError={handleUnload}
            initial={{ opacity: 0 }}
            animate={controls}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <source src={videos2[props.videoIndex]} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </motion.video>
          {!isVideoLoaded && <div className="loading-indicator">Cargando video...</div>}
        </div>
      )
      }
    </>
  );
};

export default VideoComponent;
