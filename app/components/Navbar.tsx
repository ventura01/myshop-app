"use client";

import { navLinks } from "@/data/data";
// import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./ui/Button";
import { List, X } from "@phosphor-icons/react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="container max-w-screen-xl mx-auto py-5">
      <nav className="flex justify-between items-center mx-4 lg:mx-0">
        <div>
          <Link href="/">
            <Image src={"/logo.svg"} width={150} height={50} alt="logo"></Image>
          </Link>
        </div>
        <div className={`${isOpen ? 'flex flex-col gap-y-16 bg-primary w-screen h-screen lg:hidden text-white fixed left-0 top-14 justify-center items-center z-[50]' : 'hidden lg:flex gap-x-5 lg:text-heading'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="capitalize text-sm hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <Button
            title="comprar ahora!"
            buttonStyles="bg-primary hidden lg:block"
            btnType="button"
            isDisabled={false}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden block z-[99]"
          >
            {isOpen ? (
              <X size={24} color="#030303" />
            ) : (
              <List size={24} color="#030303" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
