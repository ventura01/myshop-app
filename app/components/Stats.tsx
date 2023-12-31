import { CaretRight } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

type Props = {};

const Stats = (props: Props) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 99, { duration: 5 });

    return animation.stop;

    // return controls.stop
  }, [count]);
  return (
    <section
      id="stats"
      className="container max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 justify-center items-center py-10 md:py-20 relative"
    >
      {/* <h3 className="text-heading font-semibold text-lg">Our Stadistics</h3> */}
      <div>
        <div className="hidden lg:flex flex-col gap-y-8 absolute top-0 -left-20 lg:-translate-y-1/2 -lg:translate-x-1/2">
          <div className="flex gap-x-8">
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            {/* <div className="h-2 w-2 bg-gray-700"></div> */}
          </div>
          <div className="flex gap-x-8">
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            {/* <div className="h-2 w-2 bg-gray-700"></div> */}
          </div>
          <div className="flex gap-x-8">
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            {/* <div className="h-2 w-2 bg-gray-700"></div> */}
          </div>
          <div className="flex gap-x-8">
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            {/* <div className="h-2 w-2 bg-gray-700"></div> */}
          </div>
          {/* 
          <div className="flex gap-x-5">
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
            <div className="h-2 w-2 bg-gray-700"></div>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 row-start-1 row-end-2 lg:row-start-1 lg:row-end-2 col-start-1 col-end-6 lg:col-start-1 lg:col-end-2 items-center py-10 lg:py-0">
        <div className="flex items-center text-4xl text-primary font-black">
          <motion.h3 className="text-4xl text-primary font-black">
            {rounded}
          </motion.h3>
          <span>%</span>
        </div>
        <p className="text-slate-600 font-semibold">Child Safety Solutions</p>
      </div>
      <div className="flex flex-col gap-y-3 row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 col-start-1 col-end-6 lg:col-start-2 lg:col-end-3 items-center py-10 lg:py-0">
        <h3 className="text-4xl text-primary font-black">3,912</h3>
        <p className="text-slate-600 font-semibold">Happy Customers</p>
      </div>
      <div className="flex flex-col gap-y-3 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 col-start-1 col-end-6 lg:col-start-3 lg:col-end-4 items-center py-10 lg:py-0">
        <h3 className="text-4xl text-primary font-black">4.8</h3>
        <p className="text-slate-600 font-semibold">Rating reviews</p>
      </div>
      <div className="p-8 bg-light flex flex-col gap-y-3 row-start-4 row-end-5 lg:row-start-1 lg:row-end-2 col-start-1 col-end-6 lg:col-start-4 lg:col-end-6">
        <h4 className="font-semibold text-heading text-lg">
          Get started with our service?
        </h4>
        <p className="text-slate-600">
          We understand that protecting your loved ones is of utmost importance.
        </p>
        <div>
          <button className="flex justify-center text-primary font-semibold items-center gap-x-3 ring-2 ring-primary rounded-full px-4 py-1 group">
            Ver info{" "}
            <span>
              <CaretRight
                className="bg-primary group-hover:bg-secondary rounded-full p-2"
                size={28}
                color="#fff"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
