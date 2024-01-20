/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - Alt Educational Consult Limited",
  description: "Keep in touch with us",
  keywords: [""],
  openGraph: {
    title: "Contact Us - Alt Educational Consult Limited",
    description: "Keep in touch with us",
  },
  twitter: {
    title: "Contact Us - Alt Educational Consult Limited",
    description: "Keep in touch with us",
  },
};

function ContactUsPage() {
  return (
    <div className="flex flex-col items-center w-full gap-10" id="who_we_are">
      <div className="relative w-full">
        <img
          src="/assets/contact_us.jpg"
          className="object-cover object-center h-[60vh] lg:h-[80vh] w-full"
          alt="Contact Us"
        />
        <div className="inset-0 absolute bg-[#17191abd]" />
        <div className="absolute inset-0 z-10">
          <div className="container flex flex-col items-center justify-center min-h-full gap-8 mx-auto">
            <h2 className="text-4xl font-bold text-center uppercase text-slate-50">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center mb-11">
        <form className="shadow-md w-full md:w-5/12 flex flex-col gap-6 p-2">
          <h3 className="text-xl font-bold p-2">Keep in touch with us</h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="John Doe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="j.Doe@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Message</label>
            <textarea
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
