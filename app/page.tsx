"use client";

// import { AirplaneInFlight } from "@phosphor-icons/react";
// import Image from "next/image";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Products";
import Solutions from "./components/Solutions";
import Testimonial from "./components/Testimonial";
import RecentBlog from "./components/RecentBlog";
import Products from "./components/Products";
import Ribbon from "./components/Ribbon";
import MedicineTypes from "./components/MedicineTypes";

export default function Home() {
  return (
    <>
      <Ribbon />
      <Hero />
      {/* <Stats /> */}
      <Products />
      <MedicineTypes />
      {/* <Solutions /> */}
      {/* <Testimonial /> */}
      {/* <RecentBlog /> */}
    </>
  );
}
