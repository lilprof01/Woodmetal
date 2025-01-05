import React, { useState, useEffect } from "react";
import { FontAwesomeIcon
 } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TopBtn() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    (show && 
      <div onClick={scrollToTop} className="fixed z-[100] right-3 bg-[#ffa500] rounded-md bottom-5 p-3 flex align-middle justify-center text-center shadow-lg shadow-black dark:shadow-[beige] hover:cursor-pointer">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    )
  )
};

export default TopBtn;