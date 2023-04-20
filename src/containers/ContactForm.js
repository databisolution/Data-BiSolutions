import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../contactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs.send(
      "service_v8pgjbf",
      "template_pcy4a1a",
      {
        name: data.name,
        subject: data.subject,
        email: data.email,
        message: data.message,
      },
      "9XrUzbDSMDmCWNhxg"
    );
  };

  return (
    <main className="containerForm">
      <div className="flex justify-evenly border-1 py-5">
        <div className="collapse absolute block lg:sticky lg:visible">
        <p className="flex text-3xl mt-10 lg:w-[600px] text-left mb-10">
          Un besoin, un projet… N’hésitez pas à nous contacter aux coordonnées
          ci-après ou envoyez-nous un message en remplissant le formulaire.
        </p>
        {/* <svg data-aos="zoom-in" data-aos-delay="500" fill="#ffffff" width="90px" height="90px" viewBox="-192 -192 2304.00 2304.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" 
        stroke-width="0.019200000000000002" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="23.04"> 
        <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd">
          </path> </g><g id="SVGRepo_iconCarrier"> 
          <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg> */}
        
        </div>
        <form
          className="form w-[300px] rounded-2xl md:mr-10 my-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="formTitle text-center my-2">Formulaire de Contact</p>
          <div className="py-3">
            <label className="block" htmlFor="name"></label>
            <input
              {...register("name", { required: true, minLength: 3 })}
              className="border-2"
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez Votre Nom"
            />
            {errors.name && (
              <p className="text-red-800">Veuillez saisir votre nom</p>
            )}
          </div>
          <div className="py-3">
            <label className="block" htmlFor="subject"></label>
            <input
              {...register("subject", { required: true })}
              className="border-2"
              type="text"
              name="subject"
              id="subject"
              placeholder="Sujet de votre demande"
            />
            {errors.name && (
              <p className="text-red-800">
                Veuillez saisir le sujet de votre demande
              </p>
            )}
          </div>

          <div className="py-3">
            <label className="block" htmlFor="email"></label>
            <input
              {...register("email", { required: true })}
              className="border-2"
              type="email"
              name="email"
              id="email"
              placeholder="Votre Email"
            />
            {errors.name && (
              <p className="text-red-800">Veuillez saisir email valide</p>
            )}
          </div>

          <div className="pt-3">
            <label className="block" htmlFor="message"></label>
            <textarea
              {...register("message", { required: true, minLength: 2 })}
              rows={7}
              className="border-2 resize-none rounded-sm w-[230px] text-black"
              type="text"
              name="message"
              id="message"
              placeholder="Votre Message"
            />
            {errors.name && (
              <p className="text-red-800">Veuillez saisir votre message</p>
            )}
          </div>

          <input type="submit" className="px-6 py-1" />
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
