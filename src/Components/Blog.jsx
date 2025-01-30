"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/Blogs-data";

const Blog = () => {
  return (
    <div className="custom-container p-2 sm:my-2 my-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogsData?.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div className="bg-secondary rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-40">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="rounded-t-lg object-cover hover:scale-110 duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-heading text-lg font-semibold text-redish">
                    {blog.title}
                  </h3>
                  <p className="text-para mt-2 line-clamp-2">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-sm text-heading hover:underline mt-2 inline-block"
                  >
                    Learn More
                  </Link>
                  <div className="text-sm text-para mt-4">{blog.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
