"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { blogContent } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const RecentBlog = (props: Props) => {
  const [setslideIndex, setSetslideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef<number | null>(null);

  return (
    <section id="blog" className="bg-light py-10 md:py-20 overflow-x-hidden">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-y-6 px-4 lg:px-0 md:w-1/3">
            <h3 className="text-heading font-semibold">
              {blogContent.heading.headingSubtitle}
            </h3>
            <h2 className="text-heading font-bold text-3xl">
              {blogContent.heading.headingTitle}
            </h2>
            <p className="text-body leading-relaxed">
              {blogContent.heading.description}
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex gap-x-4 justify-center items-center h-full">
              <div
                className={`inline-flex group cursor-pointer transition-all duration-300 ease-in-out`}
              >
                <CaretLeft
                  size={32}
                  color="#1D5B79"
                  className={`bg-slate-300 p-1 rounded-full transition-all duration-300 ease-in-out group-hover:fill-amber-500`}
                />
              </div>
              <div className="inline-block cursor-pointer">
                <CaretRight
                  size={32}
                  color="#1D5B79"
                  className="bg-slate-300 p-1 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-y-0 gap-x-0 lg:gap-x-3 pt-10">
            {blogContent.recentBlog.map((blog) => (
              <div
                key={blog.author.name}
                className="bg-white rounded-lg p-5 flex flex-col gap-y-5"
              >
                <div>
                  <Image
                    src={blog.featuredImage}
                    width={600}
                    height={280}
                    alt="blog-img"
                    className="rounded-lg"
                  />
                </div>
                <Link href={blog.featuredImage} className="cursor-pointer">
                  <div className="flex flex-col gap-y-5">
                    <h4 className="text-lg font-semibold text-heading">
                      {blog.title}
                    </h4>
                    <blockquote className="text-body ">
                      {blog.excerpt.substring(0, 120) + "..."}
                    </blockquote>
                  </div>
                </Link>
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image
                      src={blog.author.img}
                      width={60}
                      height={60}
                      alt={blog.author.name}
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <h5 className="text-sm font-bold text-heading">
                      {blog.author.name}
                    </h5>
                    <p className="text-xs font-semibold text-body">
                      {blog.author.jobTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
