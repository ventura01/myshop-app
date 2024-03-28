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
import MedicineTypes from "./components/MedicineTypes";
import CTAsection from "./components/CTAsection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Products />
      <MedicineTypes />
      <Contact />
      <CTAsection />
      {/* <Solutions /> */}
      {/* <Testimonial /> */}
      {/* <RecentBlog /> */}
    </>
  );
}
