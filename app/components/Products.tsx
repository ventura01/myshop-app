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
            Ofrecemos la mejor calidad
          </h4>
          <h3 className="text-center font-bold text-heading text-4xl">
            Productos
          </h3>
          <p className="leading-relaxed text-body text-center">
            {servicesContent.heading.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-3xl overflow-hidden"
            >
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
              <div className="px-8 py-5 flex justify-between items-center">
                <div>
                  <p className="text-gray-700 text-lg font-semibold">
                    {product.brand}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="text-gray-600 font-semibold">
                    C${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
