import React from 'react';
import heroimg3 from '../assets/heroimg3.jpg';
import interior from '../assets/interior.jpg';
import repair from '../assets/repair.jpg';
import avatar from '../assets/avatar.png';

const services = [
  {
    title: "Custom Furniture",
    description: "We create custom furniture tailored to your specific needs and preferences.",
    image: heroimg3
  },
  {
    title: "Interior Design",
    description: "Our expert designers will help you create the perfect look for your home.",
    image: interior
  },
  {
    title: "Furniture Repair",
    description: "We offer repair services to extend the life of your beloved furniture.",
    image: repair
  }
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "The custom furniture they made for us is absolutely stunning. Highly recommend!",
    image: avatar
  },
  {
    name: "Jane Smith",
    feedback: "Their interior design services transformed our home. We love it!",
    image: avatar
  },
  {
    name: "Michael Johnson",
    feedback: "The renovation work was top-notch. Our house looks brand new!",
    image: avatar
  }
];

const Test = () => {
  return (
    <div className="dark:bg-gradient-to-b from-[#000000e2] to-[#000000ea] dark:text-white pt-[50px] bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg max-w-2xl mb-8">
        <h1 className="text-4xl font-bold text-center text-[#ffa500] mb-6">About Woodmetal</h1>
        <p className="text-gray-700 dark:text-white text-lg mb-4">
          Welcome to Woodmetal, your number one source for all things furnishing. We're dedicated to giving you the very best of furniture, with a focus on quality, customer service, and uniqueness.
        </p>
        <p className="text-gray-700 dark:text-white text-lg mb-4">
          Founded in 2018, Woodmetal has come a long way from its beginnings. When we first started out, our passion for eco-friendly and stylish furniture drove us to start our own business.
        </p>
        <p className="text-gray-700 dark:text-white text-lg mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700 dark:text-white text-lg">
          Sincerely,<br />
          The Woodmetal Team
        </p>
      </div>

      {/* Services Section */}
      <div className="space-y-8 mb-10 p-6 dark:text-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-black dark:shadow-black shadow-lg rounded-lg">
              <img src={service.image} alt={service.title} className="w-24 h-24 object-cover rounded-full" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-8 mb-10 p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-black dark:shadow-black shadow-lg rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
              <p className="text-gray-700 dark:text-white text-center">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;