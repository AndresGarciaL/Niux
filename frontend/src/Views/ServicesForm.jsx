import { useState } from 'react';
import useFormStore from '../stores/formStore'
import Navbar from './Navbar';
import Breadcrums from './Breadcrums';
import '../Views/Services'
import { MdOutlineMiscellaneousServices } from "react-icons/md";

export const ServicesForm = () => {
  const getFormState = useFormStore((state) => state.form);



  console.log(getFormState)
  

  //servicio reparacion de productos formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Reparación de dispositivos',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar el formulario, como enviarlo a un servidor.
    // llamada del set del estado global

    console.log(formData);
    // Resetear los campos del formulario a sus valores iniciales
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: 'Reparación de dispositivos',
    });
    
  };
  return (

        <>
        <Navbar/>
        <Breadcrums/>
        <div className={` relative top-0  left-0 right-0 bottom-0 z-0 flex justify-center items-center p-8  inset-0  bg-form`}>
          <div className="relative w-full max-w-2xl">
            {/* Modal content */}
            <div
              className=" bg-white rounded-lg shadow dark:bg-gray-700 pb-4 border border-gray-500
      "
            >
              {/* Modal header */}
              <div className="flex items-center justify-center p-4  border-gray-300 border-b-[2px] rounded-t ">
                <h3 className="text-2xl font-semibold text-gray-900 mr-4 ">Formulario</h3>
                <MdOutlineMiscellaneousServices size={25} className=' text-purple-500'/>
              </div>
              {/* Formulario body */}
              <div className="w-full max-w-md mx-auto mt-10 bg-purple-100">
                <form onSubmit={handleSubmit} className=" shadow-2xl border border-black rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Nombre
                    </label>
                    <input className="shadow appearance-none focus:border-purple-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  border border-gray-400" id="name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Nombre completo " />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Correo
                    </label>
                    <input className="shadow appearance-none focus:border-purple-500 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Teléfono
                    </label>
                    <input className="shadow appearance-none focus:border-purple-500 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Número de teléfono" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                      Asunto
                    </label>
                    <input className="shadow appearance-none focus:border-purple-500 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                      Mensaje
                    </label>
                    <textarea className="shadow appearance-none focus:border-purple-500 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje aquí"></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                      Servicio
                    </label>
                    <input className="shadow appearance-none focus:border-purple-500 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="text" name="service" value={getFormState || "No seleccionado"}   readOnly />
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default ServicesForm;
