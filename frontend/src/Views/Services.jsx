import Navbar from './Navbar';
import '../Styles/Services.css';
import Breadcrums from './Breadcrums';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFormStore from '../stores/formStore';
import { CgDetailsMore } from 'react-icons/cg';

export const Services = () => {
  //servicio reparación de productos informacion
  const [ReparacionProducto, setReparacionProducto] = useState(false);
  const [bgblack, setBgblack] = useState(false); // Definimos el estado inicial como falso (no visible)
  const toggleModal = () => {
    setReparacionProducto(!ReparacionProducto);
    setBgblack(!bgblack);
  };
  //servicio mantenimiento preventivo informacion
  const [MantenimientoPreventivo, setMantenimientoPreventivo] = useState(false);
  const ChangeMP = () => {
    setMantenimientoPreventivo(!MantenimientoPreventivo);
    setBgblack(!bgblack);
  };
 //servicio instalacion y configuracion
 const [ConfiguracionInstalacion, setConfiguracionInstalacion] = useState(false);
  const ChangeCI = () => {
    setConfiguracionInstalacion(!ConfiguracionInstalacion);
    setBgblack(!bgblack);
  };
   //recuperacion de datos
 const [RecuperacionDatos, setRecuperacionDatos] = useState(false);
 const ChangeRD = () => {
   setRecuperacionDatos(!RecuperacionDatos);
   setBgblack(!bgblack);
 };
    //seguridad cibernetica
    const [SeguridadCibernetica, setSeguridadCibernetica] = useState(false);
    const ChangeSC = () => {
      setSeguridadCibernetica(!SeguridadCibernetica);
      setBgblack(!bgblack);
    };
     //configuracion de redes
     const [ConfiguracionRedes, setConfiguracionRedes] = useState(false);
     const ChangeCR = () => {
       setConfiguracionRedes(!ConfiguracionRedes);
       setBgblack(!bgblack);
     };

  //formstore reparacion de dispositivos
  const setFormData = useFormStore((state) => state.setForm);

  const GoFormReparacionProducto = () => {
    setFormData('Reparación de dispositivos');
    console.log(setFormData);
  };
  //formstore mantenimiento preventivo
  const GoFormMantenimientoPreventivo = () => {
    setFormData('Mantenimiento Preventivo');
  };
  //formstore instalacion y configuracion
  const GoFormInstalacionConfiguracion = () => {
    setFormData('Instalación y Configuración');
  };
  //formstore recuperacion de datos
  const GoFormRecuperacionDatos = () => {
    setFormData('Recuperación de Datos');
  };
  //formstore seguridad cibernetica
  const GoFormSeguridadCibernetica = () => {
    setFormData('Seguridad Cibernética');
  };
  //formstore configuracion de redes
  const GoFormConfiguracionRedes = () => {
    setFormData('Configuración de Redes');
  };

  return (
    <>
      <Navbar />
      <Breadcrums />
      <div
        className={`relative left-0 top-0 flex justify-center items-center   outline-none focus:outline-none  pb-8 md:px-10 px-8 
          `}
        id="modal-id"
      >
        <div className={`absolute bg-black  ${bgblack ? 'opacity-80 z-10' : 'opacity-30'} inset-0 `} />

        <div className="relative min-h-screen flex flex-col items-center justify-center  ">
          <h1 className=" text-purple-50 text-5xl font-bold mb-6 mt-4">Nuestros Servicios</h1>
          <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <div className="flex ">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300 w-full ">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-uno.jpg" alt="Just a computer" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Premium</div>
                      <h2 className="flex-auto text-lg font-medium">Reparación de Dispositivos</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Cochin,KL</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={toggleModal} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormReparacionProducto} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-dos.jpg.png" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Recomendado</div>
                      <h2 className="flex-auto text-lg font-medium">Mantenimiento Preventivo</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Mumbai,MH</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={ChangeMP} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormMantenimientoPreventivo} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-tresjpg.png" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Premium</div>
                      <h2 className="flex-auto text-lg font-medium">Instalación y Configuración</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Cochin,KL</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={ChangeCI} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormInstalacionConfiguracion} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-cuatro.jpg" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Premium</div>
                      <h2 className="flex-auto text-lg font-medium">Recuperación de Datos</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Cochin,KL</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={ChangeRD} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormRecuperacionDatos} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-uno.jpg" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Premium</div>
                      <h2 className="flex-auto text-lg font-medium">Seguridad Cibernética</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Cochin,KL</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={ChangeSC} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormSeguridadCibernetica} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white shadow-md  rounded-3xl p-4 hover:scale-[1.02] transition ease-in duration-300">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="../../public/Images/servicios-uno.jpg" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-purple-700 font-medium ">Premium</div>
                      <h2 className="flex-auto text-lg font-medium">Configuración de Redes</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="">Cochin,KL</p>
                      </div>
                      <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="">05-25-2021</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button onClick={ChangeCR} className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          <CgDetailsMore className=" text-purple-600" size={18} />
                          <span>Leer más</span>
                        </button>
                      </div>
                      <Link to="/services/form">
                        <button onClick={GoFormConfiguracionRedes} className="mb-2 md:mb-0 bg-purple-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-purple-500" type="button" aria-label="like">
                          Adquirir
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reparacion Producto Informacion */}
            {ReparacionProducto ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Reparación de Dispositivos</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={toggleModal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6 ">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                        El servicio de reparación de dispositivos cubre móviles, ordenadores, tablets, consolas y wearables. Se especializa en reparaciones de hardware, como cambio de pantallas o baterías, y software, incluyendo actualizaciones y eliminación de malware. Es esencial ofrecer un diagnóstico transparente, utilizar recambios de alta calidad y garantizar la seguridad de la información
                        del cliente.
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">La capacitación adecuada del personal y una garantía post-reparación fortalecen la confianza del cliente y aseguran la calidad del servicio ofrecido.</p>
                    </div>
                    <div className=' flex justify-center '>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4 mt-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={toggleModal}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={toggleModal}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
             {/* Mantenimiento producto Informacion */}
             {MantenimientoPreventivo ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Mantenimiento Preventivo</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={ChangeMP}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                      Nuestro servicio de mantenimiento preventivo es la solución. Llevamos a cabo una limpieza exhaustiva de componentes, actualizamos firmware y software, y calibramos para asegurar su óptimo desempeño. Además, revisamos sistemas de refrigeración, conexiones y baterías para prevenir fallos. 
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">Invirtiendo en prevención, no sólo prolongas la vida de tus equipos, sino que aseguras un rendimiento eficiente día tras día. Dale a tus dispositivos el cuidado experto que merecen.</p>
                    </div>
                    <div className=' flex justify-center'>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ChangeMP}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={ChangeMP}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
             {/* Instalacion y configuracion */}
             {ConfiguracionInstalacion ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Instalación y Configuración</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={ChangeCI}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                      Permítenos facilitarte la vida. Nuestro servicio de instalación y configuración garantiza una puesta en marcha rápida y eficiente. Desde la conexión física hasta la configuración de software, nos encargamos de todo para que tu equipo funcione a la perfección desde el primer encendido.
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">Además, personalizamos ajustes según tus necesidades, asegurando que obtengas la máxima funcionalidad y comodidad. Olvídate de complicaciones y manuales confusos; confía en expertos y empieza a disfrutar de tu tecnología al instante. </p>
                    </div>
                    <div className=' flex justify-center'>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ChangeCI}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={ChangeCI}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {/*Recuperacion de datos */}
            {RecuperacionDatos ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Recuperación de Datos</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={ChangeRD}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                      ¿Has perdido información valiosa y sientes que todo está perdido? Nuestro servicio de recuperación de datos está aquí para ayudarte. Con técnicas avanzadas y herramientas de vanguardia, nos sumergimos en tus dispositivos para rescatar esa información esencial que creías irrecuperable.
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">Desde fallos de hardware hasta errores de software, enfrentamos una amplia gama de escenarios con altas tasas de éxito. La tranquilidad de saber que tus datos están en manos expertas es inigualable. No dejes tus recuerdos y trabajo valioso en el olvido; permítenos ser el puente hacia tu información perdida.</p>
                    </div>
                    <div className=' flex justify-center'>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ChangeRD}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={ChangeRD}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
             {/*Seguridad cibernetica */}
             {SeguridadCibernetica ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Seguridad Cibernética</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={ChangeSC}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                      ¿Te preocupa la integridad y seguridad de tus datos en el vasto mundo digital? Nuestro servicio de seguridad cibernética es tu fortaleza. Implementamos soluciones robustas para blindar tu infraestructura digital, desde firewalls avanzados hasta sistemas de detección de intrusiones en tiempo real. No solo protegemos contra amenazas actuales, sino que anticipamos y nos adaptamos a las emergentes.
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">En un mundo digital en constante cambio, ser proactivo es esencial. Deja que nuestros expertos custodien tu mundo digital, asegurando que tu negocio y datos personales estén siempre a salvo. </p>
                    </div>
                    <div className=' flex justify-center'>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ChangeSC}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={ChangeSC}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {/*Configuracion de redes */}
            {ConfiguracionRedes ? (
              <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className={`absolute top-0 left-0 right-0 bottom-0 z-10 flex  justify-center items-center p-4   inset-0`}>
                <div className="relative w-full max-w-2xl h-full ">
                  {/* Modal content */}
                  <div
                    className="relative bg-white rounded-lg shadow dark:bg-gray-700
      "
                  >
                    {/* Modal header */}
                    <div className="flex items-center justify-center text-center p-4 border-b rounded-t bg-purple-300">
                      <h3 className="text-2xl font-semibold text-gray-900  text-center">Configuración de Redes</h3>
                      <button type="button" className="text-black bg-transparent border hover:bg-purple-300 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal" onClick={ChangeCR}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">
                      ¿Necesitas que tus dispositivos se comuniquen fluidamente? Nuestro servicio de configuración de redes es la respuesta. Diseñamos e implementamos redes a medida, ya sean cableadas o inalámbricas, asegurando una conectividad rápida y estable. Además, optimizamos la configuración para que se adapte a tus necesidades específicas, garantizando un rendimiento superior y seguridad reforzada. 
                      </p>
                      <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-poppins">No dejes que la lentitud o fallos de conexión obstaculicen tu día a día. Confía en especialistas y transforma tu entorno de red en un ecosistema digital cohesivo y eficiente</p>
                    </div>
                    <div className=' flex justify-center'>
                      <img src="../../public/Images/servicios-uno-ref.jpg.png" className=' w-[500px] h-[350px] rounded hover:shadow-2xl mb-4' alt="" />
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ChangeCR}>
                        I accept
                      </button>
                      <button
                        data-modal-hide="staticModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={ChangeCR}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
