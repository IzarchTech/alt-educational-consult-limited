"use client";

import React from "react";
import Stack from "./stack";
import { links } from "./navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "./input";
import { Button } from "./button";

function Footer() {
  return (
    <footer className="w-full border-t flex flex-col">
      <div className="w-full items-center justify-center bg-slate-800 text-slate-100 px-4 py-12">
        <div className="md:container grid md:grid-cols-[repeat(2,auto)] lg:grid-cols-[65ch_auto_auto_auto] gap-6">
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
            <h4 className="text-left">Company</h4>

            <Stack className="gap-1 text-left md:text-right flex-col text-xs">
              {links
                .filter((link) => link.path !== "/our_services")
                .map((link, idx) => (
                  <Stack
                    key={`footer_link-${link.title}`}
                    className={cn(
                      "items-center gap-2",
                      idx !== links.length - 1 && "pr-2"
                    )}
                  >
                    <div className="size-1 rounded-full bg-slate-100" />
                    <Link href={link.path}>{link.title}</Link>
                  </Stack>
                ))}
            </Stack>
          </Stack>

          <Stack variant="vertical" className="gap-2 w-full">
            <h4 className="text-left">Our Services</h4>

            <Stack className="gap-1 text-left text-xs flex-col">
              <Link href="/our_services">
                Graduate & Undergraduate Admissions
              </Link>
              <Link href="/our_services">Funding & Scholarships Advice</Link>
              <Link href="/our_services">Personal Statement Review</Link>
              <Link href="/our_services">Visa Application & Support</Link>{" "}
              <p>Accommodation Support</p>
              <Link href="/our_services">Foreign Currency Payment Support</Link>
              <Link href="/our_services">Post Arrival Support</Link>
              <Link href="/our_services">General Consultancy</Link>
            </Stack>
          </Stack>
          <Stack variant="vertical">
            <h5 className="font-semibold text-lg">Socials</h5>
            <Stack variant="horizontal" className="gap-2">
              <Link
                href="https://www.instagram.com/alt.educationalconsult/profilecard/?igsh=MXQzZjExZ2p3cjdtcA=="
                target="_blank"
              >
                <Image
                  src="/assets/instagram.svg"
                  alt="instagram logo"
                  width={32}
                  height={32}
                  className="hover:scale-105 duration-500 ease-linear transition-all cursor-pointer"
                />
              </Link>
              <Link
                href="https://x.com/consultalt?s=21&t=2izlpzyqJ3lVrY118ViSNQ"
                target="_blank"
              >
                <Image
                  src="/assets/x.svg"
                  alt="x logo"
                  width={32}
                  height={32}
                  className="hover:scale-105 duration-500 ease-linear transition-all cursor-pointer bg-slate-50"
                />
              </Link>
            </Stack>

            <Stack variant="vertical" className="mt-4">
              <h6 className="font-medium">Get Our Latest Updates</h6>
              <Stack variant="vertical" className="gap-2">
                <p className="md:text-xs">
                  Subscribe to get our updates &amp; deals delivered to you
                </p>
                <Stack>
                  <Input
                    type="email"
                    className="flex-1 rounded-none rounded-l-lg"
                    placeholder="Email address"
                  />
                  <Button className="rounded-none rounded-r-lg">
                    Subscribe
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
      <div className="w-full py-6 text-center bg-slate-900 text-slate-100 text-sm italic">
        <p>ALT Educational Consult Limited &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
