import { products, servicesContent } from "@/data/data";
import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";

type Props = {};

const Products = (props: Props) => {
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
        <div className="flex flex-col gap-y-5 pb-10 max-w-2xl mx-auto">
          <h4 className="text-center font-semibold text-heading">
            {servicesContent.heading.headingSubtitle}
          </h4>
          <h3 className="text-center font-bold text-heading text-4xl">
            {servicesContent.heading.headingTitle}
          </h3>
          <p className="leading-relaxed text-body text-justify">
            {servicesContent.heading.description}
          </p>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesContent.items.map((item) => (
            <div
              key={item.title}
              className="relative p-2 sm:p-5 flex flex-col items-center sm:items-start sm:flex-row gap-3"
            >
              <div className="sm:w-1/6">
                <Image
                  src={item.icon}
                  width={72}
                  height={72}
                  className="object-cover shadow-xl bg-white p-3 rounded-lg"
                  alt={item.title}
                />
              </div>
              <div className="sm:w-5/6 flex flex-col justify-center gap-y-1">
                <h4 className="font-semibold text-primary">{item.title}</h4>
                <p className="text-heading text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 mt-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-3xl overflow-hidden">
              {product.image && (
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    // width={200}
                    // height={200}

                    className="object-cover"
                  />
                </div>
              )}
              <div className="px-8 py-5">
                <p className="text-gray-700 text-lg font-semibold">{product.brand}</p>
                <div className="flex justify-end"><span className="text-gray-800 font-semibold">C${product.price}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
