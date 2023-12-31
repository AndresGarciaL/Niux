import React from 'react';
import Navbar from './Navbar';
import { useAuthStore } from '../stores/Auth/authStore';
import PayPalButton from '../Components/Shop/PayPalButton';
import { useCartStore } from '../stores/shop/cartStore';
import { niuxApi } from '../api/niuxApi';
import { productService } from '../services/productService';

const Cart = () => {
  const useUser = useAuthStore((state) => state.user);
  const useCart = useCartStore((state) => state.cart);
  const updateCart = useCartStore((state) => state.setCart);

  const dateOrder = () => {
    let date = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

    return new Intl.DateTimeFormat('es-ES', options).format(date);
  };

  const increment = async (productId, quantity) => {
    await productService.setProductCart(productId, quantity);
    await updateCart();
  };

  const decrement = async (productId) => {
    await productService.deleteProductsCart(productId);
    await updateCart();
  };

  const totalPago = useCart.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  const mercadoPago = async () => {
    const { data } = await niuxApi.post('/pays/create-order', useCart);
    window.location.href = data;
  };

  const bodyPreOrder = {
    total: totalPago,
    products: useCart.map((item) => {
      return item.product.id;
    }),
    quantity: useCart.map((item) => {
      return item.quantity;
    }),
  };

  return (
    <div>
      <Navbar />
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto bg-gray-200">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Información de la compra...</h1>
          <p className="text-base font-medium leading-6 text-gray-600">{dateOrder()}</p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Productos en tu carrito </p>
              {/* Productos */}

              {useCart.map((item) => (
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img className="w-full hidden md:block" src={productService.getImages(item.product.images[0].url)} alt="dress" />
                    <img className="w-full md:hidden" src={productService.getImages(item.product.images[0].url)} alt="dress" />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.product.title}</h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-600">Marca: </span> {item.product.brand.name.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="font-semibold ml-30 text-base xl:text-lg leading-4"></p>
                      {/*Contador*/}
                      <div className=" absolute  pl-16 gap-0 mt-0 flex items-center text-gray-700">
                        <button className="rounded-[0px] bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 flex items-center justify-center w-10" onClick={() => decrement(item.product.id)}>
                          -
                        </button>
                        <span className="rounded-[0px] flex items-center justify-center bg-gray-200 h-10 text-lg font-normal w-10 text-center py-2 px-4">{item.quantity}</span>
                        <button className="rounded-[0px] bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4" onClick={() => increment(item.product.id, 1)}>
                          +
                        </button>
                      </div>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800 ">${item.totalPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">Resumen del pedido</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                    <p className="text-base leading-4 text-gray-600">${totalPago}</p>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">Envío</p>
                    <p className="text-base leading-4 text-gray-600">$0.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                  <p className="text-base font-semibold leading-4 text-gray-600">${totalPago}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">Métodos de pago</h3>

                {/* Botones pago*/}
                <div className="w-full flex justify-center items-center gap-2">
                  <PayPalButton preOrder={bodyPreOrder} classNam="w-30 h-96" invoice="Niux MX Productos" total={totalPago} />
                  <button onClick={mercadoPago}  className="hover:bg-blue-400 rounded-lg focus:outline-none focus:ring-2 mt-[-65px] focus:ring-offset-2 focus:ring-gray-800 py-5 w-92 md:w-full bg-blue-500 text-base font-medium leading-4 text-white">
                    Mercado Pago
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">Comprador</h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img className="w-16 h-16" src={useUser.picture} alt="avatar" />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{useUser.fullName}</p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">{useUser.email}</p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Dirección de envío</p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center space-x-4">
                      <div class="w-8 h-8">
                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                      </div>
                      <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 font-semibold text-gray-800">
                          FedEx
                          <br />
                          <span className="font-normal">Entrega en 24 horas</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold leading-6 text-gray-800">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
