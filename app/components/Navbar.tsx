"use client";

import { navLinks } from "@/data/data";
// import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./ui/Button";
import {
  List,
  Phone,
  ShoppingCart,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

type Props = {};
//! para que el NAVBAR sea Fijo se debe poner el siguiente codigo en  globals.css
//! body{
//!   padding-top: 60px;
//! }

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const [cartQty, setCartQty] = useState(0);
  return (
    <header className="border-b-[1px] border-dotted z-50 shadow-m bg-white w-full fixed top-0">
      <div className="container max-w-screen-xl mx-auto py-5 md:py-5">
        <nav className="flex justify-between items-center mx-4 lg:mx-0">
          <div>
            <Link href="/" className="">
              <Image
                src={"/logo.svg"}
                width={300}
                height={59}
                alt="logo"
                priority
              ></Image>
              {/* <p className="text-lg uppercase font-semibold text-gray-700">
                farmacia <span className="font-light text-gray-500">zulma</span>
              </p> */}
            </Link>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col gap-y-16 bg-primary w-screen h-screen lg:hidden text-white fixed left-0 top-[72px] justify-center items-center z-[50]"
                : "hidden lg:flex gap-x-5 lg:text-heading"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={`${
                  link.url === path && "text-secondary font-bold"
                } first-letter:capitalize text-sm hover:text-primary`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex md:gap-x-3">
            <div className="flex gap-x-3 justify-center items-center">
              <div className="relative cursor-pointer">
                {cartQty > 0 ? (
                  <Link href="/cart" className="">
                    <span className="px-[6px] text-[12px] absolute bg-orange-600 font-semibold text-white py-[2px] rounded-full -top-3 left-3">
                      {cartQty}
                    </span>
                    <ShoppingCart
                      size={24}
                      weight="fill"
                      className="fill-secondary"
                    />
                  </Link>
                ) : (
                  <Link href="/cart">
                    <ShoppingCart
                      size={24}
                      weight="fill"
                      className="fill-secondary"
                    />
                  </Link>
                )}
              </div>
              {/* <Button
                  title="llame ahora!"
                  buttonStyles="bg-primary hidden lg:block"
                  btnType="button"
                  isDisabled={false}
                /> */}
              {/* <div className="absolute hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden block z-[99]"
                >
                  {isOpen ? (
                    <X
                      size={36}
                      color="#fff"
                      className="bg-secondary rounded-full py-2 px-2"
                    />
                  ) : (
                    <List
                      size={36}
                      color="#fff"
                      className="bg-secondary rounded-full py-2 px-2"
                    />
                  )}
                </button>
              </div> */}
            </div>
            <div className="hidden lg:block flex-col justify-center items-center bg-primary px-3 py-1 rounded-2xl">
              {/* <div>
              <p className="text-white font-semibold">Servicio Delivery</p>
            </div> */}
              <div className="flex gap-x-1 items-center">
                <div className="border-2 border-white rounded-full p-1">
                  <Phone size={24} weight="fill" className="fill-white" />
                </div>
                <p className="text-white font-semibold text-lg uppercase">
                  2222-5555
                </p>
                <div className="cursor-pointer">
                  <WhatsappLogo size={44} color="#ffffff" weight="regular" />
                </div>
                <p className="text-white font-semibold text-lg uppercase">
                  8888-5555
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
// path !== "/" $$ (/path) `/${link.url}`
