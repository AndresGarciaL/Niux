import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { SiIntel, SiAsus } from "react-icons/si";
import { MdLaptop, MdMiscellaneousServices } from "react-icons/md";
import { BsGpuCard, BsNvidia, BsAmd } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { IoHeadsetSharp } from "react-icons/io5";
import {
  AiFillCreditCard,
  AiOutlineUserSwitch,
  AiFillShop,
  AiFillStar,
  AiFillRightCircle,
} from "react-icons/ai";
import {
  RiBarChart2Line,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

const SideBar_Catalogue = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white h-screen sticky top-0 z-40">
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 bg-white ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <div className=" flex items-center p-8">
            <h1 className="mt-2 text-center ml-[25px] text-gray-700 font-bold text-2xl">
              Categorías
            </h1>
          </div>
          <ul>
            <li className="mb-1">
              <Link
                to="/"
                className="flex items-center gap-4 py-3 px-6  hover:text-white hover:bg-purple-400 transition-colors font-poppinsd font-bold text-lg bg-gradient-to-b from-purple-600 via-purple-600 to-purple-500 text-white  rounded-2xl btn-lg"
              >
                <AiFillStar /> <span className="text-lg">Destacados</span>{" "}
                <AiFillRightCircle className="ml-[20px]" />
              </Link>
            </li>

            <li className="mb-1">
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-3 px-6  hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border border-gray-300 rounded-2xl btn-lg"
              >
                <BsGpuCard /> <span className="text-lg">Componentes</span>{" "}
                <AiFillRightCircle className="ml-[0px]" />
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/pedidos"
                className="flex items-center gap-4 py-3 px-6  hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border border-gray-300 rounded-2xl btn-lg"
              >
                <FaComputer /> <span className="text-lg">Escritorio</span>{" "}
                <AiFillRightCircle className="ml-[34px]" />
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/pedidos"
                className="flex items-center gap-4 py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border border-gray-300 rounded-2xl btn-lg"
              >
                <MdLaptop /> <span className="text-lg">Laptops</span>{" "}
                <AiFillRightCircle className="ml-[48px]" />
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/pedidos"
                className="flex items-center gap-4 py-3 px-6  hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border border-gray-300 rounded-2xl btn-lg"
              >
                <IoHeadsetSharp /> <span className="text-lg">Accesorios</span>{" "}
                <AiFillRightCircle className="ml-[25px]" />
              </Link>
            </li>

            <h1 className="mt-4 text-center text-gray-700 font-bold text-2xl">
              Marcas
            </h1>

            <div className="ml-4">
              <li className="mt-6 mb-3 ">
                <Link
                  to="/tickets"
                  className="flex items-center justify-center py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border-[3px] border-gray-300 rounded-full w-48 h-48 btn-lg"
                >
                  <BsNvidia size="7em" />
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/tickets"
                  className="flex items-center justify-center py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border-gray-300 rounded-full w-48 h-48 btn-lg border-[3px]"
                >
                  <SiIntel size="7em" />
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/tickets"
                  className="flex items-center justify-center py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border-[3px] border-gray-300 rounded-full w-48 h-48 btn-lg"
                >
                  <BsAmd size="5em" />
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/tickets"
                  className="flex items-center py-3 px-6 hover:bg-purple-400 hover:text-white transition-colors text-gray-700 font-bold text-lg border-[3px] border-gray-300 rounded-full w-48 h-48 btn-lg"
                >
                  <SiAsus size="7em" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-gray-700 p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </div>
  );
};

export default SideBar_Catalogue;
