"use client";

import React, { useRef, useState } from "react";
import Button from "../components/ui/Button";
import emailjs from "@emailjs/browser";
type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement>(null!);
  const [emailSent, setEmailSent] = useState(false);
  const [clickBtnSent, setClickBtnSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // e.target.reset();
    emailjs
      .sendForm(
        "service_vusdmip",
        "template_cek0xk8",
        form.current,
        "bDmkSx0wAL06Z43ZT",
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setEmailSent(true);
          setClickBtnSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="bg-light ">
      <div className="container max-w-lg mx-auto py-20 flex flex-col items-center justify-center">
        <form
          onSubmit={sendEmail}
          ref={form}
          action=""
          className="flex p-10 flex-col gap-y-5 bg-white rounded-lg shadow-lg"
        >
          <div className="flex justify-center flex-col items-center py-5 max-w-sm gap-y-4">
            <h1 className="text-4xl font-bold text-heading">Contáctanos</h1>
            <h2 className="text-justify text-body">
              Nos encantaría leer tus comentarios y/o sugerencias. De esa forma
              nos ayudarías a poder darte un mejor servicio.
            </h2>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-heading">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              placeholder="Juan Perez"
              className="rounded-lg focus:border-primary border-gray-300 focus:ring-2 focus:ring-secondary text-sm text-heading"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-heading text-sm">
              Correo electrónico
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              placeholder="juan@correo.com"
              className="rounded-lg focus:border-primary border-gray-300 focus:ring-2 focus:ring-secondary text-sm text-heading"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-heading">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Escribe aquí tu mensaje..."
              id="message"
              cols={30}
              rows={10}
              className="rounded-lg focus:border-primary border-gray-300 focus:ring-2 focus:ring-secondary text-sm text-heading"
            ></textarea>
          </div>
          <Button
            title={emailSent === true ? "enviado!" : "enviar"}
            btnType="submit"
            isDisabled={clickBtnSent}
            buttonStyles={`${
              clickBtnSent === true ? "bg-slate-300" : "bg-primary"
            }`}
          />
          {emailSent && (
            <span className="text-blue-600 text-center">
              Message sent successfully.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
