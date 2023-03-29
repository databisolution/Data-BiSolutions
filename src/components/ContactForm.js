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
        <p className="flex text-3xl mt-10 lg:w-[600px] collapse absolute block lg:sticky lg:visible">
          Un besoin, un projet… N’hésitez pas à nous contacter aux coordonnées
          ci-après ou envoyez-nous un message en remplissant le formulaire.
        </p>
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
