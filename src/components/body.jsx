import React from 'react';
import ankara from '../assets/ankara.jpg';
import img2 from '../assets/2ndbodyimg.jpg';
import { Link } from 'react-router-dom';

function Body(){
  const ankaraOnline = 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907130/ankara_n8qdlc.jpg';

  const img2Online = 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907128/2ndbodyimg_fbj0ab.jpg';

  return (
    <div className='dark:bg-black p-2 sm:p-6 flex flex-col sm:flex-row align-middle justify-between gap-10 sm:gap-6'>
      <div className='slideUp w-full h-[40vh] rounded-lg relative' style={{
        backgroundImage: `url(${ankaraOnline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='w-full h-full overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col align-middle justify-center gap-3 bg-[#00000073] rounded-lg'>
          <p className='text-white'>Shop for your house desires</p>
          <h1 className='text-3xl text-white'>Simple but Classy designs</h1>
          <button className='text-white bg-[#ffa500] opacity-85 px-2 py-2 w-40 mx-auto hover:opacity-100 transition-all'><Link to={'./NewPage'}>View Gallery</Link></button>
        </div>
      </div>

      <div className='slideUp w-full h-[40vh] rounded-lg relative' style={{
        backgroundImage: `url(${img2Online})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='w-full h-full overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col align-middle justify-center gap-3 bg-[#00000073] rounded-lg'>
          <p className='text-white'>Style and comfortability</p>
          <h1 className='text-3xl text-white'>Comfort at its Peak</h1>
          <button className='text-white bg-[#ffa500] opacity-85 px-2 py-2 w-40 mx-auto hover:opacity-100 transition-all'><Link to={'./NewPage'}>View Gallery</Link></button>
        </div>
      </div>
      
    </div>
  )
};

export default Body;