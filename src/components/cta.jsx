import React from "react";
import bluechair from '../assets/bluechair.jpg';

function Cta() {
  const bluechairOnline = 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907129/bluechair_kogfei.jpg';

  return (
    <div className='w-full h-[80vh] relative bg-cover transition-all' style={{
      backgroundImage: `url(${bluechairOnline})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-left flex flex-col align-baseline justify-center gap-3 bg-[#00000073]'>
        <div className='flex flex-col align-middle justify-center gap-4 absolute left-10'>
          <p className='text-white'>Style and comfortability</p>
          <h1 className='text-6xl text-white'>Comfort at its Peak</h1>
          <div className='flex align-middle gap-2'>
            <button className='text-white bg-[#ffa500] px-2 py-2 w-40 hover:opacity-100 transition-all'>View Gallery</button>
            <button className='text-white border border-[#ffa500] opacity-85 px-2 py-2 w-40 hover:opacity-100 hover:bg-[#ffa500] transition-all'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cta;