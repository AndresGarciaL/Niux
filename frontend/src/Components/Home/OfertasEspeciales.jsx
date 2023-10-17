
import '../../Styles/OfertasEspeciales.css';
import { useEffect } from 'react';
// Ejemplo de datos de productos en oferta. En una aplicación real, estos probablemente serían recuperados de una API.
const ofertas = [
  { id: 1, nombre: 'Smartphone ABC', precioOriginal: '$500', precioDescuento: '$400', imagenUrl: '../../../public/Images/carruselCinco_home.png' },
  { id: 2, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },
  { id: 3, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },
  { id: 4, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },
  { id: 5, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },
  { id: 6, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },
  { id: 7, nombre: 'Tablet XYZ', precioOriginal: '$300', precioDescuento: '$250', imagenUrl: '../../../public/Images/carruselUno_home.png' },

  // ...otros productos en oferta
];

function OfertasEspeciales() {
    useEffect(() => {
        const slider = document.querySelector(".gridOfertas");
        let isDown = false;
        let initialDifference = 0; 
        let scrollLeft = 0;

        const startSlide = (e) => {
            if (e.touches && e.touches.length === 2) { // Comprobar si hay dos toques
                isDown = true;
                initialDifference = Math.abs(e.touches[0].pageX - e.touches[1].pageX);
                scrollLeft = slider.scrollLeft;
            }
        };

        const stopSlide = () => {
            isDown = false;
        };

        const doSlide = (e) => {
            if (!isDown || !e.touches || e.touches.length !== 2) return;
            const currentDifference = Math.abs(e.touches[0].pageX - e.touches[1].pageX);
            const walk = (initialDifference - currentDifference) * 3; // Multiplicador de sensibilidad
            slider.scrollLeft = scrollLeft + walk;
        };

        slider.addEventListener("touchstart", startSlide);
        slider.addEventListener("touchend", stopSlide);
        slider.addEventListener("touchmove", doSlide);

        // Limpia los listeners al desmontar el componente
        return () => {
            slider.removeEventListener("touchstart", startSlide);
            slider.removeEventListener("touchend", stopSlide);
            slider.removeEventListener("touchmove", doSlide);
        };
    }, []);
  return (
    <div className="ofertasEspeciales mt-8   ">
      <h2 className='mb-5 text-5xl font-poppins text-black'>Ofertas Especiales</h2>
      <div className="gridOfertas bg-transparent">
        {ofertas.map(oferta => (
          <div key={oferta.id} className="oferta border-[2px] border-gray-400 bg-purple-400">
            <img src={oferta.imagenUrl} alt={oferta.nombre} className=' h-[400ppx] w-[400px]'/>
            <h3>{oferta.nombre}</h3>
            <p className="precioOriginal">{oferta.precioOriginal}</p>
            <p className="precioDescuento">{oferta.precioDescuento}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfertasEspeciales;
