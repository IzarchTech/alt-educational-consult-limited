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
    <header className="w-full flex items-center border-[#FA824C] border-b-4 shadow-md bg-background">
      <nav className="container flex items-center justify-between p-2 bg-background">
        <Link href="/" className="block">
          <img
            className="h-14"
            src="/assets/logo.png"
            alt="Alt Educational Consult Logo"
          />
        </Link>

        <div className="hidden gap-4 lg:flex">
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
