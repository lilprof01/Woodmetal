import React from "react";

function Catcard(props) {
  return (
    <div className="bg-[#f7f7f7] dark:bg-transparent dark:border border-[#80808057] p-6 odd:hidden sm:odd:block">
              <p className="text-md opacity-70">{props.text}</p>
              <h2 className="text-2xl font-bold">{props.title}</h2>
              <img className="h-48 hover:cursor-pointer hover:scale-110 ease-in duration-300" src={props.img} />
            </div>
  )
};

export default Catcard;