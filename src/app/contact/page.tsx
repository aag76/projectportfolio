"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
        <p className="text-lg text-medium-contrast text-center">
          Have questions or would you like to get in touch?  Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-medium-contrast">
            Feel free to reach out to me through the following channels:
          </p>
          <ul className="list-disc list-inside text-medium-contrast space-y-2">
            <li><strong>Email:</strong> <a href="mailto:aag76@njit.edu" className="text-primary underline hover:text-primary-700">aag76@njit.edu</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abraham-george-6821b92b9/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700">linkedin.com/in/abraham-george-6821b92b9</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/aag76" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700">github.com/aag76</a></li>
            <li><strong>Address:</strong> 154 Summit Street, Newark, New Jersey, United States</li>
          </ul>
        </div>

        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
