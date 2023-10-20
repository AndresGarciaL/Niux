import React, { useState } from 'react';
import Editar_Ticket from '../Components/Dashboard/Tickets/Editar_Ticket';



const CrearTicket_Dash = () => {

  return (
    <div className="bg-white shadow-md mb-5 px-4 py-8 md:items-start md:justify-start gap-10 grid grid-cols-2">
          <Editar_Ticket/>
          </div>
  );
};

export default CrearTicket_Dash;
