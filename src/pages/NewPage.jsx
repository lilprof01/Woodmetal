import React from "react";
import Product from "../components/products";
import Carousel from "../components/carousel";
import Categories from "../components/categories";

function NewPage() {
  return(
    <div className="">
      <Product title='New Products' />
      <Carousel title='Recently Added' />
      <Categories />
      <Carousel title='Popular Products' />
      <Categories />
    </div>
  )
};

export default NewPage;