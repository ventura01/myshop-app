import { servicesContent } from "@/data/data";
import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";

type Props = {};

const Services = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        ease: "easeInOut",
        type: "spring",
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      id="services"
      className="bg-light py-10 md:py-20 px-4 lg:px-0"
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-5 pb-10 max-w-lg mx-auto">
          <h4 className="text-center font-semibold text-heading">
            {servicesContent.heading.headingSubtitle}
          </h4>
          <h3 className="text-center font-bold text-heading text-5xl">
            {servicesContent.heading.headingTitle}
          </h3>
          <p className="leading-relaxed text-body text-center">
            {servicesContent.heading.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesContent.items.map((item) => (
            <div key={item.title} className="relative p-5 flex gap-3">
              <div className="w-1/6">
                <Image
                  src={item.icon}
                  width={72}
                  height={72}
                  className="object-cover shadow-xl bg-white p-3 rounded-lg"
                  alt={item.title}
                />
              </div>
              <div className="w-5/6 flex flex-col gap-y-1">
                <h4 className="font-semibold text-primary">{item.title}</h4>
                <p className="text-heading text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
