import React from 'react';
import Hero from '../components/Hero';
import Body from '../components/Body';
import Product from '../components/products';
import Feature from '../Components/features';
import Cta from '../Components/cta';
import Carousel from '../components/carousel';
import Categories from '../components/categories';
import Contact from '../Components/contact';

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