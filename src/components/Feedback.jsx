import React from "react";
import { useToasts } from "react-toast-notifications";

export default function Feedback() {
  const { addToast } = useToasts();
  return (
    <form className="container">
      <section className="text-gray-700 body-font relative">
        <h1 className="text-3xl font-medium title-font text-gray-900 text-center">
          Feedback
        </h1>
        <div className="container px-5 py-12 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991563149!3d32.2063993201664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1602431039097!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              If you have any feedback or suggestion for us, please share with
              us
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2 mb-4"
              placeholder="Name"
              type="text"
            />
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-pink-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                return addToast("Thank you for your feedback", {
                  appearance: "success",
                  autoDismiss: true,
                });
              }}
              className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Please fill all the details
            </p>
          </div>
        </div>
      </section>
    </form>
  );
}
