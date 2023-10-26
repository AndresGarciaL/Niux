import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormEditarPedido = () => {
     return (
      <div className="w-full mb-8">
      <form>
          <div className="flex justify-between mb-4 items-center">
              <label className='text-lg font-bold font-poppins'>ID:</label>
              <input value={"001"} type="text" className="w-1/2 py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400" placeholder="ID del pedido" />
          </div>
          <div className="flex justify-between mb-4 items-center">
              <label className='text-lg font-bold font-poppins'>ESTADO:</label>
              <select className="w-1/2 py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400">
             <option className='hover:bg-purple-400 hover:text-white' value="completado">Completado</option>
             <option value="enEspera">En Espera</option>
             <option value="enProceso">En Proceso</option>
             <option value="cancelado">Cancelado</option>
           </select>
          </div>
          <div className="flex justify-between mb-4 items-center">
              <label className='text-lg font-bold font-poppins'>TOTAL:</label>
              <input type="text" className="w-1/2 py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400" placeholder="Total del pedido" />
          </div>
          <div className="flex justify-between mb-6 items-center">
              <label className='text-lg font-bold font-poppins'>FECHA DE PEDIDO:</label>
              <input type="date" className="w-1/2 py-2 px-4 rounded-lg outline-purple-600 border-[2px] border-purple-400" />
          </div>
          
      </form>
  </div>
  
  
    );
};

export default FormEditarPedido;
