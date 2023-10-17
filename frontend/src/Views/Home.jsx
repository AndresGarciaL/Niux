import Breadcrums from "./Breadcrums";
import Navbar from "./Navbar";
import Carrusel from "../Components/Home/Carrusel";
import "../Styles/Home.css";
import ProductosNuevos from "../Components/Home/ProductosNuevos";
import OfertasEspeciales from "../Components/Home/OfertasEspeciales";
import Testimonios from "../Components/Home/Testimonios";
import Principal from "../../public/Images/img_principal_home.jpg";
import { Link } from "react-router-dom";
import ImagenFinal from "../../public/Images/astronauta.png";
import Background from "../Components/Home/Background";

function Home() {
  return (
    <>
      <Navbar />
      <Breadcrums />
      <div className=" relative ">
        <img src={Principal} className=" h-[400px]  w-full" />
        <h1 className=" absolute text-white inset-0 flex justify-center items-center text-7xl font-bold z-20">
          NIUX
        </h1>
        <div className="absolute inset-0 text-white  flex justify-center items-end z-20">
          <Link
            to="/catalogue"
            className="  h-[30px] w-[150px] bg-slate-600 flex justify-center mb-20 rounded-lg items-center transition ease-in duration-100 hover:scale-105"
          >
            Comprar Ahora
          </Link>
        </div>
        <Background />
      </div>
      <ProductosNuevos />

      <div className=" bg-neutral-100 pt-12 mt-10">
        <h1 className=" font-popins text-center text-5xl mb-8">
          Próximos Lanzamientos
        </h1>
        <Carrusel />
      </div>

      <OfertasEspeciales />
      <Testimonios />
      <img src={ImagenFinal} alt="" className=" h-32 w-32 imagen-final" />
    </>
  );
}

export default Home;
