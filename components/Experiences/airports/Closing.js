// components
import ServiceSlider from '@/components/ServiceSlider';


const Closing = () => {
    return (
        <div className='h-full bg-black pt-10 flex items-center'>
            <div className='container mx-auto z-[11]'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/* text */}
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <h2
                            className='h2 xl:mt-8 text-[160%] pb-[1%]'
                        >
                            Reclamo de Equipaje de Entrada: Tu Cierre Perfecto
                            <span className='text-accent'>.</span>
                        </h2>
                        <p
                            className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'
                        >
                            En el área de reclamo de equipaje de entrada, MATEC sigue siendo tu protector, asegurando un reencuentro seguro entre los pasajeros y sus pertenencias. Aquí, la atención meticulosa a los detalles es nuestra especialidad. Nuestro equipo trabaja incansablemente para garantizar que cada pieza de equipaje llegue a su dueño, completando así un viaje sin preocupaciones y lleno de motivos para sonreír.
                        </p>
                        <p
                            className='mb-4 mx-auto max-w-[80%] lg:mx-0 text-[90%]'
                        >
                            Nuestras soluciones para sistemas de llegada ofrecen operaciones limpias y rápidas. Se integran fácilmente con sistemas de seguridad de vanguardia, permitiendo a los aeropuertos innovar y crecer de manera sostenible, al tiempo que brindan un servicio de llegada excepcional a los pasajeros. Dentro del conjunto de soluciones del BHS de llegadas, encontrarás:
                        </p>
                    </div>

                    {/* slider */}
                    <div
                        className='w-full xl:max-w-[65%]'
                    >
                        <ServiceSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Closing;
