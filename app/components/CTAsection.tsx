import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section
      id="calltoaction"
      className="py-20 relative overflow-hidden bg-secondary z-10"
    >
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2">
        <div className="md:max-w-xl mx-4 md:mx-auto self-center mb-10 md:mb-0">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-teal-50 text-center">
            ¡Cuida de tu salud
            <br />
            <strong className="uppercase">Hoy mismo!</strong>
          </h3>
        </div>
        <div className="flex flex-col gap-y-10 sm:gap-y-5 sm:max-w-lg lg:mx-auto mx-4">
          <div className="">
            <p className="text-teal-50 font-semibold text-justify text-lg tracking-tight">
              Estamos comprometidos con tu bienestar. Descubre una amplia
              variedad de productos farmacéuticos de calidad diseñados para
              satisfacer tus necesidades de salud y bienestar.
            </p>
          </div>
          <Link href="#info" className="w-full md:w-auto">
            <Button
              title="Llame ahora!"
              buttonStyles="bg-primary w-full md:w-auto hover:bg-white hover:text-primary"
              btnType="button"
              isDisabled={false}
            />
          </Link>
        </div>
      </div>
      <Image
        src="/bgimg.svg"
        alt="bg-image"
        width={1450}
        height={1450}
        className="hidden md:block absolute -left-24 top-32 object-cover object-center opacity-50 mix-blend-luminosity md:-left-56 md:-top-72 -z-[1]"
      />
      <Image
        src="/bgimg.svg"
        alt="bg-image"
        width={1450}
        height={1450}
        className="hidden md:block absolute -left-32 top-32 object-cover object-center opacity-50 mix-blend-luminosity md:left-[600px] md:-top-20 -z-[1]"
      />
    </section>
  );
};

export default CTAsection;
