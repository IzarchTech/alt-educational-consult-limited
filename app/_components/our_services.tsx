"use client";

import meetingImg from "@/assets/meeting.jpg";
import resumeImg from "@/assets/resume.jpg";
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
    image: resumeImg,
    title:
      "Stand Out with a Polished Resume/CV: ALT Educational Consult Can Help",
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
