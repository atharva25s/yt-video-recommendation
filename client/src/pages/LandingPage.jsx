import React from "react";
import Button from "../components/Buttons/Button";
import { RiChatSmileAiFill } from "react-icons/ri";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import Cards from "../components/Cards/Cards";
import { Element } from "react-scroll";

function LandingPage() {
  const cardsArr = [
    {
      id:1,
      icon: <MdSentimentVerySatisfied color="white" size={40} />,
      mainText:"Sentiment Analysis",
      para:"Analyzes comments to determine the overall sentiment of the video."
    },

    {
      id:2,
      icon: <MdOutlineFeedback color="white" size={40} />,
      mainText:"Top Positive Feedback",
      para:"Highlights top comments."
    },

    {
      id:3,
      icon: <MdOutlineAutoGraph color="white" size={40} />,
      mainText:"Improvement Suggestions",
      para:"Provides actionable improvement tips."
    },
  ]

  return (
    <>
      <div className="landing-main-section min-h-[100vh] w-full flex flex-col justify-start items-center  ">
      <Element name="home">
        <div className="landing-container relative min-h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
          <div className="landing-main h-auto w-full text-white ">
            <div className="top-text  h-auto w-full py-[40px] flex flex-col justify-center items-center">
              {/* <RiChatSmileAiFill size={40} color="#FF2400" /> */}

              <h1 className="text-[50px] font-bold ">
                Unlock Your Video's True Potential
              </h1>
              <p className="text-zinc-500">Use this for good videos</p>
            </div>
            <div className="button-section h-auto w-full flex justify-center items-center gap-[20px]">
              <Button text={"Get Started"} toPage={"dashboard"} />
            </div>
          </div>
        </div>
        </Element>

        <Element name="features">
        <div className="features-cards h-[80vh] w-[100vw] flex flex-col justify-center bg--700 items-center gap-[80px] ">
          <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
          <h1 className="text-white font-semibold text-[50px]" >Features</h1>
          <p className="text-zinc-400 text-center">Making your video analysis easy</p>
          </div>
        <div className="features-cards-section  h-auto w-[100%] flex justify-center items-center gap-[80px] ">
        {
          cardsArr.map((items) => {
            return(
              <>
                <Cards icon={items.icon} mainText={items.mainText} para={items.para} />
              </>
            );
          })
        }
        </div>

        </div>
        </Element>

        {/* <div className="main-features-cards h-[100vh] w-[100vw] flex flex-col justify-center bg--700 items-center gap-[80px] ">

        <div className="feat-left h-full w-[50%] flex flex-col justify-center items-center ">

        </div>

        <div className="feat-right h-full w-[50%] flex flex-col justify-center items-center ">
          
        </div>
        </div> */}

        <Element name="pricing">
        <div className="pricing-section h-[100vh] w-[100vw] flex flex-col justify-center items-center ">
          <h1 className="text-white font-semibold text-5xl">Pricing</h1>
          <p className="text-zinc-400 text-center">Choose a plan that fits your needs</p>
        </div>
      </Element>

      <Element name="contact">
        <div className="contact-section  h-[100vh] w-[100vw] flex flex-col justify-center items-center ">
          <h1 className="text-white font-semibold text-5xl">Contact</h1>
          <p className="text-zinc-400 text-center">Get in touch with us</p>
        </div>
      </Element>
      </div>
    </>
  );
}

export default LandingPage;
