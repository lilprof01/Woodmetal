import React from "react";

function Card(props) {
  return (
    <div className="w-full flex flex-col align-middle justify-between text-center gap-1 border border-[#80808057] py-3 hover:cursor-pointer hover:opacity-100 sm:opacity-70 transition-all even:hidden sm:even:flex">
          <img src={props.img} />
          <p className="text-sm opacity-60">{props.text}</p>
          <h2 className="font-bold">{props.title}</h2>
          <div className="flex align-middle justify-center gap-3">
            <h2 className="text-[red] line-through decoration-black dark:decoration-slate-400">{props.sale}</h2>
            <h2 className="text-[#ffa500]">{props.price}</h2>
          </div>
        </div>
  )
};

export default Card;