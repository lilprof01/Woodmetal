import React from "react";
import chair from '../assets/chair.png';
import Products from "../Data/Products";
import Product from "../components/products";
import { useCart } from '../cartcontext';
import { CartProvider } from "../cartcontext";

const HeaderComponent = (props) => {
  return (
    <div className="text-xl font-medium border border-[#80808057] p-4 hidden sm:block">{props.text}</div>
  )
};

// for pushs sake

const WishlistItem = (props) => {
  const { addToCart, addToWishlist } = useCart();
  
  return (
    <div className="p-6">
      {Products.map((Products) => (
        <div className="grid sm:grid-cols-4 mb-5">
          <div className="border border-[#80808057] p-4">
            <img src={Products.image} alt={Products.alt} />
          </div>
          
          <div className="border border-[#80808057] p-4">
            <p>{Products.description}</p>
          </div>

          <div className="border border-[#80808057] p-4">
            <p>${Products.price}.00</p>
          </div>

          <div className="border border-[#80808057] p-4 flex justify-between align-middle">
            <button onClick={() => addToCart(Products)} className="h-10 py-1 px-6 bg-black text-white shadow-sm shadow-black hover:bg-[#ffa500] transition-all">Add to Cart</button>

            <button className="h-10 py-1 px-6 bg-black text-white shadow-sm shadow-black hover:bg-[#ffa500] transition-all">Remove</button>
          </div>
        </div>
      ))}
          
    </div>
  )
};

function Wishlist() {
  return (
    <div className="dark:bg-gradient-to-b from-[#000000e2] to-[#000000e2] dark:text-white">
      <div className="p-6">
        <h1 className="text-4xl">Wishlist</h1>
        <div className="grid grid-cols-4 p-6">
          <HeaderComponent />
          <HeaderComponent text='Description' />
          <HeaderComponent text='Price' />
          <HeaderComponent text='Action' />
        </div>
        <WishlistItem />
      </div>
    </div>
  )
};

export default Wishlist;