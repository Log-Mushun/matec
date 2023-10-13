import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const videos = [
  '/videos/3atr.mp4',
  '/videos/6mes.mp4',
  '/videos/7makeup.mp4',
  // ... Añade más URLs de video según sea necesario
];

const VideoComponent = (props) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0); // Nuevo estado para la altura del video

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[props.videoIndex];
      videoRef.current.load();
    }
  }, [props.videoIndex]);

  const handleLoad = () => {
    setIsVideoLoaded(true);
    controls.start({ opacity: 1 });

    // Obtener la altura del video y establecerla en el estado
    if (videoRef.current) {
      setVideoHeight(videoRef.current.clientHeight);
    }
  };

  const handleUnload = () => {
    setIsVideoLoaded(false);
  };

  return (
    <>
      <div> {/* Establecer la altura del div */}
        <div className='bg-[#121521] bg-opacity-70 absolute w-[53%] z-[15] top-1/2 transform -translate-y-1/2' style={{ height: videoHeight }} />
        <motion.video
          autoPlay
          loop
          muted
          className="w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11]"
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
    </>
  );
};

export default VideoComponent;
