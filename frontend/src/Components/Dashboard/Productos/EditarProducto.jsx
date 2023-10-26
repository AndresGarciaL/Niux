import React, { useEffect, useState } from 'react';
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";


const EditarUsuario = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div role="status" className="text-center flex loading-indicator">
            <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}{' '}
      {
       <form>
       <div className="flex items-center mb-8">
         <div className="w-1/4">
           <p>Imagen de Producto</p>
         </div>
         <div className="flex-1">
           <div className="relative mb-2">
             <img
               src="../../../../public/Images/msi3060.jpg"
               className="w-40 h-40 object-cover rounded-lg"
             />
             <label
               htmlFor="avatar"
               className="absolute bg-purple-400 text-white p-2 rounded-full hover:cursor-pointer -top-2 left-36"
             >
               <RiEdit2Line />
             </label>
             <input type="file" id="avatar" className="hidden" />
           </div>
           <p className="text-gray-500 text-sm">
             Allowed file types: png, jpg, jpeg.
           </p>
         </div>
       </div>
       <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
         <div className="w-full md:w-1/4">
           <p>
             ID <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1 flex items-center gap-4">
           <div className="w-full">
             <input
               type="text"
               value={"001"}
               className="w-full py-2 px-4 outline-none rounded-lg bg-white"
               placeholder="Id"
             />
           </div>
         </div>
       </div>
       <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Nombre Producto <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1 flex items-center gap-4">
           <div className="w-full">
             <input
               type="text"
               value={"RTX 3060 Ti"}
               className="w-full py-2 px-4 outline-none rounded-lg bg-white"
               placeholder="Nombre de producto"
             />
           </div>
         </div>
       </div>
       <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Descripción <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1 flex items-center gap-4">
           <div className="w-full">
             <textarea
               type="text"
               value={"Aumento de velocidad de reloj/memoria por determinar 12 gb gddr6 displayport x 3 hdmi x 1 (admite 4k@120hz como se especifica en hdmi 2.1) Fácil de usar Rgb mystic light mystic light te ofrece un control completo de la iluminación rgb para los dispositivos msi y los productos rgb compatibles Dragon center el exclusivo software dragon center de msi te permite supervisar, ajustar y optimizar los productos msi en tiempo real"}
               className="w-full h-40 py-2 px-4 outline-none rounded-lg bg-white"
               placeholder="Descripcion del producto"
             />
           </div>
         </div>
       </div>

       <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Categoria <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1">
           <select className="w-full py-2 px-4 outline-none rounded-lg ">
             <option value="Niux">Tarjeta Grafica</option>
             <option value="Publico en General">Memorias RAM</option>
           </select>
         </div>
       </div>
     
       <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Stock <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1">
           <input
           value={"40"}
             type="text"
             className="w-full py-2 px-4 outline-none rounded-lg bg-white"
             placeholder="Nombre(s)"
           />
         </div>
       </div>
       <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Costo Unitario <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1">
           <input
           value={"$1999"}
             type="text"
             className="w-full py-2 px-4 outline-none rounded-lg bg-white"
             placeholder="Nombre(s)"
           />
         </div>
       </div>

       <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Marca <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1">
           <select className="w-full py-2 px-4 outline-none rounded-lg">
             <option value="Argentina">MSI</option>
             <option value="Colombia">Kingston</option>
           </select>
         </div>
       </div>
       <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
         <div className="w-full md:w-1/4">
           <p>
             Activo <span className="text-red-500">*</span>
           </p>
         </div>
         <div className="flex-1">
           <select className="w-full py-2 px-4 outline-none rounded-lg">
             <option value="Argentina">Si</option>
             <option value="Colombia">No</option>
           </select>
         </div>
       </div>
  
       
       <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
        
                <button type="submit" className="w-[150px]  font-poppins bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                Guardar
              </button>
           
        </div>
     </form>
     
      }
    </div>
   
  );
};

export default EditarUsuario;
