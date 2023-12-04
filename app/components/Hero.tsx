import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
      <div className="flex flex-col gap-y-8 mx-4 md:mx-10 lg:mx-0 lg:mr-10 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2 mb-20 lg:mb-0 justify-center">
        <h2 className="font-bold text-heading text-lg">Welcome to FamSec</h2>
        <h1 className="text-6xl font-bold text-heading lg:text-justify">
          Protecting Families, Securing Futures
        </h1>
        <p className="font-light text-primary text-sm text-justify">
          We understand that protecting your loved ones is of utmost importance.
          That&apos;s why we are dedicated to providing comprehensive solutions
          tailored to your famil&apos;s unique needs. Our expert team is
          committed to creating a solid foundation of security and peace of mind
          for you and your loved ones.
        </p>
        <div className="flex gap-x-3 items-center justify-center lg:justify-start">
          <Button
            title="Comprar ahora!"
            buttonStyles="bg-primary hover:bg-[#134761]"
            btnType="button"
            isDisabled={false}
          />
          <Button
            title="Saber más..."
            buttonStyles="bg-secondary hover:bg-[#249693]"
            btnType="button"
            isDisabled={false}
          />
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
        <div className="col-start-5 h-60 col-end-9 relative">
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
    </section>
  );
};

export default Hero;
