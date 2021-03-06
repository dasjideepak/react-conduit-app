import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeHeroSec() {
  return (
    <div className="bg-gray-200">
      <section className="text-gray-700 body-font flex justify-between py-12 container">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-indigo-700 text-6xl leading-none font-extrabold tracking-tight sm:text-5xl sm:leading-none">
              Expand your reading
              <br className="hidden lg:inline-block" />
              Expand your mind.
            </h1>
            <p className="mt-4 mb-2 leading-relaxed">
              Conduit is not like any other platform on the internet. Our sole
              purpose is to help you find compelling ideas, knowledge, and
              perspectives
            </p>
            <p className="mt-2 mb-4 leading-relaxed">
              Conduit is home to thousands of independent voices, and we combine
              humans and technology to find the best reading for you—and filter
              out the rest.
            </p>
            <div className="flex justify-center">
              {localStorage.authToken ? (
                <>
                  <NavLink
                    to="/"
                    className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Your Articles
                  </NavLink>
                  <NavLink
                    to="/"
                    className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                  >
                    Create New Article
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                  >
                    Login
                  </NavLink>
                </>
              )}
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
