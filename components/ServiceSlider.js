// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    title: 'Sistemas Ergonómicos de Alimentación de Equipaje:',
    description: 'Diseñados para una manipulación segura y eficiente del equipaje.'
  },
  {
    title: 'Integración con Sistemas de Inspección por Rayos X:',
    description: 'Para una inspección efectiva y segura del equipaje.'
  },
  {
    title: 'Sistemas de Re-etiquetado Manual:',
    description: 'Ideal para equipaje en conexión o aquel que requiere inspección adicional.'
  },
  {
    title: 'Sistemas de Identificación y Seguimiento:',
    description: 'Para un seguimiento preciso de cada pieza de equipaje.'
  },
  {
    title: 'Sistemas de Reconciliación de Equipaje (BRS - Baggage Reconciliation System):',
    description: 'Garantizan la correspondencia entre el equipaje y el pasajero.'
  },
  {
    title: 'Carruseles Planos:',
    description: 'Brindan ergonomía y seguridad para los pasajeros.'
  },
  {
    title: 'Carruseles Inclinados:',
    description: 'Permiten una mayor acumulación y funcionalidad.'
  },
];

const ServiceSlider = () => {
  return (
    <div
      className='h-full sm:h-full'
    >
      {serviceData.map((item, index) => {
        return (
          <div key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 z-[30] mb-5 w-[80%]'>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'><h3>
                  {item.title}
                </h3></div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSlider;
