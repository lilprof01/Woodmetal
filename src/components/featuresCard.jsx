import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Fcard(props) {
  return (
    <div className="flex flex-col md:flex-col md:text-center align-middle justify-center gap-5 text-center sm:text-left sm:border-r border-[#80808057] last:border-none px-5 py-2">
        <FontAwesomeIcon className="text-4xl text-[#ffa500]" icon={props.icon} />
        <div className="flex flex-col align-middle justify-center gap-1">
          <h1 className="font-bold text-md">{props.title}</h1>
          <p className="text-sm opacity-60">{props.text}</p>
        </div>
      </div>
  )
};

export default Fcard;