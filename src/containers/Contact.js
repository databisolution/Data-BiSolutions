import React from "react";
import ContactForm from "./ContactForm";
import Header from "../components/Header";
import "../contactForm.css";

const Contact = ({ name, subject, email, message }) => {
  return (
    <section id="contact">
        <Header namePage={"Contact"} />
      <div className=" mx-auto shadow-xl" data-aos="fade-left">
        <div className=" mx-auto mb-10">
          <p className="text-3xl mt-10 lg:hidden px-2">
            Un besoin, un projet… N’hésitez pas à nous contacter via le formulaire de contact.
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


