import React, { useState } from 'react';
import Modal from '../../Dashboard/Modal';
import TablaDetallePedido from '../Pedidos/TablaDetallePedido';

function ModalDetallesPedido() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <span onClick={openModal} className="cursor-pointer font-medium text-purple-600 dark:text-blue-500 hover:underline">
        ver detalle
      </span>
      <Modal title="Detalle de Pedido #001" button="Cerrar" isOpen={isModalOpen} setIsOpen={setModalOpen}>
        <TablaDetallePedido />
      </Modal>
    </>
  );
}
export default ModalDetallesPedido;
