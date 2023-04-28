import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../contactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onTouched",
  });
  const { isSubmitSuccessful, errors } = formState;
  const onSubmit = async (data) => {
    await emailjs.send(
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

  console.log(errors);
  const notify = () => {
    toast.success("Message Envoyé!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const errorName = () => {
    toast.error("Veuillez saisir votre nom.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const errorSubject = () => {
    toast.error("Veuillez saisir votre demande.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const errorEmail = () => {
    toast.error("Veuillez saisir votre adresse mail.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const errorMessage = () => {
    toast.error("Veuillez saisir votre message.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const onMessageSubmit = (isSubmitSuccessful) => {
    if (errors.name) {
      errorName();
    } else if (errors.subject) {
      errorSubject();
    } else if (errors.email) {
      errorEmail();
    } else if (errors.message) {
      errorMessage();
    } else if(isSubmitSuccessful) {
      notify();
    }
  };
  return (
    <main className="containerForm">
      <div className="flex justify-evenly border-1 py-5">
        <div className="collapse absolute block lg:sticky lg:visible">
          <p className="flex text-3xl mt-10 lg:w-[600px] text-left mb-10">
          Un besoin, un projet… N’hésitez pas à nous contacter via le formulaire de contact.
          </p>
        </div>
        <form
          className="form w-[300px] 2xl:w-[1000px] rounded-2xl md:mr-10 my-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="formTitle text-center my-2">Formulaire de Contact</p>
          <div className="py-3">
            <label className="block" htmlFor="name"></label>
            <input
              {...register("name", { required: true, minLength: 2 })}
              className="font-semibold border-2 2xl:w-[300px] 2xl:absolute 2xl:left-[100px] 2xl:top-[100px] 2xl:py-5"
              type="text"
              name="name"
              id="name"
              placeholder="Saisissez Votre Nom"
            />
            {/* {errors.name && (
              <p className="text-red-800 font-semibold 2xl:w-[400px] 2xl:absolute 2xl:left-[100px] 2xl:top-[172px]">
                Veuillez saisir votre nom
              </p>
            )} */}
          </div>
          <div className="py-3">
            <label className="block" htmlFor="subject"></label>
            <input
              {...register("subject", { required: true })}
              className="font-semibold border-2 2xl:w-[300px] 2xl:absolute 2xl:left-[100px] 2xl:top-[200px] 2xl:py-5"
              type="text"
              name="subject"
              id="subject"
              placeholder="Sujet de votre demande"
            />
            {/* {errors.name && (
              <p className="text-red-800 font-semibold 2xl:w-[400px] 2xl:absolute 2xl:left-[100px] 2xl:top-[275px]">
                Veuillez saisir le sujet de votre demande
              </p>
            )} */}
          </div>

          <div className="py-3">
            <label className="block" htmlFor="email"></label>
            <input
              {...register("email", { required: true })}
              className="font-semibold border-2 2xl:w-[300px] 2xl:absolute 2xl:left-[100px] 2xl:top-[310px] 2xl:py-5"
              type="email"
              name="email"
              id="email"
              placeholder="Votre Email"
            />
            {/* {errors.name && (
              <p className="text-red-800 font-semibold 2xl:w-[400px] 2xl:absolute 2xl:left-[100px] 2xl:top-[385px]">
                Veuillez saisir email valide
              </p>
            )} */}
          </div>

          <div className="pt-3">
            <label className="block" htmlFor="message"></label>
            <textarea
              {...register("message", { required: true, minLength: 2 })}
              rows={10}
              className="font-semibold border-2 resize-none rounded-md w-[230px] h-10 2xl:h-[275px] text-black 2xl:absolute 2xl:right-[100px] 2xl:top-[100px] 2xl:py-14 2xl:w-[350px] xl:w-[200px] 2xls:w-[430px]"
              type="text"
              name="message"
              id="message"
              placeholder="Votre Message"
            />
            {/* {errors.name && (
              <p className="text-red-800 font-semibold 2xl:w-[400px] 2xl:absolute 2xl:right-[30px] 2xl:top-[395px]">
                Veuillez saisir votre message
              </p>
            )} */}
          </div>

          <input
            type="submit"
            className="font-medium px-6 py-1 2xl:absolute 2xl:right-[400px] 2xl:top-[420px] 2xl:px-14 2xl:py-5 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-blue-100 duration-300"
            onClick={onMessageSubmit(isSubmitSuccessful)}
          />
          <ToastContainer />
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
