import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";

function Navbar() {
  const nav = useNavigate();

  return (
    <>
      <div className="navbar- text-white bg-[#323232] fixed left-[25%] top-[4%] max-md:left-[5%] py-[10px] w-[50vw] max-md:w-[90%] flex justify-between rounded-[8px] shadow-lg items-center bg--700 pl-[2vw] pr-[1vw] border-[1px] border-solid border-[#383838] z-[999]">
        <Link to='/' className="text-[20px] font-semibold">Reco.</Link>
<<<<<<< HEAD
        <div className="nav-mid h-full w-auto flex justify-center items-center gap-[40px] text-[14px] text-[#7d7d7d] ">
        <Link className='hover:text-gray-100 duration-200'>Home</Link>
        <Link className='hover:text-gray-100 duration-200'>Features</Link>
        <Link className='hover:text-gray-100 duration-200' >Pricing</Link>
        <Link className='hover:text-gray-100 duration-200' >Contact</Link>
=======
        <div className="nav-mid max-md:hidden h-full w-auto flex justify-center items-center gap-[40px] text-[14px] text-[#7d7d7d] ">
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Contact</Link>
>>>>>>> c83e1773b6f5ffd320b2da77ce7eafdad59293eb

        </div>
        <div className="nav-right w-auto h-full flex justify-center items-center">
          <div
            onClick={() => nav("/login")}
            className="button-container bg-[#fff] rounded-[8px] px-[2vw] py-[1.2vh] text-black cursor-pointer hover:bg-transparent border-[1px] border-solid border-[#fff] hover:text-[#fff]  transition-all text-[15px] font-medium "
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
