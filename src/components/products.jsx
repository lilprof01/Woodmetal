import React, { useState } from "react";
import Card from "./card";
import chair from '../assets/chair.png'
import chair5 from '../assets/chair5.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import chair6 from '../assets/chair6.png'

function Product(props) {
  const [selected, setSelected] = useState('onSale');

  function handleSelect(element) {
    setSelected(element)
  }

  const onlineImages = {
    chair: 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907125/chair_emmdmi.png',
    chair3: 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907125/chair3_kjfpxg.png',
    chair4: 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907127/chair4_cs7som.png',
    chair5: 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907125/chair5_k6p9o2.png',
    chair6: 'https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1735907127/chair6_jajm4g.png',
  };

  return (
    <div className="p-2 sm:p-6 dark:bg-gradient-to-b from-[#000000e2] to-[#000000e2] dark:text-white">
      <div className="text-center px-8 py-5 sm:flex align-middle justify-between border-b border-[#80808057] mb-3">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <div className="flex align-middle justify-between sm:gap-6 text-md sm:text-lg">
          <h2
            onClick={() => handleSelect('onSale')}
            className={`opacity-60 cursor-pointer ${selected === 'onSale' ? 'text-[#ffa500]' : ''}`}
          >
            On Sale
          </h2>
          <h2
            onClick={() => handleSelect('hotSale')}
            className={`opacity-60 cursor-pointer ${selected === 'hotSale' ? 'text-[#ffa500]' : ''}`}
          >
            Hot Sale
          </h2>
          <h2
            onClick={() => handleSelect('trending')}
            className={`opacity-60 cursor-pointer ${selected === 'trending' ? 'text-[#ffa500]' : ''}`}
          >
            Trending
          </h2>
          <h2
            onClick={() => handleSelect('bestseller')}
            className={`opacity-60 cursor-pointer ${selected === 'bestseller' ? 'text-[#ffa500]' : ''}`}
          >
            Bestseller
          </h2>
        </div>
      </div>

      {selected === 'hotSale' && (
        <>
          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair5} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>

          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair5} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>
        </>
      )}

      {selected === 'onSale' && (
        <>
          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={onlineImages.chair5} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
          </div>

          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={onlineImages.chair5} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' sale='$250.00' />
          </div>
        </>
      )}

      {selected === 'trending' && (
        <>
          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>

          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>
        </>
      )}

      {selected === 'bestseller' && (
        <>
          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair6} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>

          <div className="sm:flex sm:flex-row-reverse align-middle justify-between gap-4">
            <Card img={chair} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair6} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={onlineImages.chair3} text='Artsy furnitures' title='comfy seater' price='$200.00' />
            <Card img={chair4} text='Artsy furnitures' title='comfy seater' price='$200.00' />
          </div>
        </>
      )}
    </div>
  )
};

export default Product;