import { buttonVariants } from "@/components/ui/button";
import Stack from "@/components/ui/stack";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface ServiceCardsProps {
  image: StaticImageData;
  title: string;
}

function ServiceCard({ image, title }: Readonly<ServiceCardsProps>) {
  return (
    <Stack variant="vertical" className="shadow-md bg-card border rounded-lg">
      <div className="w-full relative h-40 rounded-t-lg object-center">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          className="rounded-t-lg"
          fill
          priority
        />
      </div>
      <div className="py-6 px-4 flex items-center justify-center">
        <Link
          href={`/our_services#${title
            .replaceAll(" ", "_")
            .replaceAll("&", "and")}`}
          className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        >
          {title}
        </Link>
      </div>
    </Stack>
  );
}

export default ServiceCard;
