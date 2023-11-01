import React, { useState } from 'react';
import { MdLaptop } from 'react-icons/md';
import { BsGpuCard } from 'react-icons/bs';
import { FaComputer } from 'react-icons/fa6';
import { IoHeadsetSharp } from 'react-icons/io5';
import { AiFillStar, AiFillRightCircle, AiFillDownCircle } from 'react-icons/ai';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Disclosure } from '@headlessui/react';

const SideBar_Catalogue = () => {
  const sectionIcons = {
    Destacados: <AiFillStar />,
    Componentes: <BsGpuCard />,
    Laptops: <MdLaptop />,
    Accesorios: <IoHeadsetSharp />,
    Software: <FaComputer />,
  };

  const filters = [
    {
      id: 'destacados',
      name: 'Destacados',
      options: [
        { value: 'ofertas', label: 'Ofertas', checked: false },
        { value: 'nuevos', label: 'Nuevos', checked: false },
        { value: 'mejor-valorados', label: 'Mejor Valorados', checked: false },
      ],
    },
    {
      id: 'componentes',
      name: 'Componentes',
      options: [
        { value: 'tarjetas-graficas', label: 'Tarjetas Gráficas', checked: false },
        { value: 'procesadores', label: 'Procesadores', checked: false },
        { value: 'memoria-ram', label: 'Memoria RAM', checked: false },
        { value: 'almacenamiento', label: 'Almacenamiento', checked: false },
        { value: 'placas-base', label: 'Placas Base', checked: false },
      ],
    },
    {
      id: 'laptops',
      name: 'Laptops',
      options: [
        { value: 'gaming', label: 'Gaming', checked: false },
        { value: 'ultrabooks', label: 'Ultrabooks', checked: false },
        { value: 'estudiantes', label: 'Estudiantes', checked: false },
        { value: 'creativos', label: 'Creativos', checked: false },
      ],
    },
    {
      id: 'accesorios',
      name: 'Accesorios',
      options: [
        { value: 'ratones', label: 'Ratones', checked: false },
        { value: 'teclados', label: 'Teclados', checked: false },
        { value: 'monitores', label: 'Monitores', checked: false },
        { value: 'auriculares', label: 'Auriculares', checked: false },
      ],
    },
    {
      id: 'software',
      name: 'Software',
      options: [
        { value: 'sistemas-operativos', label: 'Sistemas Operativos', checked: false },
        { value: 'software-creativo', label: 'Software Creativo', checked: false },
        { value: 'antivirus', label: 'Antivirus', checked: false },
      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white h-screen sticky top-0 z-40">
      <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 bg-white ${showMenu ? 'left-0' : '-left-full'} transition-all`}>
        <div>
          <div className=" flex items-center p-8">
            <h1 className="mt-2 text-center ml-[25px] text-gray-700 font-bold text-2xl">Categorías</h1>
          </div>
          <form className="">
            <h3 className="sr-only">Categories</h3>

            {filters.map((section, index) => (
              <Disclosure as="div" key={section.id} className="py-4">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className={`relative w-[230px] flex items-center gap-4 py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-600 font-bold text-lg border border-gray-300 rounded-2xl btn-lg ${index === 0 ? 'bg-purple-500 text-white' : ''}`}>
                        {sectionIcons[section.name]}

                        {section.name}
                        <span className="absolute right-6 top-1/2 transform -translate-y-1/2">{open ? <AiFillDownCircle /> : <AiFillRightCircle />}</span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input id={`filter-${section.id}-${optionIdx}`} name={`${section.id}[]`} defaultValue={option.value} type="checkbox" defaultChecked={option.checked} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-primary text-gray-700 p-3 rounded-full z-50">
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </div>
  );
};

export default SideBar_Catalogue;
