import { useEffect, useState } from 'react';
import React from "react";
import hero1 from '../assets/heroimg1.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  const title = 'Your Home Your Style';
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < title.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + title[index]); 
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout); // Clean up timeout to prevent memory leaks
    }
  }, [index, title]);

  const heroUrl = 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907130/heroimg1_lt2tfk.jpg';

  return (
    <div className="hero">
      <div className="carousel relative">
        <div
          style={{
            backgroundImage: `url(${navigator.online ? heroUrl : hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full h-screen"
        >
          <div className="bg-gradient-to-b from-transparent dark:from-[#00000065] via-transparent to-[#ffffff] dark:to-[black] h-full"></div>
        </div>

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-90%] w-full text-center flex flex-col align-middle justify-between gap-4">
          <h3 className="text-xl sm:text-2xl text-[#ffa500] font-bold">Up to 20% Off</h3>
          <h1 className="dark:text-white text-5xl sm:text-8xl font-normal">{display}</h1>
          <button className="text-white bg-[#ffa500] opacity-85 px-6 py-3 w-52 mx-auto hover:opacity-100 border-2 border-black transition-all">
            <Link to={'/NewPage'}>View Gallery</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
