import React, { useState } from 'react';
import { RiTicketLine, RiArrowRightSLine, RiAddFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa6';
import DatePickers from '../DatePickers';
import { Label } from 'flowbite-react';
import { Select, initTE } from "tw-elements";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DynamicSelect from './Selects_CrearTickets/DynamicSelect';



initTE({ Select });


const FormTickets = () => {
  const statusOptions = [
    <span><RiTicketLine /> Nuevo</span>,
    <span><RiTicketLine /> En proceso</span>,
    'En espera',
    'Resuelto',
    'Cerrado'
  ];
  const options = ['Solicitud', 'Incidencia'];
  const [showTickets, setshowTickets] = useState(true);
  const [showParticipants, setshowParticipants] = useState(false);
  return (
    <div className=''>
      <div className='bg-gray-200 borde rounded-md'>
      <button 
  onClick={() => setshowTickets(!showTickets)} 
  className={`w-full h-full flex items-center justify-between py-2 px-4 rounded-md hover:text-white hover:bg-purple-400 transition-colors font-poppins ${showTickets ? 'bg-purple-600 text-white' : 'bg-gray-200'} focus:outline-none`}
>
  <span className="flex items-center gap-4">
    <RiTicketLine /> Ticket
  </span>
  <RiArrowRightSLine className={`mt-1 ${showTickets && 'rotate-90'} transition-all`} />
</button>

      {/* INICIO FORM */}
      <div className='bg-gray-100'>
      <ul className={` ${showTickets ? 'h[700px]' : 'h-0'} overflow-y-hidden transition-all`}>
        {/* FECHA TICKET */}
        <li>
          <div className="font-poppins pr-2 m-5 ">
            <Label htmlFor="fecha" value="Fecha de apertura" className="mb-5 text-lg" />
            <DatePickers />
          </div>
        </li>

        <DynamicSelect label="Tipo" size={"2"} options={['Solicitud','Incidencia']} />
        <DynamicSelect label="Categoría" size={"5"} options={['Servicio soporte remoto', 'Servicio Mantenimiento correctivo PC', 'Venta Memoria RAM', 'Servicio Mantenimiento CCTV','Servicio Mantenimiento CCTV', 'Servicio Mantenimiento CCTV']} />
        <DynamicSelect label="Estado" size={"5"} options={statusOptions} />
        <DynamicSelect label="Ubicación" size={"5"} options={['Niux','Firenow Solutions', 'Publico en General', 'Mexleasing', 'Hotel Villas del Palmar', 'Mexleasing Queretaro']} />

      </ul>
      </div>
      </div>

      <div className='bg-gray-200  rounded-lg'>
      <button 
  onClick={() => setshowParticipants(!showParticipants)} 
  className={`w-full h-full flex items-center justify-between py-2 px-4 rounded-md hover:text-white hover:bg-purple-400 transition-colors font-poppins ${showParticipants ? 'bg-purple-600 text-white' : 'bg-gray-200'} focus:outline-none`}
>
  <span className="flex items-center gap-4">
    <FaUsers /> Participantes
  </span>
  <RiArrowRightSLine className={`mt-1 ${showParticipants && 'rotate-90'} transition-all`} />
</button>

      {/* INICIO FORM */}
      <div className='bg-gray-100'>
      <ul className={` ${showParticipants ? 'h[700px]' : 'h-0'} overflow-y-hidden transition-all`}>

      <DynamicSelect label="Solicitante" size={"5"} options={['Fidencio Garcia Lopez', 'Omar Caballero', 'Mirian Poot Poot','Juan Diego Mendoza', 'Lorena Hernandez']} />
      <DynamicSelect label="Observador" size={"5"} options={['Fidencio Garcia Lopez', 'Omar Caballero', 'Mirian Poot Poot','Juan Diego Mendoza', 'Lorena Hernandez']} />
      <DynamicSelect label="Técnico" size={"5"} options={['Fidencio Garcia Lopez', 'Omar Caballero', 'Mirian Poot Poot','Juan Diego Mendoza', 'Lorena Hernandez']} />     </ul>
      </div>
      </div>
     
     
    </div>
  );
};

export default FormTickets;
