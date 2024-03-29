// "use client";

import Button from "@/app/components/ui/Button";
import { Product } from "@/data/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type IParams = {
  id?: string;
};
const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(params);
  // const router = useRouter();
  const singleProduct: Product = await getData(id);
  return (
    <section className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-20">
      <div className="relative w-full flex justify-center aspect-square h-full overflow-hidden">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt={singleProduct.brand}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        )}
      </div>

      <div className="flex flex-col gap-y-5 md:max-w-md md:mx-8 justify-center mx-4 lg:mx-0">
        <h1 className="text-gray-700 text-3xl font-bold">
          {singleProduct.brand}
        </h1>
        <hr className="w-[30%]" />
        <p className="text-body text-justify">{singleProduct.desc}</p>
        <hr className="w-[30%]" />
        {singleProduct.inStock ? (
          <p className="text-secondary text-sm font-semibold">En stock</p>
        ) : (
          <p className="text-red-600">Sin stock</p>
        )}
        <hr className="w-[30%]" />
        <span className="text-xl text-gray-700 font-semibold">
          C${singleProduct.price}
        </span>
        <div>
          <Button
            title="Regresar"
            buttonStyles="bg-secondary w-full md:w-auto mt-2 hover:bg-white hover:border-2 border-primary hover:text-primary"
            btnType="button"
            isDisabled={false}
            // handleClick={() => router.push("/cart")}
            // handleClick={() => router.push("/")}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
