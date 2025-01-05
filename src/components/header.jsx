import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useCart } from "../cartcontext";
import { Link } from "react-router-dom";

function Header() {
  const { cart, wishlist } = useCart();
  const [showNav, setShowNav] = useState(false);

  const navToggle = () => {
    setShowNav(!showNav);
  };
  
  return (
    <div className="w-full flex justify-between align-middle bg-[#ffa500] dark:bg-[black] p-4 sm:py-5 sm:px-14 fixed top-0 shadow-md shadow-black z-50">
      {/* logo */}
      <Link to={'/'}>
        <div className="flex h-full gap-1">
          <div className="flex justify-center">
            <FontAwesomeIcon className="text-[#a52a2a] dark:text-[#ffa500] text-2xl h-7" icon={faCouch} />
          </div>
          <div className="flex align-middle justify-center">
            <h1 className="text-white text-xl sm:text-2xl font-extrabold">Woodmetal<span className="text-[#a52a2a] dark:text-[#ffa500] opacity-60">.</span></h1>
          </div>
        </div>
      </Link>

      {/* mid-section */}
      <div className="hidden sm:flex align-middle">
        <ul className="flex align-middle justify-between gap-8 text-[#a52a2a] text-xl">
          <li className="dark:text-white dark:hover:text-[#ffa500] cursor-pointer hover:text-white transition-all"><Link to='/'>Home</Link></li>
          <li className="dark:text-white dark:hover:text-[#ffa500] cursor-pointer hover:text-white transition-all"><Link to='/NewPage'>Gallery</Link></li>
          <li className="dark:text-white dark:hover:text-[#ffa500] cursor-pointer hover:text-white transition-all"><Link to='/Testpage'>About Us</Link></li>
        </ul>
      </div>

      {/* right-section */}
      <div className="hidden sm:flex sm:text-2xl text-lg text-[#a52a2a] dark:text-white align-middle justify-center gap-6 h-full">
        <Link to={'/Wishlist'}>
          <div className="relative">
            <FontAwesomeIcon className="h-5 sm:h-7 hover:cursor-pointer" icon={faHeart} />
            <div className="h-4 w-4 sm:h-6 sm:w-6 text-center flex align-middle justify-center absolute top-[-15px] left-[-10px] text-sm bg-white text-black dark:bg-[#ffa500] rounded-full">
              {wishlist.length}
            </div>
          </div>
        </Link>

        <div className="relative">
          <FontAwesomeIcon className="h-5 sm:h-7 hover:cursor-pointer" icon={faShoppingCart} />
          <div className="h-4 w-4 sm:h-6 sm:w-6 text-center flex align-middle justify-center absolute top-[-15px] left-[-10px] text-sm bg-black text-white dark:bg-[#ffa500] rounded-full">
            {cart.length}
          </div>
        </div>
      </div>

      {/* hamburger and mobile nav */}
      <div onClick={navToggle} className={`flex text-white text-3xl font-black align-middle justify-center border border-[#a52a2a] px-1 shadow-sm shadow-black dark:shadow-[#ffa500] sm:hidden hover:cursor-pointer ${showNav ? 'rotate-180 ease-in-out duration-1000' : 'reset'}`}>
        <h1 className="opacity-85">&lt;</h1>
        <h1 className="-ml-[2px] opacity-70">&lt;</h1>
      </div>

      <div className={`sm:hidden h-[60vh] w-[50vw] fixed top-[70px] right-0 rounded-tl-xl rounded-bl-xl backdrop-blur-md ${showNav ? 'nav' : 'nav-hide'} flex align-middle justify-between`}>
        <div className="p-6 flex flex-col justify-between h-full">
          <ul className="flex flex-col justify-between align-middle gap-6 dark:text-white">
            <li className="hover:cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="hover:cursor-pointer"><Link to='/NewPage'>Gallery</Link></li>
            <li className="hover:cursor-pointer"><Link to='Testpage'>About Us</Link></li>
          </ul>

          <div className="flex sm:text-2xl text-lg text-[#a52a2a] dark:text-white align-middle justify-end gap-6 sm:h-full">
            <Link to={'/Wishlist'}>
              <div className="relative">
                <FontAwesomeIcon className="h-5 sm:h-7 hover:cursor-pointer" icon={faHeart} />
                <div className="h-4 w-4 sm:h-6 sm:w-6 text-center flex align-middle justify-center absolute top-[-15px] left-[-10px] text-sm bg-white text-black dark:bg-[#ffa500] rounded-full">
                  {wishlist.length}
                </div>
              </div>
            </Link>

            <div className="relative">
              <FontAwesomeIcon className="h-5 sm:h-7 hover:cursor-pointer" icon={faShoppingCart} />
              <div className="h-4 w-4 sm:h-6 sm:w-6 text-center flex align-middle justify-center absolute top-[-15px] left-[-10px] text-sm bg-black text-white dark:bg-[#ffa500] rounded-full">
                {cart.length}
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Header;