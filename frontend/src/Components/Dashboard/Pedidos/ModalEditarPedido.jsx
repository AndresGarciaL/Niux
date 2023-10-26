import React, { useState } from 'react';
import Modal from '../../Dashboard/Modal';
import FormEditarPedido from './FormEditarPedido';

function ModalEditarPedido() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <span onClick={openModal} className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Editar
      </span>
      <Modal title="Editar Pedido #001" button="Guardar" isOpen={isModalOpen} setIsOpen={setModalOpen}>
        <FormEditarPedido />
      </Modal>
    </>
  );
}
export default ModalEditarPedido;
