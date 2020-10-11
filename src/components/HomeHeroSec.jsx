import React from "react";

export default function HomeHeroSec() {
  return (
    <div className="bg-gray-200">
      <section className="text-gray-700 body-font flex justify-between py-12 container">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-indigo-700 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-cente">
              Expand your reading
              <br className="hidden lg:inline-block" />
              Expand your mind.
            </h1>
            <p className="mb-8 leading-relaxed">
              Conduit is not like any other platform on the internet. Our sole
              purpose is to help you find compelling ideas, knowledge, and
              perspectives. We don’t serve ads—we serve you, the curious reader
              who loves to learn new things.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/heroimg.svg"
          />
        </div>
      </section>
    </div>
  );
}
