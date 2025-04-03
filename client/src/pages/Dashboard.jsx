import React from 'react'
// import { Sidebar } from '../components/Sidebar/Sidebar'

function Dashboard() {
  return (
    <>
        <div className="Dashbaord-container h-[100%] w-[100vw] flex justify-center items-center ">
        <div className="Dashbaord-form w-[28%] h-[70%] py-[40px] bg--500 text-white flex flex-col justify-center items-center gap-[20px]  ">
          <h1 className="text-[40px] font-bold ">Paste YT link</h1>

          <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px] ">
            <input
              className="outline-none bg-[#242424] w-full focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
              type="text"
              placeholder="Youtube URL "
            />
            {/* <input
              className="outline-none focus:transition-all focus:border-[#000] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-200 "
              type="password"
              placeholder="Password"
            /> */}
          </div>
          {/* <div className="options h-auto w-[60%] flex justify-between items-center text-[15px] text-zinc-600 ">
            <p>Not a user?</p>
            <Link
              to="/register"
              className="hover:text-black hover:font-semibold transition-all"
            >
              Signin
            </Link>
          </div> */}

          <button
            // onClick={() => nav(`/${toPage}`)}
            className="button-container rounded-[8px] bg-[#fff] hover:shadow-md hover:shadow-[#404040] w-[30%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium   "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard