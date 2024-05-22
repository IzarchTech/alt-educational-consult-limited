import Stack from "@/components/ui/stack";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface ServiceCardsProps {
  image: StaticImageData;
  title: string;
}

function ServiceCard({ image, title }: Readonly<ServiceCardsProps>) {
  return (
    <Stack
      variant="vertical"
      className="shadow-md bg-card border rounded-lg hover:animate-pulse"
    >
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
      <div className="py-4 px-2">
        <p className="text-left font-semibold">{title}</p>
      </div>
    </Stack>
  );
}

export default ServiceCard;
