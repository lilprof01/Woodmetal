import React from "react";
import chair from '../assets/chair.png'
import chair5 from '../assets/chair5.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import chair6 from '../assets/chair6.png'
import Catcard from "./categoriescard";

function Categories() {
  return (
    <div className="dark:bg-gradient-to-b from-[#000000e2] to-[#000000e2] dark:text-white w-full p-6 mx-auto overflow-hidden">
      <div className="text-center px-8 py-5 sm:flex align-middle justify-between border-b border-[#80808057] mb-3">
        <h1 className="text-3xl font-bold">Top Categories This Week</h1>
      </div>

      <div className="sm:flex align-middle justify-center sm:gap-4 w-full">
          <div className="bg-[#f7f7f7] dark:bg-transparent dark:border border-[#80808057] text-right flex flex-col justify-center px-4">
            <p className="text-lg opacity-70">Innovative furnitures</p>
            <h2 className="text-3xl font-bold">Comfy seater</h2>
            <img className="hover:cursor-pointer hover:scale-125 ease-in duration-300" src={chair} />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-2 sm:gap-4">
            <Catcard text='Innovative furnitures' title='Comfy seater' img={chair5} />
            
            <Catcard text='Innovative furnitures' title='Comfy seater' img={chair3} />
            
            <Catcard text='Innovative furnitures' title='Comfy seater' img={chair6} />

            <Catcard text='Innovative furnitures' title='Comfy seater' img={chair4} />
          </div>
        </div>
    </div>
  )
};

export default Categories;