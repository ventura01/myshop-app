import { Check } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

type Props = {};

const Solutions = (props: Props) => {
  return (
    <section id="solutions" className="py-20 bg-light overflow-x-hidden">
      <div className="container max-w-screen-xl mx-auto">
        <div className="relative mb-10 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-start-1 col-end-7 relative grid grid-cols-6 gap-2">
                <div className="col-start-1 col-end-7">
                  <Image
                    src="/solution-img-1.jpg"
                    width={356}
                    height={376}
                    alt="solution-image"
                    className="object-cover h-96 w-full rounded-xl"
                  />
                </div>
                <div className="rounded-xl col-start-2 col-end-4 h-24 w-full rounded-bl-full bg-greenLight "></div>
                <div className="relative col-start-4 col-end-7">
                  <Image
                    src="/solution-img-3.jpg"
                    width={356}
                    height={376}
                    alt="solution-image"
                    className="object-cover h-36 w-full rounded-xl"
                  />
                </div>
              </div>
              <div className="col-start-7 col-end-13 grid grid-cols-6 gap-2 row-start-1 row-end-2">
                <div className="rounded-xl col-start-1 col-end-3 h-24 w-24 rounded-tr-full bg-purpleLight self-end"></div>
                <div className="relative col-start-1 col-end-6 self-end">
                  <Image
                    src="/solution-img-2.jpg"
                    width={356}
                    height={376}
                    alt="solution-image"
                    className="object-cover h-60 w-full rounded-xl"
                  />
                </div>
                <div className="bg-white flex flex-col p-10 shadow-xl rounded-xl col-start-1 col-end-6">
                  <h2 className="font-black text-3xl text-primary">25+</h2>
                  <p className="text-body">Años de experiencia</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 px-14">
              <h3 className="text-heading font-semibold text-lg">
                Our Solutions
              </h3>
              <h2 className="text-heading text-4xl font-bold">
                From safeguarding your home with state-of-the-art alarm systems
              </h2>
              <p className="text-body">
                From safeguarding your home with state-of-the-art alarm systems
                to offering reliable insurance options, we ensure that your
                family is protected in every aspect of life. With our Family
                Security Plan, you can rest easy knowing that you&apos;ve taken
                the necessary steps to secure a brighter future for your family.
                Trust us to be your partner in safeguarding what matters most –
                your family&apos;s well-being.
              </p>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 py-5">
                  <div className="flex gap-x-2">
                    <Check
                      className="bg-primary rounded-full p-1"
                      size={24}
                      color="#fff"
                    />
                    <p>Home Fire Safety</p>
                  </div>
                  <div className="flex gap-x-2">
                    <Check
                      className="bg-primary rounded-full p-1"
                      size={24}
                      color="#fff"
                    />
                    <p>Emergency Preparedness</p>
                  </div>
                  <div className="flex gap-x-2">
                    <Check
                      className="bg-primary rounded-full p-1"
                      size={24}
                      color="#fff"
                    />
                    <p>Cybersecurity Solutions</p>
                  </div>
                  <div className="flex gap-x-2">
                    <Check
                      className="bg-primary rounded-full p-1"
                      size={24}
                      color="#fff"
                    />
                    <p>Identity Theft Protection</p>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
