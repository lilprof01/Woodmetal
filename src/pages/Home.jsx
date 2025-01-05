import React from 'react';
import Hero from '../components/hero';
import Body from '../components/Body';
import Product from '../components/products';
import Feature from '../components/features';
import Cta from '../components/cta';
import Carousel from '../components/carousel';
import Categories from '../components/categories';
import Contact from '../components/contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Body />
      <Product title='New Products' />
      <Feature />
      <Cta />
      <Carousel title='Recently Added' />
      <Categories />
      <Carousel title='Popular Products' />
      <Contact />
    </>
  );
};

export default Home;