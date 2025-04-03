import React from "react";
import Button from "../components/Buttons/Button";
import { RiChatSmileAiFill } from "react-icons/ri";

function LandingPage() {
  return (
    <>
      <div className="landing-main-section min-h-[100vh] w-full flex flex-col justify-start items-center bg-[#181818] ">
      <div className="landing-container relative min-h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
        <div className="landing-main h-auto w-full text-white ">
        <div className="top-text  h-auto w-full py-[40px] flex flex-col justify-center items-center">
          {/* <RiChatSmileAiFill size={40} color="#FF5678" /> */}

          <h1 className="text-[50px] font-bold ">
            Youtube Video Recommendation
          </h1>
          <p className="text-zinc-500">
            Use this for good videos
          </p>
        </div>
        <div className="button-section h-auto w-full flex justify-center items-center gap-[20px]">
          <Button text={"Get Started"} toPage={"dashboard"} />
          
        </div>
        </div>

      </div>
      </div>
      
    </>
  );
}

export default LandingPage;
