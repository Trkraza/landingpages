"use client";
import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiKubernetes,
  SiRust,
  SiGo,
  SiSwift,
} from "react-icons/si";

// Icon data array
const iconData = [
  { Icon: FaReact, title: "React" },
  { Icon: FaAngular, title: "Angular" },
  { Icon: FaVuejs, title: "Vue" },
  { Icon: FaPython, title: "Python" },
  { Icon: FaJava, title: "Java" },
  { Icon: SiTypescript, title: "TypeScript" },
  { Icon: SiJavascript, title: "JavaScript" },
  { Icon: SiDocker, title: "Docker" },
  { Icon: SiKubernetes, title: "Kubernetes" },
  { Icon: SiRust, title: "Rust" },
  { Icon: FaNodeJs, title: "Node.js" },
  { Icon: FaPhp, title: "PHP" },
  { Icon: FaLaravel, title: "Laravel" },
  { Icon: SiGo, title: "Go" },
  { Icon: SiSwift, title: "Swift" },
];

const IconSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIcon = () => {
    setCurrentIndex((currentIndex) => {
      // Increment index or wrap to 0 if at the end
      return (currentIndex + 1) % iconData.length;
    });
  };

  const prevIcon = () => {
    setCurrentIndex((currentIndex) => {
      // Decrement index or wrap to last if at the beginning
      return (currentIndex - 1 + iconData.length) % iconData.length;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextIcon(); // Automatically transition to the next icon every 5 seconds
    }, 5000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [currentIndex]); // The effect depends on `currentIndex` to ensure it updates correctly

  // Calculate visible icons
  const visibleIcons = iconData
    .slice(currentIndex, currentIndex + 9)
    .concat(
      iconData.slice(0, Math.max(0, 9 - (iconData.length - currentIndex)))
    );

  return (
    <>
      <h2 className="text-4xl font-extrabold text-center  my-8 ">
        Technology Stack We Work With
      </h2>
      <div className="flex items-center w-[70vw] justify-center h-[30vh] shadow-2xl mx-auto border  space-x-4 bg-white p-4 rounded-lg">
        <MdChevronLeft
          onClick={prevIcon}
          className="cursor-pointer text-4xl font-extrabold text-white bg-red-950 rounded-full "
        />
        <div className="flex overflow-hidden">
          {visibleIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center mx-6">
              <item.Icon className="text-[50px] text-green-900 mb-2" />
              <span className="text-sm mt-1 font-extrabold text-black">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={nextIcon}
          className="cursor-pointer text-4xl font-extrabold text-white bg-red-950 rounded-full"
        />
      </div>
    </>
  );
};

export default IconSlider;
