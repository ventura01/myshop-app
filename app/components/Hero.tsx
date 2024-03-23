import { motion } from "framer-motion";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 gap-2"
    >
      <div className="flex flex-col gap-y-8 mx-4 md:mx-10 lg:mx-0 lg:mr-24 mt-10 md:mt-0 row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2 mb-20 lg:mb-0 justify-center">
        <h2 className="font-semibold text-heading text-lg">Bienvenido</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-heading text-justify">
          Cuidamos de tu salud y bienestar
        </h1>
        {/* <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-red-500 p-5 rounded-full"
        /> */}
        <p className="text-body text-justify">
          En Farmacia Zulma nos dedicamos a cuidar de tu salud y bienestar.
          Entendemos lo importante que es sentirse bien y estar saludable en
          todas las etapas de la vida. Es por eso que nuestro equipo de expertos
          farmacéuticos está aquí para ofrecerte un servicio excepcional y
          asesoramiento personalizado.
        </p>
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-3 items-center justify-center lg:justify-start">
            <Link href="#info" className="w-full md:w-auto">
              <Button
                title="Llame ahora!"
                buttonStyles="bg-primary w-full md:w-auto hover:bg-[#134761]"
                btnType="button"
                isDisabled={false}
              />
            </Link>
          <Link href="#medicine" className="w-full md:w-auto">
            <Button
              title="Saber más..."
              buttonStyles="bg-secondary w-full md:w-auto hover:bg-[#249693]"
              btnType="button"
              isDisabled={false}
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3 mx-4 md:mx-10 lg:mx-0">
        <div className="col-start-1 col-end-9 relative">
          <Image
            src="/image1.jpg"
            // width={600}
            // height={900}

            fill
            className="object-cover rounded-xl h-full w-full"
            alt="img1"
          />
        </div>
        <div className="col-start-9 col-end-13 grid grid-rows-2 gap-2">
          <div className="col-start-1 col-end-9 grid grid-cols-2 self-end gap-2">
            <div className="col-start-1 col-end-2 relative w-full h-20">
              <Image
                src="/image3.jpg"
                // width={600}
                // height={900}

                fill
                className="object-cover rounded-xl h-full w-full"
                alt="img1"
              />
            </div>
            <div className="bg-yellowLight col-start-2 col-end-4 rounded-2xl rounded-tr-[200px] w-full h-20"></div>
          </div>
          <div className="col-start-1 col-end-9 h-40 relative">
            <Image
              src="/image5.jpg"
              // width={600}
              // height={900}

              fill
              className="object-cover rounded-xl h-full w-full"
              alt="img1"
            />
          </div>
        </div>
        {/* PARTE DE ABAJO */}
        <div className="bg-greenLight rounded-2xl rounded-bl-[200px] w-full h-20 col-start-1 col-end-3"></div>

        <div className="relative w-full h-20 col-start-3 col-end-5">
          <Image
            src="/image4.jpg"
            // width={600}
            // height={900}
            fill
            className="object-cover rounded-xl h-full w-full"
            alt="img1"
          />
        </div>
        <div className="col-start-5 h-40 col-end-9 relative">
          <Image
            src="/image2.jpg"
            // width={600}
            // height={900}

            fill
            className="object-cover rounded-xl h-full w-full"
            alt="img1"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
