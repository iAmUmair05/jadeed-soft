"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import falcoqLogo from "../../public/falcoq-logo2.png";
import Image from "next/image";
import CustomButton from "@/ui/CustomButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavbarToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 160 ? setNavColor(true) : setNavColor(false);
    });
  }, []);

  const closeMobileNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Why Choose Us", path: "/whyChooseUs" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full backdrop-blur-[4px] bg-primary bg-opacity-20 ${
          navColor ? "py-2 duration-200" : "py-3 shadow-lg shadow-cyan-500/10"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] px-3 mx-auto">
          <Link href="/" className="flex space-x-1.5 items-center">
            <Image
              src={falcoqLogo}
              alt="Logo"
              width={50}
              height={50}
              className="text-4xl rounded-full font-bold"
            />
            <div className="text-para">
              <p className="font-semibold text-para">JADEED SOFT</p>
              <p className="font-thin lg:block hidden ">TECHNOLOGIES</p>
            </div>
          </Link>

          <ul
            className={`md:flex hidden justify-end items-center space-x-6 w-full cursor-pointer`}
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={closeMobileNavbar}
                className={`relative group font-xl text-white ${
                  path === pathname
                    ? "text-white"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {name}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-heading transition-all duration-300 
      ${
        path === pathname
          ? "w-full left-0 transform -translate-x-1/2"
          : "w-0 group-hover:w-full group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2"
      }`}
                ></span>
              </Link>
            ))}

            <li>
              <CustomButton
                onClick={() => router.push("/contact")}
                className={`${
                  pathname === "/contact" ? "bg-cyan-700" : "bg-heading"
                }
                py-2 px-4 font-xl transition-all`}
                text={"Get in Touch"}
              />
            </li>
          </ul>

          <div className="md:hidden flex flex-col justify-end">
            <button onClick={handleNavbarToggle}>
              {mobileDrawerOpen ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-para text-2xl"
                />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-para text-2xl" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <ul
            className={`md:hidden duration-300 z-20 text-white w-full h-screen pt-8 fixed flex  items-center flex-col bg-primary bg-opacity-90 top-[67px] ${
              mobileDrawerOpen ? "right-[0%]" : "right-[-100%]"
            }`}
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={closeMobileNavbar}
                className="p-2 font-xl text-white"
              >
                {name}
              </Link>
            ))}
            <li>
              <CustomButton
                onClick={() => {
                  router.push("/contact");
                  closeMobileNavbar();
                }}
                className={`${
                  pathname === "/contact" ? "bg-cyan-700" : "bg-heading"
                }
                py-2 px-4 font-xl transition-all`}
                text={"Get in Touch"}
              />
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
