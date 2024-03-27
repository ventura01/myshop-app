"use client";

import { producto } from "@/data/producto";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/ui/Button";

type Props = {};

const CartPage = (props: Props) => {
  const [cartQty, setCartQty] = useState(1);
  return (
    <div className="container relative overflow-x-auto max-w-screen-md mx-auto py-20 flex flex-col md:gap-y-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="">
            <th scope="col" className="px-6 py-3 text-center"></th>
            <th scope="col" className="px-6 py-3 text-center">
              Marca
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Precio
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Cantidad
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td>
              <div className="relative w-32 h-32">
                <Image
                  src={producto.image}
                  alt={producto.brand}
                  className="object-cover"
                  fill
                />
              </div>
            </td>
            <td className="text-center">
              <p className="font-semibold">{producto.brand}</p>
            </td>
            <td className="text-center">
              <span className="text-gray-700 font-semibold">
                {producto.price}
              </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center items-center">
                <button
                  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <div>
                  <input
                    type="number"
                    id="first_product"
                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              {/* <p className="text-gray-700 font-semibold">{cartQty}</p> */}
            </td>
            <td className="text-center">
              <p className="text-gray-700 font-semibold">
                {cartQty * producto.price}
              </p>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td>
              <div className="relative w-32 h-32">
                <Image
                  src="/img/prod-2.jpg"
                  alt={producto.brand}
                  className="object-cover"
                  fill
                />
              </div>
            </td>
            <td className="text-center">
              <p className="font-semibold">Alka-Seltzer</p>
            </td>
            <td className="text-center">
              <span className="text-gray-700 font-semibold">720</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center items-center">
                <button
                  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <div>
                  <input
                    type="number"
                    id="first_product"
                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              {/* <p className="text-gray-700 font-semibold">{cartQty}</p> */}
            </td>
            <td className="text-center">
              <p className="text-gray-700 font-semibold">720</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <th
              scope="row"
              className="px-6 py-3 text-base font-bold text-center"
            >
              Total
            </th>
            <td className="px-6 py-3 text-center">2</td>
            <td className="px-6 py-3 text-center font-bold">1220.75</td>
          </tr>
        </tfoot>
      </table>
      <div className="self-end">
        <Button
          title="Pagar"
          buttonStyles="uppercase border-2 hover:text-[#249693] text-white hover:border-secondary border-transparent bg-[#249693] hover:bg-white"
          btnType="button"
          isDisabled={false}
        //   handleClick={() => router.push(`/product/${producto.id}`)}
        />
      </div>
    </div>
  );
};

export default CartPage;
