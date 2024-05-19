"use client";

import React from "react";
import Stack from "./stack";
import { links } from "./navbar";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-background border-t p-4 flex items-center justify-center">
      <div className="md:container grid md:grid-cols-[2fr_1fr] gap-6 place-items-center">
        <p className="text-sm w-full">
          At ALT Educational Consult, we specialize in helping students like you
          realize their dreams of studying abroad. With our years of experience
          and a team of dedicated experts, we have successfully assisted
          numerous students in gaining admission into A-Level, Foundation,
          Undergraduate, Postgraduate and PHD degree Programs at top and
          world-ranked institutions around the world including United Kingdom,
          United States of America, Canada, and Ireland.
        </p>

        <Stack variant="vertical" className="gap-2 w-full">
          <h4 className="text-left md:text-right">Quick Links</h4>

          <Stack variant="vertical" className="gap-1 text-left md:text-right">
            {links.map((link) => (
              <Link
                key={`footer_link-${link.title}`}
                href={link.path}
                className="text-sm"
              >
                {link.title}
              </Link>
            ))}
          </Stack>
        </Stack>
      </div>
    </footer>
  );
}

export default Footer;
