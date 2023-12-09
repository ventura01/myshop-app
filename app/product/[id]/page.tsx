import { blogContent } from "@/data/data";
import Image from "next/image";
import React from "react";

type ProductPageProps = {
  params: { id: number };
};

const SingleBlogPage = ({ params }: ProductPageProps) => {
  const { id } = params;

  //! Convertir a Tipo Numero el ID

  const i = blogContent.recentBlog.findIndex((elem) => elem.id == id);
  const data = blogContent.recentBlog[i];
  console.log(id);
  console.log(data);
  console.log(i);
  return (
    <section className="min-h-[calc(100vh-373px)]">
      <div className="grid pt-10 lg:pt-32 md:pt-20 grid-cols-1 lg:grid-cols-2 container max-w-screen-xl mx-auto">
        <div className="pb-10 lg:pb-0">
          <Image
            src={data.featuredImage}
            width={600}
            height={280}
            alt={data.author.name}
            className="object-cover object-center lg:rounded-xl h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-y-8 lg:pl-10 px-4 lg:px-0 lg:max-w-lg">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-4xl text-heading font-bold">{data.title}</h1>
            <p className="text-body">{data.excerpt}</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <div>
              <Image
                src={data.author.img}
                width={72}
                height={72}
                alt={data.author.name}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-sm text-heading font-semibold">
                {data.author.name}
              </h2>
              <h3 className="text-body text-xs">{data.author.jobTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
