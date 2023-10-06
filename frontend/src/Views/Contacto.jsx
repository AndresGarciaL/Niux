import Breadcrums from "./Breadcrums";
import Navbar from "./Navbar";

function Contacto (){
    return(
        <>
        <Navbar/>
        <Breadcrums/> 
        <div className="relative w-[100%] h-[500px]">
            <img src="../../public/Images/img_contacto_niux.png" alt="Fondo de contacto" className="w-[100%] h-[400px]"/>
            
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-[100%] h-[400px] z-10 space-y-4">
                <h1 className="text-5xl font-bold text-white">Contactate con nosotros</h1>
                <div className="flex space-x-4">
                    <span className="text-xl text-white">¿Necesitas ayuda?</span>
                    <span className="text-xl text-white">¡Contáctanos hoy!</span>
                    <span className="text-xl text-white">Comunícate con nuestro equipo</span>
                </div>
            </div>
        </div> 
           
        </>
    )
}
export default Contacto;