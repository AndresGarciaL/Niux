import Breadcrums from "./Breadcrums";
import Navbar from "./Navbar";

function Contacto (){
    return(
        <>
        <Navbar/>
        <Breadcrums/> 
        <div className="relative w-[100%] h-[400px] border-[6px] border-black">
            <img src="../../public/Images/img_contacto_niux.png" alt="Fondo de contacto" className="w-[100%] h-[400px] "/>
            
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-[100%] h-[400px] z-10 space-y-8">
                <h1 className="text-6xl font-bold text-white h-[100px] border-[6px] border-yellow-600 capitalize" >¡Contactate con nosotros!</h1>
                <div className="flex space-x-16 border-[6px] border-blue-500">
                    <span className="text-3xl text-white">¿Necesitas ayuda?</span>
                    <span className="text-3xl text-white">¡Contáctanos hoy!</span>
                    <span className="text-3xl text-white">Comunícate con nuestro equipo</span>
                </div>
            </div>
        </div> 
        <div className="border-[6px] border-black">
            hey
        </div>
           
        </>
    )
}
export default Contacto;