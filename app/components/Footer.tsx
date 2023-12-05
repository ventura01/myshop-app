'use client'

import { footerLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { InstagramLogo, MetaLogo, PinterestLogo, TwitterLogo } from "@phosphor-icons/react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section
      id="info"
      className="py-20 container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3"
    >
      <div className="flex flex-col gap-y-5 lg:w-1/2 px-4 lg:px-0 py-10 lg:py-0 items-center lg:items-start">
        <div>
          <Image
            src="/logo-footer.svg"
            width={48}
            height={48}
            alt="logo-footer"
          />
        </div>
        <p className="text-sm leading-tight text-body">
          From heartwarming testimonials to glowing reviews, these voices
          reflect the trust and confidence our customers place in us. Let their
          words speak volumes about the extraordinary experiences that await you
          with
        </p>
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
      <div className="flex flex-col lg:justify-between">
        <div className="flex flex-col gap-y-3 self-center py-10 lg:py-0 lg:self-end">
          <h4 className="text-body">Síguenos en Redes Sociales</h4>
          <div className="flex gap-x-4 lg:justify-end justify-center">
            <div className="cursor-pointer"><TwitterLogo size={32} color="#1D5B79" weight="fill" /></div>
            <div className="cursor-pointer"><MetaLogo size={32} color="#1D5B79" weight="fill" /></div>
            <div className="cursor-pointer"><InstagramLogo size={32} color="#1D5B79" weight="fill" /></div>
            <div className="cursor-pointer"><PinterestLogo size={32} color="#1D5B79" weight="fill" /></div>
          </div>
        </div>
        <form action="" className="lg:self-end self-center flex flex-col items-center lg:items-end">
          <label htmlFor="" className="text-body ">
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
      </div>
    </section>
  );
};

export default Footer;
