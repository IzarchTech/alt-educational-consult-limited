"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type NavMenu = {
  title: string;
  path: string;
};

const NAV_MENU: NavMenu[] = [
  { title: "Who We Are", path: "/" },
  { title: "Our Services", path: "/" },
  { title: "Book a Consultation", path: "/" },
  { title: "Contact Us Now", path: "/" },
];

function Navbar() {
  return (
    <header className="w-full flex items-center border-[#FA824C] border-b-4 shadow-md">
      <nav className="container p-2 bg-background flex justify-between items-center">
        <Link href="/" className="block">
          <img
            className="h-14"
            src="/assets/logo.png"
            alt="Alt Educational Consult Logo"
          />
        </Link>

        <div className="hidden lg:flex gap-4">
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
      </nav>
    </header>
  );
}

export default Navbar;
