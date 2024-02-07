"use client";
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";

const socialMediaLinks = [
  { title: "LinkedIn", icon: <FaLinkedin size={24} />, link: "#" },
  { title: "GitHub", icon: <FaGithub size={24} />, link: "#" },
  { title: "Instagram", icon: <FaInstagram size={24} />, link: "#" },
  { title: "Twitter", icon: <FaTwitter size={24} />, link: "#" },
  { title: "YouTube", icon: <FaYoutube size={24} />, link: "#" },
];

const aboutSections = [
  {
    title: "Call Us",
    icon: <FaPhone size={24} />,
    text: "Be free to reach us at +1-123-456-7890 during our office hours.",
  },
  {
    title: "Location",
    icon: <FaMapMarkerAlt size={24} />,
    text: "Visit us at 123 Main Street, hyderabaad, bangalore,India is open ",
  },
  {
    title: "Timings",
    icon: <FaClock size={24} />,
    text: "Our office is open from Monday to Friday, 9:00 AM to 5:00 PM. ",
  },
];

const ContactAndAbout = () => {
  const [showForms, setShowForms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowForms(scrollY > 5500); // Adjust this threshold based on your design
      console.log("scrolled", scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden my-11">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mx-auto h-[65vh] rounded-xl w-[100vw] shadow-lg"
        style={{ backgroundImage: 'url("/bgcontact.jpg")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center my-20">
        <div className="p-8 rounded w-[80vw] py-10 h-fit justify-center flex">
          {/* Left Column - About Us */}
          <div
            className={`w-[40vw] pr-4 flex justify-center items-center flex-col shadow-lg p-4  rounded-xl mx-2 bg-slate-50 transition-transform duration-1000 ${
              showForms ? "transform -translate-y-16" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-2 mx-28 underline">
              About Us
            </h2>
            {aboutSections.map((section, index) => (
              <div key={index} className="mb-4 mx-auto">
                <div className="flex space-x-4">
                  {" "}
                  <span className="text-red-800 ">{section.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                </div>

                <div className="flex items-center space-x-2">
                  <p className="text-sm">{section.text}</p>
                </div>
              </div>
            ))}
            <div className="flex space-x-2 border border-red-800 px-4 py-1 rounded-full transition-all bg-white ">
              {/* Mapping over social media links */}
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  passHref
                  className="text-red-500 hover:underline bg-gray-200 rounded-full p-1"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`w-[40vw] flex flex-col justify-center items-center px-6 py-4 bg-red-600 backdrop-blur-lg bg-opacity-20 rounded-xl transition-transform duration-1000 ${
              showForms ? "transform -translate-y-16" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-white underline">
              Contact Us
            </h2>
            <form className="w-full">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-gray-200 text-lg mb-1 font-bold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border rounded-md py-1 px-4 focus:outline-none font-extrabold text-gray-900"
                  placeholder="youre Name"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-gray-200 text-lg mb-1 font-bold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md py-1 px-4focus:outline-none font-extrabold text-gray-900"
                  placeholder="youre@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-200 text-lg mb-1 font-extrabold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded-md py-1 px-4 focus:outline-none font-bold text-gray-900"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-red-600 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-md w-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndAbout;
