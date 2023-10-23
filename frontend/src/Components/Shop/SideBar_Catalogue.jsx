import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLaptop } from 'react-icons/md';
import { BsGpuCard, BsNvidia, BsAmd } from 'react-icons/bs';
import { FaComputer } from 'react-icons/fa6';
import { IoHeadsetSharp } from 'react-icons/io5';
import { AiFillStar, AiFillRightCircle, AiFillDownCircle } from 'react-icons/ai';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';

const SideBar_Catalogue = () => {
  const filters = [
    {
      id: 'Destacados',
      name: 'Destacados',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'Componentes',
      name: 'Componentes',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: <i class="fa fa-bullseye" aria-hidden="true"></i> },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'Escritorio',
      name: 'Escritorio',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: false },
      ],
    },
    {
      id: 'Laptops',
      name: 'Laptops',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: false },
      ],
    },
    {
      id: 'Accesorios',
      name: 'Accesorios',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: false },
      ],
    },
    {
      id: 'Software',
      name: 'Software',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: false },
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

            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="py-4">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex items-center gap-4 py-3 px-6  hover:bg-purple-400 hover:text-white transition-colors text-gray-600 font-bold text-lg border border-gray-300 rounded-2xl btn-lg">
                        {section.name}
                        <span className="ml-6 flex items-center">{open ? <AiFillDownCircle className="h-5 w-5" aria-hidden="true" /> : <AiFillRightCircle className="h-5 w-5" aria-hidden="true" />}</span>
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
