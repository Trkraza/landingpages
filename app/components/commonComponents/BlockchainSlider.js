"use client";
import React from "react";
import Slider from "react-slick";
import Head from "next/head";
import { useState } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCubes,
  FaServer,
  FaFileAlt,
} from "react-icons/fa";

const services = [
  {
    title: "ICO Development Services",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula  ",
    icon: <FaCubes size={50} />,
    button: {
      text: "Learn More",
      link: "/ico-development",
    },
  },
  {
    title: "Blockchain Wallet Development",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula  ",
    icon: <FaServer size={50} />,
    button: {
      text: "Explore",
      link: "/blockchain-wallet-development",
    },
  },
  {
    title: "Hyperledger Blockchain Development",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula  ",
    icon: <FaServer size={50} />,
    button: {
      text: "Discover",
      link: "/hyperledger-development",
    },
  },
  {
    title: "Hyperledger Blockchain Development",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula  ",
    icon: <FaServer size={50} />,
    button: {
      text: "Explore",
      link: "/hyperledger-development",
    },
  },
  {
    title: "Hyperledger Blockchain Development",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula  ",
    icon: <FaServer size={50} />,
    button: {
      text: "Learn More",
      link: "/hyperledger-development",
    },
  },
  // ... Add other services following the same object structure
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={`${className} text-black absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer`}
      style={{ ...style, color: "black", fontSize: "22px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={`${className} text-black absolute top-1/2 left-0 transform  -translate-y-1/2 z-10 cursor-pointer`}
      style={{ ...style, color: "black", fontSize: "22px" }}
      onClick={onClick}
    />
  );
}

export default function BlockchainSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const goToSlide = (slideIndex) => {
    sliderRef.slickGoTo(slideIndex);
  };

  return (
    <div className=" bg-gray-100 w-[90vw] mx-auto ">
      <Head>
        <title>Blockchain Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-4xl font-extrabold text-center mx-auto py-1  my-8 w-[50vw] ">
        Our Blockchain Development Services and Solutions for your Business
      </h2>
      <div className="p-6 mx-auto">
        <Slider ref={setSliderRef} {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-4 cursor-pointer  ${
                index === activeSlide
                  ? "opacity-100 scale-110"
                  : "opacity-50 scale-90"
              }`}
            >
              <div
                className={`bg-white rounded-3xl overflow-hidden transition w-96  h-[60vh] duration-300 ease-in-out ${
                  index === activeSlide ? "shadow-2xl" : "shadow-md"
                }`}
              >
                <div className="mx-auto">
                  <h3
                    className={`text-xl font-bold py-8 text-center border border-b-black mb-[-30px] ${
                      index === activeSlide ? "bg-black text-white" : " "
                    }`}
                  >
                    {service.title}
                  </h3>

                  <span
                    className={`flex justify-center mx-auto text-3xl w-[100px] px-4 py-3 border-yellow-500  border-4 text-black bg-gray-900 rounded-full mt-[-30px] ${
                      index === activeSlide ? " text-red-800" : " "
                    }`}
                  >
                    {service.icon}
                  </span>
                </div>
                <div className="p-2 text-lg font-bold text-center ">
                  <p>{service.description}</p>
                  <button
                    href={service.button.link}
                    className="bg-black text-orange-400 px-4 py-2 mt-4 rounded-full inline-block"
                  >
                    {service.button.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
