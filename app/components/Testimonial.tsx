import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <section id="testimonials" className="bg-light py-20">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-y-8 px-5">
          <h3 className="text-4xl text-heading font-bold">
            Hear What Our Customers Say
          </h3>
          <p className="text-body leading-relaxed">
            From heartwarming testimonials to glowing reviews, these voices
            reflect the trust and confidence our customers place in us. Let
            their words speak volumes about the extraordinary experiences that
            await you with
          </p>
          <div className="flex gap-x-3 items-center justify-center lg:justify-start">
            <Button
              title="Comprar ahora!"
              buttonStyles="bg-primary hover:bg-[#134761]"
              btnType="button"
              isDisabled={false}
            />
          </div>
        </div>
        <div className="p-5 flex flex-col gap-y-4">
          <div className="bg-white rounded-lg flex flex-col gap-y-3 p-8">
            <div className="flex relative items-center gap-x-3">
              <div>
                <Image
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1108.jpg"
                  alt="testimonial-img"
                  className="object-cover rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <div className="bg-primary inline-block rounded-full py-1 px-2 absolute bottom-0 left-14">
                  <span className="text-white text-xl font-black">...</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading">
                  Jane Cooper
                </h4>
                <h3 className="text-xs font-light text-body">
                  Lake Marcelleberg
                </h3>
              </div>
            </div>
            <div>
              <blockquote className="text-sm leading-relaxed ">
                “With Family Home Security, I feel at ease knowing my family and
                home are protected 24/7. The system is user-friendly, and their
                customer support is fantastic!”
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col gap-y-3 p-8">
            <div className="flex relative items-center gap-x-3">
              <div>
                <Image
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1089.jpg"
                  alt="testimonial-img"
                  className="object-cover rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <div className="bg-primary inline-block rounded-full py-1 px-2 absolute bottom-0 left-14">
                  <span className="text-white text-xl font-black">...</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading">Randi</h4>
                <h3 className="text-xs font-light text-body">Prosaccoburgh</h3>
              </div>
            </div>
            <div>
              <blockquote className="text-sm leading-relaxed ">
                “With Family Home Security, I feel at ease knowing my family and
                home are protected 24/7. The system is user-friendly, and their
                customer support is fantastic!”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="flex gap-y-8 flex-col px-5 lg:px-0">
          <div className="bg-orange-500 rounded-2xl rounded-tr-[200px] w-20 h-20 hidden lg:flex"></div>
          <div className="bg-white rounded-lg flex flex-col gap-y-3 p-8">
            <div className="flex relative items-center gap-x-3">
              <div>
                <Image
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg"
                  alt="testimonial-img"
                  className="object-cover rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <div className="bg-primary inline-block rounded-full py-1 px-2 absolute bottom-0 left-14">
                  <span className="text-white text-xl font-black">...</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-heading">Terry Moore</h4>
                <h3 className="text-xs font-light text-body">Kirkland</h3>
              </div>
            </div>
            <div>
              <blockquote className="text-sm leading-relaxed ">
                “With Family Home Security, I feel at ease knowing my family and
                home are protected 24/7. The system is user-friendly, and their
                customer support is fantastic!”
              </blockquote>
            </div>
          </div>
          <div className="bg-green-300 rounded-full w-16 h-16 hidden lg:flex"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
