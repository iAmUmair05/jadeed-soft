"use client";
import React from "react";
import Image from "next/image";
import { blogsData } from "@/data/Blogs-data";

const BlogDetail = ({ params }) => {
  const { blogId } = params;
  const blog = blogsData?.find((blog) => blog.id === Number(blogId));

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="custom-container max-w-4xl mx-auto mt-24 p-6">
      <h1 className="text-3xl font-bold text-center text-heading">
        {blog.title}
      </h1>

      <div className="relative w-full h-72 mt-6 shadow-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <p className="text-sm text-white mt-2">{blog.date}</p>

      <h2 className="main-heading py-10">Description</h2>
      <p className="text-lg text-white leading-relaxed mt-4">
        {blog.description}
      </p>

      <div className="mt-8">
        <h2 className="main-heading py-10">Content</h2>
        <div
          className="prose text-white mt-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <h2 className="text-2xl font-semibold text-white mt-4">
        <span className="text-heading">Auther</span>: {blog.author}
      </h2>
      <p className="text-sm text-white mt-2">{blog.authorBio}</p>
    </div>
  );
};

export default BlogDetail;
