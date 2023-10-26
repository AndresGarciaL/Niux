import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const EstadoPedido = (props) => {
  const { pedido, text } = props;

  let status = '';
  let textColor = '';

  switch (pedido) {
    case 'espera':
      status = 'bg-yellow-500/40 text-yellow-600';
      textColor = 'text-yellow-500';
      break;
      case 'cancelado':
      status = 'bg-red-700/50 text-red-100';
      textColor = 'text-red-500';
      break;
    case 'enProceso':
      status = 'bg-blue-500/40 text-blue-600';
      textColor = 'text-blue-500';
      break;
    case 'completado':
      status = 'bg-green-500/40 text-green-600';
      textColor = 'text-green-500';
      break;
    
  }

  return (
    <div className='' >
      {/* Estado del pedido*/}
        <p className={`${status} rounded-lg flex flex-col h-18 text-center`} >{text}</p>
      
    </div>
  );
};

export default EstadoPedido;
