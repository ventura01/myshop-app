"use client";

import { footerLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import {
  Envelope,
  InstagramLogo,
  MapPin,
  MetaLogo,
  Phone,
  PinterestLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="info"
      className="py-20 border-t border-slate-100 border-dotted bg-gray-50"
      role="contentinfo"
    >
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-y-12 lg:gap-y-6 lg:w-2/3 px-4 lg:px-0 py-10 sm:py-0 items-center lg:items-start">
          <Link href={"/"}>
            <Image
              src="/logo-footer.svg"
              width={300}
              height={58}
              alt="logo-footer"
            />
            {/* <p className="text-2xl uppercase font-semibold text-gray-700">
              farmacia <span className="font-light text-gray-500">zulma</span>
            </p> */}
          </Link>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-3 items-center">
              <Phone size={20} color="#1D5B79" weight="fill" />
              <p className="text-body font-bold">(505) 7898 9878</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Envelope size={20} color="#1D5B79" weight="fill" />
              <Link
                href="mailto:info@farmaciazulmita.com"
                className="text-body"
              >
                info@farmaciazulmita.com
              </Link>
            </div>
            <div className="flex gap-x-3 items-start">
              <MapPin size={20} color="#1D5B79" weight="fill" />
              <p className="text-body">
                Del Banco Avanz 1C. al Este.
                <br />
                Jalapa, Nueva Segovia.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 md:py-0">
          <div className="flex flex-col gap-y-3">
            {footerLinks.map((link) => (
              <div key={link.title}>
                <h4 className="capitalize text-sm font-semibold text-body">
                  {link.title}
                </h4>
                <div className="flex flex-col">
                  {link.links.map((links) => (
                    <Link
                      className="text-sm font-light text-body cursor-pointer first-letter:capitalize hover:text-heading"
                      href={links.url}
                      key={links.title}
                    >
                      {links.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col lg:justify-between">
          <div className="flex flex-col gap-y-3 self-center lg:self-end">
            <h4 className="text-body text-sm self-center md:self-end font-semibold">
              Síguenos en Redes Sociales
            </h4>
            <div className="flex gap-x-4 lg:justify-end justify-center">
              <Link href="https://twitter.com" className="cursor-pointer">
                <TwitterLogo
                  size={32}
                  color="#1D5B79"
                  weight="fill"
                  className="hover:fill-secondary"
                />
              </Link>
              <Link href="https://www.facebook.com" className="cursor-pointer">
                <MetaLogo
                  size={32}
                  color="#1D5B79"
                  weight="fill"
                  className="hover:fill-secondary"
                />
              </Link>
              <Link href="https://www.instagram.com" className="cursor-pointer">
                <InstagramLogo
                  size={32}
                  color="#1D5B79"
                  weight="fill"
                  className="hover:fill-secondary"
                />
              </Link>
              <Link href="https://www.whatsapp.com" className="cursor-pointer">
                <WhatsappLogo
                  size={32}
                  color="#1D5B79"
                  weight="fill"
                  className="hover:fill-secondary"
                />
              </Link>
            </div>
            <div className="text-xs text-body font-light mt-5 lg:hidden">
              {new Date().getFullYear()} &copy; Todos los derechos reservados.
            </div>
          </div>
          <form
            action=""
            className="lg:self-end self-center py-5 sm:py-0 lg:py-5 flex flex-col items-center md:items-end"
          >
            <label htmlFor="" className="text-body text-sm font-semibold">
              Suscríbete al Newsletter
            </label>
            <div className="flex flex-col md:flex lg:flex-row sm:gap-y-0 md:gap-y-2 gap-y-2 sm:gap-x-2 py-2">
              <div className="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="micorreo@correo.com"
                  autoComplete="email"
                  className="border-gray-300 rounded-md shadow-sm w-full focus:border-teal-600 focus:ring-teal-600"
                />
              </div>
              <Button
                title="Enviar"
                btnType="submit"
                isDisabled={false}
                buttonStyles="bg-primary hover:text-primary hover:bg-white"
              />
            </div>
          </form>
          <div className="text-xs text-body font-light self-end hidden lg:flex">
            {new Date().getFullYear()} &copy; Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
