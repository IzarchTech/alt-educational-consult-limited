"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

type NavMenu = {
  title: string;
  path: string;
  spa?: boolean;
};

const NAV_MENU: NavMenu[] = [
  { title: "Who We Are", path: "/#who_we_are", spa: true },
  { title: "Our Services", path: "/#our_services", spa: true },
  { title: "Book a Consultation", path: "/" },
  { title: "Contact Us Now", path: "/contact_us" },
];

function MobileNav({
  isOpen,
  onClose,
}: Readonly<{ isOpen: boolean; onClose: () => void }>) {
  if (!isOpen) return null;
  return (
    <div className="h-screen w-screen bg-black/70 absolute top-0 left-0 z-[999] flex">
      <div className="w-2/5 self-end h-full" onClick={onClose}></div>
      <div className="flex-1 self-end h-full bg-gray-100 flex flex-col gap-4 p-2">
        <button onClick={onClose}>
          <XMarkIcon className="w-6 h-6" />
        </button>
        {NAV_MENU.map((menu) => (
          <Link
            key={menu.title}
            className="border-transparent border-b-2 hover:border-[#FA824C] delay-150 duration-700 hover:scale-110 transition ease-in-out"
            href={menu.path}
            onClick={onClose}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClose = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="w-full flex items-center border-[#FA824C] border-b-4 shadow-md bg-background">
        <nav className="container flex items-center justify-between p-2 bg-background">
          <Link href="/" className="block">
            <img
              className="h-14"
              src="/assets/logo.png"
              alt="Alt Educational Consult Logo"
            />
          </Link>

          <div className="hidden gap-4 md:flex">
            {NAV_MENU.map((menu) => (
              <Link
                key={menu.title}
                className="border-transparent border-b-2 hover:border-[#FA824C] delay-150 duration-700 hover:scale-110 transition ease-in-out"
                href={menu.path}
              >
                {menu.title}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden border-gray-600 hover:bg-gray-700 focus:ring-4 focus:text-white focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-gray-800"
            type="button"
            aria-controls="drawer-navigation"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </nav>
      </header>
      <MobileNav isOpen={isMobileMenuOpen} onClose={onClose} />
    </>
  );
}

export default Navbar;
