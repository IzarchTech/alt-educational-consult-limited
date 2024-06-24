"use client";

import React from "react";
import Stack from "./stack";
import { links } from "./navbar";
import Link from "next/link";
import Spacer from "./spacer";
import { cn } from "@/lib/utils";

function Footer() {
  return (
    <footer className="w-full border-t flex flex-col">
      <div className="w-full items-center justify-center bg-slate-800 text-slate-100 px-4 py-12">
        <div className="md:container grid md:grid-cols-[2fr_1fr] gap-6 place-items-center">
          <p className="text-sm w-full">
            At ALT Educational Consult, we specialize in helping students like
            you realize their dreams of studying abroad. With our years of
            experience and a team of dedicated experts, we have successfully
            assisted numerous students in gaining admission into...
            <Link href="/about_us" className="hover:font-bold">
              Read More
            </Link>
          </p>

          <Stack variant="vertical" className="gap-2 w-full">
            <h4 className="text-left md:text-right">Quick Links</h4>

            <Stack className="gap-1 text-left md:text-right flex-col lg:flex-row">
              <Spacer />
              {links.map((link, idx) => (
                <Stack
                  key={`footer_link-${link.title}`}
                  className={cn(
                    "items-center gap-2",
                    idx !== links.length - 1 && "pr-2"
                  )}
                >
                  <div className="size-1 rounded-full bg-slate-100" />
                  <Link href={link.path} className="text-sm">
                    {link.title}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </div>
      </div>
      <div className="w-full py-4 text-center bg-slate-900 text-slate-100 text-sm italic">
        <p>ALT Educational Consult Limited &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
