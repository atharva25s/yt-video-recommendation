import React from "react";
import Button from "../components/Buttons/Button";
import { RiChatSmileAiFill } from "react-icons/ri";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import Cards from "../components/Cards/Cards";
import { Element } from "react-scroll";
import PricingCards from "../components/Cards/PricingCards";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function LandingPage() {
  const cardsArr = [
    {
      id: 1,
      icon: <MdSentimentVerySatisfied color="white" size={40} />,
      mainText: "Sentiment Analysis",
      para: "Analyzes comments to determine the overall sentiment of the video.",
    },

    {
      id: 2,
      icon: <MdOutlineFeedback color="white" size={40} />,
      mainText: "Top Positive Feedback",
      para: "Highlights top comments.",
    },

    {
      id: 3,
      icon: <MdOutlineAutoGraph color="white" size={40} />,
      mainText: "Improvement Suggestions",
      para: "Provides actionable improvement tips.",
    },
  ];

  const priceCardsArr = [
    {
      id: 1,
      name: "🌱 Starter Plan",
      price: "Free",
      features: [
        "🔍 Smart video recommendations",
        "❤️ Save up to 10 favorites",
        "📅 Daily refresh suggestions",
        "🔗 Shareable playlists",
        "❌ No API access",
      ],
    },
    {
      id: 1,
      name: "🚀 Pro Plan",
      price: "$7/month",
      features: [
        "✅ Everything in Starter",
        "🧠 Personalized AI learning",
        "📈 History-based suggestions",
        "📊 Watch analytics dashboard",
        "🔌 Access to Public API (read-only)",
      ],
    },
    {
      id: 3,
      name: "🧠 Creator Plan",
      price: "$20/month",
      features: [
        "🚀 Everything in Pro",
        "🎯 Niche-based targeting tools",
        "👥 Team support (up to 5 users)",
        "⏱️ Faster model updates",
        "🔧 Full API access (read/write)",
      ],
    },
  ];

  return (
    <>
      <div className="landing-main-section min-h-[100vh] w-full flex flex-col justify-start items-center  ">
        <Element name="home">
          <div className="landing-container relative min-h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
            <div className="landing-main h-auto w-full text-white ">
              <div className="top-text  h-auto w-full py-[40px] flex flex-col justify-center items-center">
                {/* <RiChatSmileAiFill size={40} color="#FF2400" /> */}

                <h1 className="text-[50px] font-bold ">
                Elevate Your Video Discovery Experience
                </h1>
                <p className="text-zinc-500">Discover smarter, personalized recommendations tailored just for you.</p>
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
              <h1 className="text-white font-semibold text-[50px]">Features</h1>
              <p className="text-zinc-400 text-center">
                Making your video analysis easy
              </p>
            </div>
            <div className="features-cards-section  h-auto w-[100%] flex justify-center items-center gap-[80px] ">
              {cardsArr.map((items) => {
                return (
                  <>
                    <Cards
                      icon={items.icon}
                      mainText={items.mainText}
                      para={items.para}
                    />
                  </>
                );
              })}
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
          <div className="pricing-section h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-[80px] ">
            <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
              <h1 className="text-white font-semibold text-5xl">Pricing</h1>
              <p className="text-zinc-400 text-center">
                Choose a plan that fits your needs
              </p>
            </div>

            <div className="pricing-cards-section h-auto w-full flex justify-center items-center bg--300 gap-[80px] ">
              {priceCardsArr.map((items) => {
                return (
                  <>
                    <PricingCards
                      title={items.name}
                      price={items.price}
                      features={items.features}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </Element>

        <Element name="contact">
          <div className="contact-section bg--500 h-[60vh] w-[100vw] flex flex-col justify-center items-center ">
            <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
              <h1 className="text-white font-semibold text-5xl">Contact</h1>
              <p className="text-zinc-400 text-center">Get in touch with us</p>
            </div>

            <div className="reg-form w-[30%] h-auto py-[40px] bg--500 flex flex-col justify-center items-center gap-[20px] text-white  ">
              <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px] ">
                <input
                  className="outline-none bg-[#242424] w-[80%] focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
                  type="text"
                  placeholder="Email"
                  // value={formData.username}
                  // onChange={handleChange}
                  name="email"
                />

                <textarea
                  rows={5}
                  className="outline-none bg-[#242424] w-[80%] focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
                  type="password"
                  placeholder="Write your message here..."
                  // value={formData.password}
                  // onChange={handleChange}
                  name="message"
                />
              </div>

              <button
                // onClick={handleLogin}
                className="button-container rounded-[8px] bg-[#fff] w-[40%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium  "
              >
                Submit
              </button>
            </div>
          </div>
        </Element>

        <div className="footer-section h-[50vh] w-full bg-[#323232] rounded-r-[12px] flex justify-center items-center rounded-l-[12px] py-[20px] px-[100px] ">
          <div className="website-name w-[30%] h-full bg--500 flex flex-col justify-center items-start ">
          <h1 className="text-[60px] text-white font-bold " >BuzzSence</h1>
          <p className="text-zinc-500 text-[18px] ">Discover smarter, personalized recommendations tailored just for you.</p>
          <div className="icons w-full py-[20px] h-auto bg--500 flex justify-start items-center gap-[20px] ">
          <FaInstagram size={30} color="white" />
          <FaLinkedin size={30} color="white" />
          <FaSquareXTwitter size={30} color="white" />

          </div>
          </div>

          <div className="website-links w-[70%] h-full bg--800 flex justify-center items-end ">
          {/* <h1 className="text-[100px] text-white font-bold " >BuzzSence</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
