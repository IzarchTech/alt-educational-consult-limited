import { Metadata } from "next";
import Jumbotron from "@/components/ui/jumbotron";
import ourServicesImg from "@/assets/our_services.jpg";
import meetingImg from "@/assets/meeting.jpg";
import reviewImg from "@/assets/review.jpg";
import foreignCurrencyImg from "@/assets/foreign currency.jpg";
import visaApplicationImg from "@/assets/visa_application.jpg";
import accommodationImg from "@/assets/accommodation.jpg";
import Image from "next/image";
import Stack from "@/components/ui/stack";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services - Alt Educational Consult Limited",
  description:
    "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  openGraph: {
    type: "website",
    title: "Our Services - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
  twitter: {
    title: "Our Services - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
};

function OurServicesPage() {
  return (
    <div className="w-full flex flex-col">
      <Jumbotron
        title="Our Services"
        imageUrl={ourServicesImg.src}
        subTitle="Choosing A Suitable School & Program: Navigate Your Educational
            Journey With Us"
      />

      <div className="w-full flex flex-col">
        <div className="container space-y-4 leading-6 py-12 px-4">
          <p>
            Making the choice of pursing a higher education program abroad can
            be a bit overwhelming?
          </p>
          <p>
            As a premier academic consultancy agency, we specialize in guiding
            prospective students through the intricate process of selecting the
            right institution and program to achieve their academic and career
            goals.
          </p>

          <p>
            With years of experience and a team of dedicated experts, ALT
            Educational Consult offers personalized advice and recommendations
            tailored to each student&apos;s unique aspirations and
            circumstances.
          </p>

          <p>
            What sets ALT Educational Consult apart is our commitment to
            excellence and unwavering dedication to student success.
          </p>

          <p>
            We understand that selecting the right educational institution is a
            pivotal decision that can shape your future. That&apos;s why we
            meticulously assess factors such as academic reputation, program
            offerings, faculty expertise, and campus culture to identify the
            perfect fit for you.
          </p>

          <p>
            Whether you aspire to study at a renowned university in the bustling
            streets of London or immerse yourself in the vibrant academic
            community of a prestigious Ivy League institution, ALT Educational
            Consult has the expertise to make your dreams a reality.
          </p>

          <p>
            Our proven track record speaks for itself, with countless students
            successfully admitted to top-tier universities in the UK and US.
          </p>

          <p>
            Let us empower you to embark on a transformative educational journey
            that will unlock endless opportunities for personal and professional
            growth.
          </p>

          <p>
            Don&apos;t leave your future to chance. Trust us to navigate the
            complexities of the admissions process and embark on a path to
            academic excellence.
          </p>

          <Link
            href="/contact_us"
            className={cn(
              buttonVariants({ variant: "link", size: "lg" }),
              "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
            )}
          >
            Contact us today and take the first step towards a brighter
            tomorrow.
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pb-12 leading-6">
          <div className="w-full lg:container relative flex items-center justify-center h-80 lg:h-[400px]">
            <Image src={meetingImg} alt="meeting" objectFit="cover" fill />
            <div className="absolute bg-black/65 min-h-[50%] w-full md:max-w-md z-30 text-white p-4 gap-6 flex flex-col items-center justify-around">
              <h3 className="text-center">
                Elevate Your Application Success with ALT Educational Consult
              </h3>
            </div>
          </div>
          <div className="container px-4 leading-6 space-y-4">
            <p>
              Are you ready to take your application to the next level? ALT
              Educational Consult offers personalized application review
              services tailored to prospective students aiming to study in the
              UK or US.
            </p>
            <p>
              Our team of experienced advisors meticulously evaluates every
              aspect of your application before submission, ensuring it stands
              out among the competition.
            </p>
            <p>
              We understand the nuances of the admissions process and leverage
              our insider knowledge to maximize your chances of acceptance to
              your dream institution.
            </p>
            <p>
              Don&apos;t leave your future to chance. Trust us to fine-tune your
              application and showcase your strengths with confidence.
            </p>
            <Link
              href="/contact_us"
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
              )}
            >
              Book a call /contact us today and let us help you secure a spot at
              the university of your dreams.
            </Link>
          </div>
        </div>

        <div className="w-full py-12 bg-secondary text-secondary-foreground">
          <div className="container px-4 space-y-6">
            <h3 className="text-center">
              Personal Statement Review: Craft Your Path to Success
            </h3>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-10 w-full">
              <Stack variant="vertical" className="gap-2 space-y-4 leading-6">
                <div className="relative h-80 md:shadow bg-slate-50">
                  <Image
                    src={reviewImg}
                    alt="meeting"
                    fill
                    objectFit="cover"
                    className="p-4"
                  />
                </div>
                <p>
                  Your personal statement is your opportunity to shine in the
                  competitive landscape of university admissions. With ALT
                  Educational Consult&apos;s Personal Statement Review service,
                  you can ensure your voice is heard loud and clear by
                  admissions officers in the UK or US.
                </p>
              </Stack>
              <div className="space-y-4">
                <p>
                  Our experienced consultants provide personalized feedback and
                  guidance to help you craft a compelling narrative that
                  showcases your unique experiences, strengths, and aspirations.
                </p>
                <p>
                  We understand the intricacies of what universities seek and
                  tailor our feedback to align with their expectations, ensuring
                  your statement stands out among the crowd.
                </p>
                <p>
                  Whether you&apos;re struggling to find the right words or
                  seeking to refine your existing draft, we will support you
                  every step of the way. Let us help you articulate your story
                  with clarity and conviction, maximizing your chances of
                  securing admission to your dream institution.
                </p>
                <p>
                  Don&apos;t underestimate the power of a well-crafted personal
                  statement. Trust us to elevate your application and set you on
                  the path to academic success.
                </p>
                <Link
                  href="/contact_us"
                  className={cn(
                    buttonVariants({ variant: "link", size: "lg" }),
                    "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
                  )}
                >
                  Make an appointment with us today and let&apos;s transform
                  your aspirations into achievements.
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-12 space-y-6">
          <div className="w-full lg:container relative flex items-center justify-center h-80 lg:h-[400px]">
            <Image
              src={foreignCurrencyImg}
              alt="foreign currency"
              objectFit="cover"
              fill
            />
            <div className="absolute bg-black/65 min-h-[50%] w-full md:max-w-md z-30 text-white p-4 gap-6 flex flex-col items-center justify-around">
              <h3 className="text-center">
                Foreign Currency Payment Support: Simplify Fee Payments
              </h3>
            </div>
          </div>

          <div className="container px-4 lg:px-0 leading-6 space-y-4">
            <p>
              Studying abroad comes with financial complexities, especially when
              dealing with foreign currency payments. ALT Educational Consult
              offers seamless payment support for fees denominated in foreign
              currency, ensuring a hassle-free experience for prospective
              students heading to the UK or US.
            </p>
            <p>
              Our dedicated team handles currency conversion and international
              transfers. With our assistance, you can confidently navigate the
              payment process, focusing on your academic journey without
              financial stress.
            </p>
            <p>
              Don&apos;t let currency conversions complicate your educational
              plans. Trust us to streamline fee payments, allowing you to focus
              on what truly matters—achieving your academic goals.
            </p>
            <Link
              href="/contact_us"
              className={cn(
                buttonVariants({ variant: "link", size: "lg" }),
                "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
              )}
            >
              Make an appointment with us today and let&apos;s transform your
              aspirations into achievements.
            </Link>
          </div>
        </div>

        <div className="w-full pb-12 space-y-6">
          <div className="container px-4 lg:px-0 space-y-6 border-t pt-6">
            <h3 className="text-center">
              Seamlessly Navigate Visa Applications with ALT Educational Consult
            </h3>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-10 w-full">
              <Stack variant="vertical" className="gap-2 space-y-4 leading-6">
                <div className="relative h-80 md:shadow bg-slate-50">
                  <Image
                    src={visaApplicationImg}
                    alt="meeting"
                    fill
                    objectFit="cover"
                    className="p-4"
                  />
                </div>
              </Stack>
              <div className="space-y-4">
                <p>
                  Embarking on your academic journey abroad should be exciting,
                  not stressful. ALT Educational Consult offers expert Visa
                  Application Support to prospective students bound for the UK
                  or US, ensuring a smooth transition to their chosen
                  destination.
                </p>
                <p>
                  Our experienced consultants guide you through the intricate
                  visa application process, providing personalized assistance
                  tailored to your specific circumstances. From document
                  preparation to interview tips, we ensure you&apos;re fully
                  equipped to meet visa requirements and present a strong case
                  to immigration authorities.
                </p>
                <p>
                  Don&apos;t let visa hurdles stand in the way of your dreams.
                  Bank on us to streamline the visa application process,
                  allowing you to focus on preparing for your exciting academic
                  adventure.
                </p>
                <Link
                  href="/contact_us"
                  className={cn(
                    buttonVariants({ variant: "link", size: "lg" }),
                    "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
                  )}
                >
                  Book a call /contact us today and let us help you secure a
                  spot at the university of your dreams.
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-12 bg-secondary text-secondary-foreground">
          <div className="container px-4 space-y-6">
            <h3 className="text-center">
              Settle in Comfortably: Student Accommodation Support
            </h3>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-10 w-full">
              <Stack variant="vertical" className="gap-2 space-y-4 leading-6">
                <div className="relative h-80 lg:h-96 md:shadow bg-slate-50">
                  <Image
                    src={accommodationImg}
                    alt="accomodation"
                    fill
                    objectFit="cover"
                    className="p-4"
                  />
                </div>
              </Stack>
              <div className="space-y-4">
                <p>
                  Finding the right place to live is crucial for a successful
                  academic journey abroad. ALT Educational Consult offers
                  tailored Student Accommodation Support to prospective students
                  heading to the UK or US, ensuring a smooth transition into
                  their new environment.
                </p>
                <p>
                  Our dedicated team assists in securing suitable accommodation
                  options that meet your preferences, budget, and proximity to
                  your university. From dormitories to private rentals, we help
                  you navigate the housing market with ease, providing valuable
                  insights and guidance along the way.
                </p>
                <p>
                  Don&apos;t let accommodation worries overshadow your
                  excitement for studying abroad. Trust ALT Educational Consult
                  to help you find a comfortable and convenient place to call
                  home.
                </p>
                <Link
                  href="/contact_us"
                  className={cn(
                    buttonVariants({ variant: "link", size: "lg" }),
                    "px-0 hover:border hover:px-8 transition-all ease-linear duration-300 border-primary delay-200"
                  )}
                >
                  Make an appointment with us today and let&apos;s transform
                  your aspirations into achievements.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServicesPage;
