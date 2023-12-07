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
} from "@phosphor-icons/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="info"
      className="py-20 container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3"
      role="contentinfo"
    >
      <div className="flex flex-col gap-y-16 lg:gap-y-10 lg:w-2/3 px-4 lg:px-0 py-10 lg:py-0 items-center lg:items-start">
        <div>
          <Image
            src="/logo-footer.svg"
            width={48}
            height={48}
            alt="logo-footer"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-3 items-center">
            <Phone size={20} color="#1D5B79" weight="fill" />
            <p className="text-body text-sm">(505) 7898 9878</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Envelope size={20} color="#1D5B79" weight="fill" />
            <p className="text-body text-sm">empresa@correo.com</p>
          </div>
          <div className="flex gap-x-3 items-start">
            <MapPin size={20} color="#1D5B79" weight="fill" />
            <p className="text-body text-sm">
              58339 Gregorio Port
              <br />
              Grand Rapids, Bangladesh.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
          <h4 className="text-body text-sm self-center">Síguenos en Redes Sociales</h4>
          <div className="flex gap-x-4 lg:justify-end justify-center">
            <div className="cursor-pointer">
              <TwitterLogo size={32} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <MetaLogo size={32} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <InstagramLogo size={32} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <PinterestLogo size={32} color="#1D5B79" weight="fill" />
            </div>
          </div>
          <div className="text-xs text-body font-light mt-10 lg:hidden">{new Date().getFullYear()} &copy; Todos los derechos reservados.</div>
        </div>
        <form
          action=""
          className="lg:self-end self-center py-10 lg:py-0 flex flex-col items-center lg:items-end"
        >
          <label htmlFor="" className="text-body text-sm">
            Suscríbete al Newsletter
          </label>
          <div className="flex gap-x-2 py-2">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="juan@correo.com"
                autoComplete="email"
                className="border-gray-300 rounded-md shadow-sm focus:border-teal-600 focus:ring-teal-600"
              />
            </div>
            <Button
              title="Enviar"
              btnType="submit"
              isDisabled={false}
              buttonStyles="bg-primary"
            />
          </div>
        </form>
        <div className="text-xs text-body font-light self-end hidden lg:flex">{new Date().getFullYear()} &copy; Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
