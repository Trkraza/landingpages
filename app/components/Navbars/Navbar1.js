"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, services, HOW_WE_WORK } from "../../constants/index";
import { debounce } from "lodash";
import navbarProps from "./props"; // Importing CSS props

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isHowWeWorkOpen, setIsHowWeWorkOpen] = useState(false);

  useEffect(() => {
    setSelectedService(services[0].id);
  }, []);

  const handleMouseEnter = debounce(() => {
    setIsServicesOpen(true);
  }, 300);

  const handleMouseLeave = debounce(() => {
    setIsServicesOpen(false);
  }, 0);

  const handleHowWeWorkEnter = debounce(() => {
    setIsHowWeWorkOpen(true);
  }, 300);

  const handleHowWeWorkLeave = debounce(() => {
    setIsHowWeWorkOpen(false);
  }, 0);

  const renderServicesDropdown = (servicesArray) => (
    <div className="absolute bg-[#f5f5f5] rounded-3xl text-black font-light p-4 flex w-[40vw]">
      <div className="flex-1">
        {servicesArray.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedService(service.id)}
            onMouseLeave={() => setSelectedService(servicesArray[0].id)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            {React.cloneElement(service.icon, {
              size: 25,
              className: "h-6 w-6",
            })}
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="flex-1 border-l border-gray-300 pl-4">
          <div className="font-bold">
            {servicesArray.find((s) => s.id === selectedService).name}
          </div>
          {servicesArray.find((s) => s.id === selectedService).description}
        </div>
      )}
    </div>
  );

  const renderHowWeWorkDropdown = () => (
    <div className="absolute bg-[#f5f5f5] rounded-3xl text-black font-light p-4 flex flex-col md:flex-row w-[80vw] md:w-[60vw] lg:w-[40vw]">
      {HOW_WE_WORK.map((step, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 flex-col md:w-1/2 lg:w-1/3"
        >
          <Image
            src={step.icon}
            alt={`Step ${step.id} Icon`}
            width={25}
            height={25}
          />
          <h2 className="font-bold text-red-800">{step.heading}</h2>
          <div className="flex flex-col">
            {step.column.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <nav className={navbarProps.container}>
      <Link href="/" className={navbarProps.logo}>
        <span className="text-3xl">0x3f.Lancers</span>
      </Link>
      <div className={navbarProps.flexContainer}>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={navbarProps.navItem}
        >
          Services
          {isServicesOpen && renderServicesDropdown(services)}
        </li>
        <li
          onMouseEnter={handleHowWeWorkEnter}
          onMouseLeave={handleHowWeWorkLeave}
          className={navbarProps.navItem}
        >
          How we Work?
          {isHowWeWorkOpen && renderHowWeWorkDropdown()}
        </li>
        <ul className={navbarProps.flexItem}>
          {NAV_LINKS.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-2xl mx-auto flex justify-between items-center"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <button className={navbarProps.button}>Click me</button>
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className={navbarProps.menuIcon}
      />
    </nav>
  );
};

export default Navbar;
