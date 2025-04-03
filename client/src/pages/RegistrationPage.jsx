import React from 'react'
import { Link } from 'react-router-dom'

function RegistrationPage() {
  return (
    <>

<div className="reg-container h-[100vh] w-[100vw] flex justify-center items-center ">
        <div className="reg-form w-[30%] h-[70%] py-[40px] bg--500 flex flex-col justify-center items-center gap-[20px]  ">
          <h1 className="text-[40px] font-bold ">Signup</h1>

          <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px] ">
          <input
              className="outline-none focus:transition-all focus:border-[#000] px-[2vw] py-[1.4vh] rounded-full border-[2px] border-solid border-zinc-200 "
              type="text"
              placeholder="Username"
            />
            <input
              className="outline-none focus:transition-all focus:border-[#000] px-[2vw] py-[1.4vh] rounded-full border-[2px] border-solid border-zinc-200 "
              type="email"
              placeholder="Email"
            />
            <input
              className="outline-none focus:transition-all focus:border-[#000] px-[2vw] py-[1.4vh] rounded-full border-[2px] border-solid border-zinc-200 "
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="options h-auto w-[60%] flex justify-between items-center text-[15px] text-zinc-600 ">
            <p>Already a user?</p>
            <Link to='/login' className="hover:text-black hover:font-semibold transition-all" >Login</Link>
          </div>

          <button
            // onClick={() => nav(`/${toPage}`)}
            className="button-container rounded-full bg-[#fff] w-[40%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium shadow-lg shadow-[#D4C7FF] "
          >
            Register
          </button>
        </div>
      </div>
    
    </>
  )
}

export default RegistrationPage