"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import Link from "next/link";
import Stack from "./stack";

export const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about_us",
  },
  {
    title: "Our Services",
    path: "/our_services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact_us",
  },
];

function Navbar() {
  return (
    <nav className="w-full p-4 lg:p-6 flex justify-between items-center shadow-md border-b dark:border-b-primary">
      <Link href="/" className="h-14 relative object-center md:w-56 w-36">
        <Image
          src={logo}
          alt="Alt Education Limited Logo"
          objectFit="contain"
          sizes="(max-width: 144px)"
          className="dark:hidden"
          fill
          priority
        />
        <Image
          src={logoDark}
          alt="Alt Education Limited Logo"
          objectFit="contain"
          sizes="(max-width: 144px)"
          className="dark:block hidden dark:shadow-md"
          fill
          priority
        />
      </Link>

      <Stack className="gap-4 hidden md:flex">
        {links.map((link) => (
          <Link
            className="transition-all duration-300 hover:font-semibold hover:text-primary hover:scale-105 ease-in-out"
            key={link.title}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </nav>
  );
}

export default Navbar;
