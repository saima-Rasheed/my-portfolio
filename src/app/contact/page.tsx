// pages/contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-orange-300 min-h-screen flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-4xl font-semibold text-golden mb-5">Contact Me</h1>
      <p className="text-lg text-orange-300 mb-8 max-w-2xl text-center">
        I would love to hear from you Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out. You can contact me via email or phone, or simply fill out the form below.
      </p>

      <div className="flex flex-col items-center gap-5 mb-10">
        <p className="text-lg">
          <span className="font-semibold">Email:</span> 
          <a href="mailto:your-email@example.com" className="text-golden hover:underline">
            saimaarasheed@149.gmail.com
          </a>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> 
          <a href="tel:03222531692" className="text-golden hover:underline">
            +03222531692
          </a>
        </p>
      </div>

     
          

          
        
  
    </div>
  );
};

export default Contact;
