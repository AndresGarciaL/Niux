import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import ExportarUsers_Dash from './ExportarUsers_Dash';
import Filtro_Tickets from './Filtro_Tickets';
import { Link } from 'react-router-dom';


const OptionsTickets_Dash = () => {

  return (
    <div className="bg-white shadow-md mb-5 px-4 py-8 flex flex-wrap md:items-start md:justify-start gap-10">
             <Link to="/dashboard/add-ticket">
            <button className="py-2 px-6 text-center text-green-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-green-500/30 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-green-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100">
              + Agregar
            </button>
            </Link>
            <Filtro_Tickets />
            <button className=" flex justify-center items-center py-2 px-6 text-center text-red-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-red-500/30 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-red-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100">
              <RiDeleteBinLine className="mr-1" />
              Eliminar
            </button>
           
            <ExportarUsers_Dash className="mr-1" />
          </div>
  );
};

export default OptionsTickets_Dash;
