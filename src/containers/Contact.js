import React from "react";
import ContactForm from "./ContactForm";
import MainImage from "./assets/images/accueil.jpg";
import "../contactForm.css";

const Contact = ({ name, subject, email, message }) => {
  return (
    <section id="contact">
         <div className="pt-32 " data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={MainImage}
            alt="mainImage"
            className=" mx-auto sm:h-[300px] w-full md:w-full object-cover shadow-lg"
          />
          <h1 className="absolute top-[250px] left-[780px] text-7xl text-white font-semibold backdrop-blur-[10px]">
            Contact
          </h1>
        </div>
      <div className=" mx-auto shadow-xl" data-aos="fade-left">
        <div className=" mx-auto mb-10">
          <div className="">
            {/* <h1 className="text-3xl font-bold text-blue-800">Contact</h1> */}
            {/* <div className="border-b-[1px] mx-auto w-52 p-4"></div> */}
          </div>
          <p className="text-3xl mt-10 lg:hidden px-2">
            Un besoin, un projet… N’hésitez pas à nous contacter aux coordonnées
            ci-après ou envoyez-nous un message en remplissant le formulaire.
          </p>
        </div>
        <div className="flex flex-col justify-around py-10">
          <ContactForm
            name={name}
            subject={subject}
            email={email}
            message={message}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;


