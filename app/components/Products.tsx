import { products, servicesContent } from "@/data/data";
import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
// import { producto } from "@/data/producto";
import { Product } from "@/data/interfaces";

// type Props = {};

// const Products = (props: Props) => {
  
  
  type Props = {};
  
  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/products`,{cache:"no-store"})
    if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json()
}

const Products =  async (props: Props) => {
    const router = useRouter();
  const products:Product = await getData()
  console.log(products)
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
      id="products"
      className="bg-light py-20 px-4 lg:px-0"
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-5 pb-10 max-w-2xl mx-auto">
          <h4 className="text-center font-semibold text-heading">
            Ofrecemos la mejor calidad
          </h4>
          <h3 className="text-center font-bold text-heading text-4xl">
            Productos
          </h3>
          <p className="leading-relaxed text-body text-justify">
            {servicesContent.heading.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-3xl overflow-hidden"
            >
              {product.image && (
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.brand}
                    fill
                    // width={200}
                    // height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="px-5 py-5 flex flex-col justify-between">
                <div>
                  <p className="text-gray-700 text-lg font-semibold">
                    {product.brand}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {product.desc.substring(0, 64)}...
                  </p>
                  <p className="text-gray-500 text-sm">
                    {product.category}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="text-gray-600 text-lg font-bold my-3">
                    {product.price}
                  </span>
                </div>
                <div className="">
                  <Button
                    title="Ver producto"
                    buttonStyles="w-full border-2 hover:text-[#249693] text-white hover:border-secondary border-transparent bg-[#249693] hover:bg-white"
                    btnType="button"
                    isDisabled={false}
                    // handleClick={() => router.push(`/product/${product.id}`)}
                  />
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
