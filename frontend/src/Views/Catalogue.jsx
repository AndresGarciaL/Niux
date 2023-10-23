
import React, { useState } from 'react';
import { FaTruck, FaShoppingCart } from 'react-icons/fa';
import { BsFilterRight } from 'react-icons/bs';
import SideBar_Catalogue from '../Components/Shop/SideBar_Catalogue';
import Navbar from './Navbar';
import StarsRating from '../Components/Shop/StarsRating';
import OfertasEspeciales from '../Components/Home/OfertasEspeciales';
import Carrusel from '../Components/Home/Carrusel';
import Category_Filters from '../Components/Shop/Category_Filters';

const Catalogue = () => {
  const products = [
    {
      id: 1,
      name: 'Raspberry Pi 4 Model B 8GB de una sola Placa W125890212212',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 15,
      rating: 5,
      shipping: 'Envío gratis',
    },
    {
      id: 2,
      name: 'UltraHD Gaming Monitor 32 Pulgadas Curvo HDR 1000 HDMI DisplayPort USB-C',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 21,
      rating: 5.0,
      shipping: 'Envío gratis',
    },
    {
      id: 3,
      name: 'Teclado Mecánico Cherry MX Retroiluminado RGB USB 2.0',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 300,
      rating: 3.0,
      shipping: 'Envío gratis',
    },

    {
      id: 4,
      name: 'Tarjeta Gráfica NVIDIA GeForce RTX 3080 Ti 12GB GDDR6X PCI-E 4.0',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 100,
      rating: 2.0,
      shipping: 'Envío gratis',
    },
    {
      id: 5,
      name: 'SSD NVMe M.2 1TB PCIe 4.0 3D NAND TLC Velocidad de Lectura 5000MB/s',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 21,
      rating: 2.5,
      shipping: 'Envío gratis',
    },
    {
      id: 6,
      name: 'Procesador AMD Ryzen 9 5950X 16 Núcleos 32 Hilos 4.9GHz Socket AM4',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 31,
      rating: 1.5,
      shipping: 'Envío gratis',
    },
    {
      id: 7,
      name: 'Mouse Gaming Inalámbrico Recargable con Sensor Óptico 16000 DPI RGB',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 71,
      rating: 4.5,
      shipping: 'Envío gratis',
    },
    {
      id: 8,
      name: 'Silla Gaming Ergonómica Ajustable con Reposapiés Masajeador Bluetooth',
      href: '#',
      imageSrc: 'Images/camisa.jpg',
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: '4,999',
      stock: 45,
      rating: 3.9,
      shipping: 'Envío gratis',
    },
  ];
  return (
    <div className="bg-white relative">
      <Navbar />
      <div className="w-full h-64 bg-white overflow-hidden">
        <img src="/Images/banner.jpg" alt="Descripción de la imagen" className="w-full h-auto" />
      </div>

      <div className="flex">
        <SideBar_Catalogue />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 abs">
          <div className="flex items-center justify-between">
            <h1 className="mt-[-35px] text-[30px] font-bold text-gray-700 mb-4">Productos Principales</h1>

            <button className="mt-[-45px] ml-1 mr-[-35px] flex items-center h-38 w-[72px] text-center rounded-[5px] font-semibold bg-gradient-to-b text-[40px] text-gray-700 ">
              <BsFilterRight className="mr-1" />
            </button>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2">
            {products.map((product) => (
              <div key={product.id} className="border-gray-200 border-[0.5px] rounded-[5px] group relative">
                <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <a href={product.href}>
                    <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </a>
                </div>

                <div className="p-1 mt-1 flex ml-2 mb-2">
                  <div>
                    <h3 className="text-[15px] font-semibold text-gray-700">
                      <span aria-hidden="true" className="absolute" />
                      {product.name.length >= 54 ? `${product.name.substring(0, 50)}...` : product.name}
                    </h3>

                    <p className="text-[15px] text-gray-500">Piezas: {product.stock} disponibles</p>
                    <p className="text-[20px] mt-0 font-bold text-purple-600">$ {product.price}</p>

                    <div className="flex items-center">
                      <p className="flex items-center h-38 w-[105px] text-center rounded-[5px] font-semibold bg-gradient-to-b text-[14px] from-purple-600 via-purple-600 to-purple-500 text-white">
                        <FaTruck className="ml-1 mr-1" /> {product.shipping}
                      </p>

                      <button className="ml-1 flex items-center h-38 w-[72px] text-center rounded-[5px] font-semibold bg-gradient-to-b text-[14px] from-blue-500 via-blue-500 to-blue-500 text-white">
                        <FaShoppingCart className="mr-1 ml-1" /> Añadir
                      </button>
                    </div>

                    <StarsRating ratingNumber={product.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
