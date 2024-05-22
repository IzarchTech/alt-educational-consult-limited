"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Jumbotron from "@/components/ui/jumbotron";

import aboutusImg from "@/assets/about-us.jpg";
import resumeImg from "@/assets/resume.jpg";
import reviewImg from "@/assets/review.jpg";
import Autoplay from "embla-carousel-autoplay";

const headings = [
  {
    image: aboutusImg,
    title:
      "It’s never too late to chase your dreams Apply to join our next intake",
  },

  {
    image: resumeImg,
    title: "Unlock Your Future with Our Expert Guidance! Talk to us today",
  },

  {
    image: reviewImg,
    title:
      "Take the first step towards your future. Contact us for a free consultation and discover how we can help you achieve your academic goals",
  },
];

function LandingCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {headings.map((heading) => (
          <CarouselItem key={heading.title.replaceAll(" ", "_")}>
            <Jumbotron
              title={heading.title}
              textWidth="small"
              imageUrl={heading.image.src}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default LandingCarousel;
