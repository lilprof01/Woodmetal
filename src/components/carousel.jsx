import React, { Children, useState } from "react";
import chair from '../assets/chair.png'
import chair5 from '../assets/chair5.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import chair6 from '../assets/chair6.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from 'swiper/modules';
import { useCart } from '../cartcontext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Carousel = (props) => {
  const [selected, setSelected] = useState('onSale');
  const { addToCart, addToWishlist } = useCart();

  const slides = [
    { id: 1, image: `${chair}`, alt: "Slide 1" },
    { id: 2, image: `${chair3}`, alt: "Slide 2" },
    { id: 3, image: `${chair4}`, alt: "Slide 3" },
    { id: 4, image: `${chair3}`, alt: "Slide 4" },
    { id: 5, image: `${chair6}`, alt: "Slide 5" },
    { id: 6, image: `${chair3}`, alt: "Slide 6" },
    { id: 7, image: `${chair5}`, alt: "Slide 7" },
    { id: 8, image: `${chair3}`, alt: "Slide 8" },
  ];
  const slides1 = [
    { id: 1, image: `${chair3}`, alt: "Slide 1" },
    { id: 2, image: `${chair5}`, alt: "Slide 2" },
    { id: 3, image: `${chair4}`, alt: "Slide 3" },
    { id: 4, image: `${chair}`, alt: "Slide 4" },
    { id: 5, image: `${chair6}`, alt: "Slide 5" },
    { id: 6, image: `${chair3}`, alt: "Slide 6" },
    { id: 7, image: `${chair5}`, alt: "Slide 7" },
    { id: 8, image: `${chair3}`, alt: "Slide 8" },
  ];
  const slides2 = [
    { id: 1, image: `${chair6}`, alt: "Slide 1" },
    { id: 2, image: `${chair3}`, alt: "Slide 2" },
    { id: 3, image: `${chair4}`, alt: "Slide 3" },
    { id: 4, image: `${chair3}`, alt: "Slide 4" },
    { id: 5, image: `${chair6}`, alt: "Slide 5" },
    { id: 6, image: `${chair3}`, alt: "Slide 6" },
    { id: 7, image: `${chair5}`, alt: "Slide 7" },
    { id: 8, image: `${chair3}`, alt: "Slide 8" },
  ];
  const slides3 = [
    { id: 1, image: `${chair5}`, alt: "Slide 1" },
    { id: 2, image: `${chair}`, alt: "Slide 2" },
    { id: 3, image: `${chair3}`, alt: "Slide 3" },
    { id: 4, image: `${chair4}`, alt: "Slide 4" },
    { id: 5, image: `${chair6}`, alt: "Slide 5" },
    { id: 6, image: `${chair3}`, alt: "Slide 6" },
    { id: 7, image: `${chair5}`, alt: "Slide 7" },
    { id: 8, image: `${chair}`, alt: "Slide 8" },
  ];

  function handleSelect(element) {
    setSelected(element);
  }

  return (
    <div className="dark:bg-gradient-to-b from-[#000000e2] to-[#000000e2] dark:text-white w-full sm:py-12 mx-auto overflow-hidden">
      <div className="text-center px-8 py-5 sm:flex align-middle justify-between border-b border-[#80808057] mb-3">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <div className="flex align-middle justify-between sm:gap-6 text-md sm:text-lg">
          <h2
            onClick={() => handleSelect('onSale')}
            className={`opacity-60 cursor-pointer ${selected === 'onSale' ? 'text-[#ffa500]' : ''}`}>On Sale</h2>

          <h2 
          onClick={() => handleSelect('hotSale')}
          className={`opacity-60 cursor-pointer ${selected === 'hotSale' ? 'text-[#ffa500]' : ''}`}>Hot Sale</h2>

          <h2 
          onClick={() => handleSelect('trending')}
          className={`opacity-60 cursor-pointer ${selected === 'trending' ? 'text-[#ffa500]' : ''}`}>Trending</h2>

          <h2 
          onClick={() => handleSelect('bestseller')}
          className={`opacity-60 cursor-pointer ${selected === 'bestseller' ? 'text-[#ffa500]' : ''}`}>Bestseller</h2>
        </div>
      </div>
      {/* Swiper Component */}
      
      {selected === 'onSale' && (
        <>
          <Swiper
            spaceBetween={20}
            mousewheel={{
              invert: false, // Make sure mousewheel only scrolls horizontally}
              forceToAxis: true, // Ensure the scroll is constrained to one axis
            }}
            direction={'horizontal'}
            slidesPerView={1}
            pagination={{ clickable: true }}
            effect="slide"
            modules={[Mousewheel, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper">
            {/* Slide Content */}
            {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="hover:opacity-100 sm:opacity-70 hover:cursor-pointer sm:py-16 border border-[#80808057] flex flex-col align-middle justify-center text-center transition-all">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div onClick={() => addToWishlist(slide)} className="py-1 px-4 absolute top-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] text-[#ffa500] hover:text-white hover:cursor-pointer active:bg-opacity-70 transition-all">
                <FontAwesomeIcon icon={faHeart} />
              </div>

              <div className="py-1 px-6 bg-black text-white absolute bottom-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] active:bg-opacity-70 transition-all">
                <button onClick={() => addToCart(slide)} className="">Add to cart</button>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      {selected === 'hotSale' && (
        <>
          <Swiper
          spaceBetween={20}
          mousewheel={{
            invert: false, // Make sure mousewheel only scrolls horizontally}
            forceToAxis: true, // Ensure the scroll is constrained to one axis
          }}
          direction={'horizontal'}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
          effect="slide"
          modules={[Mousewheel, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
        {/* Slide Content */}
        {slides1.map((slide) => (
          <SwiperSlide key={slide.id} className="hover:opacity-100 sm:opacity-70 hover:cursor-pointer sm:py-16 border border-[#80808057] flex flex-col align-middle justify-center text-center transition-all">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div onClick={() => addToWishlist(slide)} className="py-1 px-4 absolute top-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] text-[#ffa500] hover:text-white hover:cursor-pointer active:bg-opacity-70 transition-all">
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="py-1 px-6 bg-black text-white absolute bottom-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] active:bg-opacity-70 transition-all">
              <button onClick={() => addToCart(slide)} className="">Add to cart</button>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </>
      )}

      {selected === 'trending' && (
        <>
          <Swiper
          spaceBetween={20}
          mousewheel={{
            invert: false, // Make sure mousewheel only scrolls horizontally}
            forceToAxis: true, // Ensure the scroll is constrained to one axis
          }}
          direction={'horizontal'}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
          effect="slide"
          modules={[Mousewheel, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
        {/* Slide Content */}
        {slides2.map((slide) => (
          <SwiperSlide key={slide.id} className="hover:opacity-100 sm:opacity-70 hover:cursor-pointer sm:py-16 border border-[#80808057] flex flex-col align-middle justify-center text-center transition-all">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div onClick={() => addToWishlist(slide)} className="py-1 px-4 absolute top-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] text-[#ffa500] hover:text-white hover:cursor-pointer active:bg-opacity-70 transition-all">
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="py-1 px-6 bg-black text-white absolute bottom-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] active:bg-opacity-70 transition-all">
              <button onClick={() => addToCart(slide)} className="">Add to cart</button>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </>
      )}

      {selected === 'bestseller' && (
        <>
          <Swiper
          spaceBetween={20}
          mousewheel={{
            invert: false, // Make sure mousewheel only scrolls horizontally}
            forceToAxis: true, // Ensure the scroll is constrained to one axis
          }}
          direction={'horizontal'}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
          effect="slide"
          modules={[Mousewheel, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
        {/* Slide Content */}
        {slides3.map((slide) => (
          <SwiperSlide key={slide.id} className="hover:opacity-100 sm:opacity-70 hover:cursor-pointer sm:py-16 border border-[#80808057] flex flex-col align-middle justify-center text-center transition-all">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div onClick={() => addToWishlist(slide)} className="py-1 px-4 absolute top-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] text-[#ffa500] hover:text-white hover:cursor-pointer active:bg-opacity-70 transition-all">
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="py-1 px-6 bg-black text-white absolute bottom-2 right-2 shadow-sm shadow-black hover:bg-[#ffa500] active:bg-opacity-70 transition-all">
              <button onClick={() => addToCart(slide)} className="">Add to cart</button>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </>
      )}
    </div>
  );
};

export default Carousel;