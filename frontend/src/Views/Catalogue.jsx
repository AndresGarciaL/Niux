import React from "react";
import Header_Dash from "../Components/Dashboard/Header_Dash";
import SideBar_Catalogue from "../Components/Dashboard/SideBar_Catalogue";
const Catalogue = () => {
  const products = [
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },

    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$4,999",
      color: "Black",
    },
    {
      id: 1,
      name: "RTX 4090 ASUS ROG STRIX",
      href: "#",
      imageSrc: "Images/camisa.jpg",
      imageAlt: "Front of men's RTX 4090 ASUS ROG STRIX in black.",
      price: "$ 4,999",
      color: "Black",
    },
  ];
  return (
    <div className="bg-white relative">
      <Header_Dash />
      <div className="w-full h-64 bg-white overflow-hidden">
        <img
          src="/Images/banner.jpg"
          alt="Descripción de la imagen"
          className="w-full h-auto"
        />
      </div>


      <div className="flex">
        <SideBar_Catalogue/>
        
        <div className=" mt-1 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 abs">
          <h1 className="text-3xl font-bold text-gray-700 mb-8 ml-24">Productos Principales</h1>


          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group border-4 rounded-[30px] border-purple-400 flex flex-col items-center"
                style={{ maxWidth: "300px" }}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[30px] bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-[30px]"
                  />
                </div>
                <h3 className="mt-3 text-lg font-bold text-gray-700 text-center">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-purple-600 mt-[-6px]">
                  {product.price}
                </p>
                <div class="flex justify-center items-center p-4">
                  <button class="w-[233px] h-38 flex-shrink-0 rounded-[20px] bg-gradient-to-b from-purple-600 via-purple-600 to-purple-500 text-white font-semibold flex items-center justify-center p-2 mt-[-14px]">
                    Agregar al carrito
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
