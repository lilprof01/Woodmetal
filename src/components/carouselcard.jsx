import React from "react";

function Carouselcard(props) {
  return (
    <div key={props.key} className="w-full flex-shrink-0">
      <img
        src={props.image}
        alt={props.alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
};

export default Carouselcard;