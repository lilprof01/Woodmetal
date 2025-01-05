import React from "react";

function Contact() {
  return (
    <div className="p-4 sm:py-6 sm:px-20 bg-[#2ed3bd] dark:bg-black w-full flex flex-col sm:flex-row justify-between dark:text-white sm:gap-10">
      <div className="py-8 sm:py-16">
        <h1 className="text-2xl sm:text-4xl font-extrabold">Send us a message</h1>
        <p className="sm:text-lg">want to get in contact with us, or have a specific question? reach out to us by filling the form</p>
      </div>
      <form action="https://formspree.io/f/mnnqplbn" method="POST" className="flex flex-col align-middle justify-center gap-4">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input className="text-black px-2 py-1 rounded-xl focus:outline-none ring-[#ffa500] focus:ring" type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input className="text-black px-2 py-1 rounded-xl focus:outline-none ring-[#ffa500] focus:ring" type="mail" name="email" placeholder="Your email" required />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label>Message</label>
          <textarea className="text-black p-1 rounded-md w-full h-[15vh] focus:outline-none ring-[#ffa500] focus:ring" name="message" placeholder="Your message" required />
        </div>

        <input className="hover:cursor-pointer hover:bg-[#ffa500] transition-all active:bg-opacity-70 bg-black dark:bg-[#a52a2a] text-white p-2 w-32 rounded-3xl self-end" type="submit" value="Send" />
      </form>
    </div>
  )
};

export default Contact;