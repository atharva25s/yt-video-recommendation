import React from 'react'

function PricingCards({title, price, features}) {
  return (
    <>
    <div className="pricingCards text-white border-[2px] border-zinc-700 h-[500px] w-[400px] rounded-[12px] gap-[20px] bg--500 flex flex-col justify-center items-center ">
        <h1 className='card-title text-[30px] font-semibold ' >{title}</h1>
        {/* <div className="price">
            
        </div> */}
        <h1 className='card-price text-[40px] font-semibold ' >{price}</h1>

        <button
            // onClick={handleLogin}
            className="button-container rounded-[8px] bg-[#fff] w-[70%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium  "
          >
            Get Started
          </button>
        <div className="features h-auto w-full flex flex-col justify-center items-start gap-[10px]  px-[3vw] bg--400 ">
            <h2 className='text-[30px] font-medium' >Features</h2>
            <div className="features-list h-auto w-full ">
            {
                features.map((item) => {
                    return <p className='text-[18px] text-zinc-400 '>{item}</p>
                })
            }
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default PricingCards