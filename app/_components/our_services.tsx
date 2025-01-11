"use client";

import meetingImg from "@/assets/meeting.jpg";
import reviewImg from "@/assets/review.jpg";
import foreignCurrencyImg from "@/assets/foreign currency.jpg";
import visaApplicationImg from "@/assets/visa_application.jpg";
import accommodationImg from "@/assets/accommodation.jpg";

import ServiceCard, { ServiceCardsProps } from "./service-card";

const services: ServiceCardsProps[] = [
  {
    image: meetingImg,
    title: "Elevate Your Application Success with ALT Educational Consult",
  },
  {
    image: reviewImg,
    title: "Personal Statement Review: Craft Your Path to Success",
  },
  {
    image: foreignCurrencyImg,
    title: "Foreign Currency Payment Support: Simplify Fee Payments",
  },
  {
    image: visaApplicationImg,
    title: "Seamlessly Navigate Visa Applications with ALT Educational Consult",
  },
  {
    image: accommodationImg,
    title: "Settle in Comfortably: Student Accommodation Support",
  },
];

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
