import Breadcrums from "./Breadcrums";
import Navbar from "./Navbar";
import {  useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { IoLogoElectron } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { GiAxolotl } from "react-icons/gi";
import {BsQuestion } from "react-icons/bs";




function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoMensaje: "",
    asunto: "",
    mensaje: "",
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías procesar el formData, como enviarlo a un servidor
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <Breadcrums />
     
      <div className="relative w-[100%] h-[400px]">

        <img
          src="../../public/Images/img_contacto_niux.png"
          alt="Fondo de contacto"
          className="w-[100%] h-[400px] "
        />

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-[100%] h-[400px] z-10 space-y-8">
          <h1 className="text-6xl font-bold text-white h-[100px] capitalize">
            ¡Contactate con nosotros!
          </h1>
          <div className="flex space-x-16 ">
            <span className="text-3xl text-white">¿Necesitas ayuda?</span>
            <span className="text-3xl text-white">¡Contáctanos hoy!</span>
            <span className="text-3xl text-white">
              Comunícate con nuestro equipo
            </span>
          </div>
        </div>
       
      </div>
      <div className="sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-5">
        <div className=" col-span-3 mt-4">
          <h1 className="h-[75.57px]  text-black text-[57px] font-bold text-center mb-4 italic">
            Ponerse en contacto
          </h1>
          <div className=" bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-200 via-fuchsia-200 to-indigo-200 border-[5px] border-purple-300 mt-4 ml-4 mr-9 p-7 pr-10 rounded-md">
            <p className=" font-mono font-semibold text-2xl mb-5 text-gray-800">
              Por favor complete el formulario rápido y nos comunicaremos con la
              velocidad del rayo.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 ">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleInputChange}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200 border-[2px] drop-shadow-md hover:drop-shadow-xl "
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200 border-[2px] drop-shadow-md hover:drop-shadow-xl"
                  placeholder="Correo Electrónico"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Celular/Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  onChange={handleInputChange}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200 border-[2px] drop-shadow-md hover:drop-shadow-xl"
                  placeholder="Celular/Teléfono"
                />
              </div>
              <div className="mb-4">
                <span className="text-gray-700 font-semibold italic">
                  Tipo de mensaje
                </span>
                <div className="mt-2 italic">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio "
                      name="tipoMensaje"
                      value="Sugerencia"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2 ">Sugerencia</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="tipoMensaje"
                      value="Soporte"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2">Soporte</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="tipoMensaje"
                      value="Ventas"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2">Ventas</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="tipoMensaje"
                      value="Dudas"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2">Dudas</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  onChange={handleInputChange}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200 border-[2px] drop-shadow-md hover:drop-shadow-xl"
                  placeholder="Asunto"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  onChange={handleInputChange}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200 border-[2px] drop-shadow-md hover:drop-shadow-xl"
                  placeholder="Mensaje"
                  rows="4"
                ></textarea>
              </div>
              <div className="mb-4 bg-white border-[2px] border-blue-200 p-2 drop-shadow-md hover:drop-shadow-xl rounded">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Adjuntar Archivo ( pdf, jpg, png, xls, xlsx, doc, docx )
                </label>
                <input type="file" name="archivo" />
              </div>
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className=" bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-[2px] border-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" col-span-2 col">
          <div className="   flex justify-center">
            <h1 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300 via-fuchsia-300 to-purple-300  mt-28 w-150 text-center rounded-lg font-bold text-3xl p-2 ">
              Conéctate con nosotros
            </h1>
          </div>
          <div className=" text-center mt-7">
            <p className=" text-xl font-poppins">
              Para soporte o cualquier pregunta, envíenos un correo electrónico
              a:{" "}
            </p>
            <p className=" text-blue-500 text-xl">niuxtech@hotmail.com</p>
            <div className="bg-purple-500 h-1 mt-4 mb-4 rounded"></div>
            <div className="flex justify-center gap-4">
              <button>
                <AiOutlineArrowRight size={32} className=" text-blue-500" />
              </button>
              <h1 className=" font-semibold text-2xl">Teléfono</h1>
              <button>
                <BsWhatsapp
                  size={32}
                  className=" text-white bg-green-400 rounded-2xl"
                />
              </button>
            </div>
            <h1 className="text-xl font-poppins mt-2">+52 9985748347</h1>
            <div className="bg-purple-500 h-1 mt-4 mb-4 rounded"></div>
            <div className="flex justify-center gap-4">
              <button>
                <AiOutlineArrowRight size={32} className=" text-blue-500" />
              </button>
              <h1 className=" font-semibold text-2xl">Niux México</h1>
              <img
                src="../../public/Images/mexico_contacto.png"
                alt="MX"
                className=" h-9 w-10"
              />
            </div>
            <p className="text-xl font-poppins mt-2">
              723 Avenida 20 de Noviembre, Suite 101, Cancún, Quintana Roo,
              México, 77500
            </p>
            <div className="bg-purple-500 h-1 mt-4 mb-4 rounded"></div>
            <div className="flex justify-center gap-4">
              <button>
                <AiOutlineArrowRight size={32} className=" text-blue-500" />
              </button>
              <h1 className=" font-semibold text-2xl">Horario de Atención</h1>
              <button>
                <MdOutlineSupportAgent size={32} />
              </button>
            </div>
            <p className="text-xl font-poppins mt-2">
              Nuestro equipo está aquí para ayudarte durante los siguientes
              horarios:
            </p>
            <div className=" flex  justify-center mt-2">
            <ul className="list-disc pl-5 text-left">
              <li className="mb-2 text-xl font-poppins">Lunes a Viernes: 9:00 AM - 6:00 PM</li>
              <li className="mb-2 text-xl font-poppins">Sábados: 10:00 AM - 2:00 PM</li>
              <li className="mb-2 text-xl font-poppins">Domingos: Cerrado</li>
            </ul>
            </div>
            <div className="bg-purple-500 h-1 mt-4 mb-4 rounded"></div>
            <div className=" flex justify-center gap-5 mt-6">
                <GiAxolotl size={100} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl text-white transition ease-in duration-300 hover:scale-110"/>
                <GiTechnoHeart size={100} className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl text-white transition ease-in duration-300 hover:scale-110"/>
                <IoLogoElectron size={100} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl text-white transition ease-in duration-300 hover:scale-110"/>
                <GiAutoRepair size={100} className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl text-white transition ease-in duration-300 hover:scale-110"/>
            </div>

          </div>
        </div>
      </div>

      <div className=" bg-white flex justify-center pt-4">
       <div className=" bg-purple-100 mt-4 flex justify-center w-[85%] pt-5 ">
          <div className="bg-white w-[85%] flex justify-center "> 
            <h1 className=" bg-purple-500 text-white p-2  pl-4 font-semibold text-2xl rounded-l-md mt-3 mb-3">
            Preguntas Frecuentes
            </h1>
            <BsQuestion size={48} className=" bg-purple-500 text-white rounded-r-md mt-3 mb-3"/>
          </div>
        </div>
      </div>

       <div className=" bg-white flex justify-center">
        <div className="flex justify-center bg-purple-100 w-[85%]">
        <div className=" bg-white w-[85%]  py-5 xl:pl-[120px] 2xl:pl-64 lg:pl-[80px] md:pl-[40px] ">
          <div className=" bg-white flex gap-3  "> 
          <AiOutlineArrowRight size={48} className=" text-purple-600" />
            <h1 className=" bg-white p-2  font-semibold text-xl rounded-md border-[2px] border-purple-600 transition ease-in duration-300 hover:scale-105">
            ¿Cuáles son sus opciones de envío y plazos de entrega?
            </h1>
          </div>
        </div>
        </div>
       </div>

         <div className=" bg-white flex justify-center">
        <div className="flex justify-center bg-purple-100 w-[85%]">
        <div className=" bg-white w-[85%]  py-5 xl:pl-[120px] 2xl:pl-64 lg:pl-[80px] md:pl-[40px] ">
          <div className=" bg-white flex gap-3  "> 
          <AiOutlineArrowRight size={48} className=" text-purple-600" />
            <h1 className=" bg-white p-2  font-semibold text-xl rounded-md border-[2px] border-purple-600 transition ease-in duration-300 hover:scale-105">
            ¿Puedo cancelar o modificar un pedido después de realizarlo?
            </h1>
          </div>
        </div>
        </div>
         </div>

        <div className=" bg-white flex justify-center">
        <div className="flex justify-center bg-purple-100 w-[85%]">
        <div className=" bg-white w-[85%]  py-5 xl:pl-[120px] 2xl:pl-64 lg:pl-[80px] md:pl-[40px]  ">
          <div className=" bg-white flex gap-3  "> 
          <AiOutlineArrowRight size={48} className=" text-purple-600" />
            <h1 className=" bg-white p-2  font-semibold text-xl rounded-md border-[2px] border-purple-600 transition ease-in duration-300 hover:scale-105">
            ¿Ofrecen descuentos o promociones especiales?
            </h1>
          </div>
        </div>
        </div>
        </div>


        <div className=" bg-white flex justify-center pb-8">
        <div className="flex justify-center  bg-purple-100 w-[85%]">
        <div className=" bg-white w-[85%] xl:pl-[120px] 2xl:pl-64 lg:pl-[80px] md:pl-[40px] py-5 mb-5">
          <div className=" bg-white flex gap-3  "> 
          <AiOutlineArrowRight size={48} className=" text-purple-600" />
            <h1 className=" bg-white p-2  font-semibold text-xl rounded-md border-[2px] border-purple-600 transition ease-in duration-300 hover:scale-105">
            ¿Cómo realizo una compra en su sitio web?
            </h1>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}
export default Contacto;
