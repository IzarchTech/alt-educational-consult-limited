/* eslint-disable @next/next/no-img-element */
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  FolderOpenIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  { title: "Admission", icon: AcademicCapIcon },
  { title: "Consultation", icon: BriefcaseIcon },
  { title: "One-On-One Guidance", icon: PresentationChartLineIcon },
  { title: "Document(s) Review", icon: FolderOpenIcon },
  { title: "Immigration", icon: GlobeAmericasIcon },
  { title: "Scholarship Hacks And Tips", icon: BookOpenIcon },
];

function OurServicesSection() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="relative w-full">
        <img
          src="/assets/our_services.jpg"
          className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
          alt="Our services"
        />
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="absolute inset-0 z-10">
          <div className="container flex flex-col items-center justify-center min-h-full gap-8 mx-auto">
            <h2 className="text-4xl font-bold text-center uppercase text-slate-50">
              Our Services
            </h2>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-2 px-4 py-6 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-2 shadow-md hover:shadow-lg w-44 h-44 bg-card">
              <service.icon className="w-20 h-20" />
              <p className="font-semibold text-center uppercase">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServicesSection;
