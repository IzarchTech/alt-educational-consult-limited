"use client";

import meetingImg from "@/assets/meeting.jpg";
import reviewImg from "@/assets/review.jpg";
import foreignCurrencyImg from "@/assets/foreign currency.jpg";
import visaApplicationImg from "@/assets/visa_application.jpg";
import accommodationImg from "@/assets/accommodation.jpg";
import postArrivalImg from "@/assets/post_arrival.jpg";
import scholarshipImg from "@/assets/scholarship.jpg";
import undergraduatesImg from "@/assets/undergraduates.jpg";

import ServiceCard, { ServiceCardsProps } from "./service-card";
import { OUR_SERVICES } from "@/lib/constants";
import { StaticImageData } from "next/image";

const services: ServiceCardsProps[] = OUR_SERVICES.map((service) => {
  let image: StaticImageData;

  switch (service) {
    case "Graduate & Undergraduate Admissions":
      image = undergraduatesImg;
      break;
    case "Funding & Scholarships Advice":
      image = scholarshipImg;
      break;
    case "Personal Statement Review":
      image = reviewImg;
      break;
    case "Visa Application & Support":
      image = visaApplicationImg;
      break;
    case "Accommodation Support":
      image = accommodationImg;
      break;
    case "Foreign Currency Payment Support":
      image = foreignCurrencyImg;
      break;
    case "Post Arrival Support":
      image = postArrivalImg;
      break;
    default:
      image = meetingImg;
  }

  return {
    title: service,
    image,
  };
});

function OurServices() {
  return (
    <div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      <div className="md:col-span-3 lg:col-span-4">
        <h2 className="text-center">Our Services</h2>
      </div>
      {services.map((service) => (
        <ServiceCard
          key={service.title.replaceAll(" ", "_")}
          title={service.title}
          image={service.image}
        />
      ))}
    </div>
  );
}

export default OurServices;
