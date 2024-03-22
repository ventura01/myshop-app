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

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Products />
      {/* <Solutions /> */}
      {/* <Testimonial /> */}
      {/* <RecentBlog /> */}
    </>
  );
}
