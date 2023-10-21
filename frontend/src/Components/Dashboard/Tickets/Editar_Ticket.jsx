import React from 'react';
import TynnyComponent from './TynnyComponent';

const Editar_Ticket = () => {
    return (
        <div className="bg-white p-4 rounded-md w-200 shadow-md">
            <div className="flex items-center justify-between">
                <div className="font-semibold text-xl">Garcia Andres</div>
                <div className="text-gray-600">Ticket se agregará a la entidad <span className="font-semibold">Root entity</span></div>
            </div>

            <div className="mt-4">
                <label htmlFor="titulo" className="block text-gray-600 font-medium mb-2">Titulo *</label>
                <input type="text" id="titulo" className="w-full p-2 border rounded-md" />
            </div>

            <div className="mt-4">
                <label htmlFor="titulo" className="block text-gray-600 font-medium mb-2">Descripción *</label>
                <TynnyComponent className="w-full p-2 border rounded-md"/>
            </div>

            

            <div className="mt-4 flex items-center">
                <div className="text-gray-600 mr-2">Archivo(s) (512 MB máximo)</div>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md">Elegir archivos</button>
            </div>
        </div>
    );
};

export default Editar_Ticket;
