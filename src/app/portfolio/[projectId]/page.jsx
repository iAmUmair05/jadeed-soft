"use client";

import { projectsData } from "@/data/Project-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProductDetail = ({ params }) => {
  const { projectId } = params;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const project = projectsData?.find((p) => p.id === Number(projectId));

  return (
    <div className="mb-4 sm:mb-8">
      <Link
        href={project.url}
        target="_blank"
        key={project.id}
        className="relative cursor-pointer"
      >
        <div
          onMouseEnter={() => setHoveredIndex(project.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative"
        >
          <PhotoProvider>
            <PhotoView src={project.images[0] || ""}>
              <Image
                src={project.images[0] || "/placeholder-image.jpg"}
                alt={project?.title || "Project Image"}
                width={1000}
                height={1000}
                className="w-[100vw] border-4 border-neutral-400 mix-blend-normal object-cover bg-center h-[60vh] sm:h-[70vh] cursor-pointer"
              />
            </PhotoView>
          </PhotoProvider>

          <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60"></div>

          {hoveredIndex === project.id && (
            <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 flex flex-col justify-center items-center">
              <h1 className="text-white text-2xl tracking-tight font-bold">
                {project.title}
              </h1>
              <p className="text-white">Click to view project</p>
            </div>
          )}
        </div>
      </Link>

      <div className="my-10 flex justify-center gap-4 flex-wrap items-center">
        <PhotoProvider>
          {project.images.slice(0, 6).map((image, index) => (
            <PhotoView key={index} src={image}>
              <div>
                <Image
                  src={image}
                  alt={project?.title || "Project Image"}
                  width={100}
                  height={100}
                  className="border w-[120px] h-[80px] object-cover bg-center cursor-pointer"
                />
              </div>
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

      <div className="my-10">
        <h1 className="main-heading py-10">About Project</h1>
        <p className="text-para sm:w-[80vw] w-[90vw] mx-auto tracking-wide text-center">
          {project?.description || "No description available."}
        </p>
      </div>

      <div className="my-10">
        <h1 className="main-heading py-10">Challenges</h1>
        <p className="text-para sm:w-[80vw] w-[90vw] mx-auto tracking-wide text-center">
          {project?.challenge || "No challenges specified."}
        </p>
      </div>

      <div className="w-full my-10">
        <h1 className="main-heading py-10">Technologies</h1>

        <div className="w-[90vw] mx-auto flex gap-4 flex-wrap justify-center items-center">
          {project?.tools?.map((tag, i) => (
            <div
              key={i}
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer bg-cyan-700"
            >
              <div className="h-full w-full rounded-lg border border-para bg-darkish shadow-none shadow-gray-50 group-hover:border-redish transition-all duration-500">
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <p className="text-para text-sm sm:text-lg">{tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
