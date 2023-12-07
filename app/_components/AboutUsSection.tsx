/* eslint-disable @next/next/no-img-element */

function AboutUsSection() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="relative w-full">
        <img
          src="/assets/about-us.jpg"
          className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
          alt="Agile coaching"
        />
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="absolute inset-0 z-10">
          <div className="container flex flex-col items-center justify-center min-h-full gap-8 mx-auto">
            <h2 className="text-4xl font-bold text-center uppercase text-slate-50">
              Who We Are
            </h2>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 p-4">
        <p>
          Alt Educational Consult Limited is Nigeria&apos;s foremost educational
          firm that aim to transform lives and provide innovative solutions
          through expert educational advice for international students.
        </p>
        <p>
          We work with individual students and families on any and all
          educational issues facing internationally prospectus students as well
          as their family members. This includes admission into Universities and
          Colleges, Visa counselling, choosing appriopriate boarding schools,
          selecting the right international schools, and transition and
          resilience issues for Third Culture Kids. The guiding philosophy is
          that making the right educational choice is based on knowing and
          understanding individual student needs.
        </p>
        <p>
          Welcome to our world where we make the dreams of international
          prospective students who wish to study abroad a reality
        </p>
      </div>

      <div className="container flex flex-col items-center gap-4 p-4">
        <h2 className="text-4xl font-bold text-center uppercase">
          Why Choose Us?
        </h2>
        <p>
          We help international students study in English speaking countries.
          Our success comes from connecting students with the right course in
          the right university or institution and the right country.
        </p>

        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <img
            src="/assets/meeting.jpg"
            className="object-contain"
            alt="meeting"
          />
          <div className="flex flex-col w-full">
            <p className="p-2 font-semibold">We put you first</p>
            <p className="p-2 font-semibold border-t">Dedication</p>
            <p className="p-2 font-semibold border-t">Reliability</p>
            <p className="p-2 font-semibold border-t">Practical Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
