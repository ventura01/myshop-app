import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section id="calltoaction" className="py-20 bg-secondary">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:max-w-md mx-4 md:mx-auto self-center mb-10 md:mb-0">
          <h3 className="text-3xl md:text-5xl font-semibold text-teal-50 text-center">
            ¡Cuida de tu salud
            <br /><strong>hoy mismo!</strong>
          </h3>
        </div>
        <div className="flex flex-col gap-y-10 sm:gap-y-5 sm:max-w-lg lg:mx-auto mx-4">
          <div className="">
            <p className="text-teal-50 text-lg text-justify tracking-tight">
              En Farmacia Zulmita, estamos comprometidos con tu
              bienestar. Descubre una amplia gama de productos farmacéuticos de
              calidad y servicios personalizados diseñados para satisfacer tus
              necesidades de salud y bienestar.
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
    </section>
  );
};

export default CTAsection;
