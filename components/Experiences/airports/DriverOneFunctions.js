import FunctionsText from "./FunctionsText";
import VideoComponent from "@/components/VideoComponent";
import { motion } from "framer-motion"

const DriverOneFunctions = () => {
  return (
    <div className="h-screen text-right pr-40 relative mb-20" id='driverone-functions'>
      <FunctionsText />
      <div>
        <video
          autoPlay
          loop
          muted
          className="pt-16 w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11]"
        >
          <source src='/videos/4cbra.mp4' type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  )
}

export default DriverOneFunctions;