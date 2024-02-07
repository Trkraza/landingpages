"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";
import Image from "next/image";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    imageUrl: "/logo.png", // Replace with actual image URL
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    imageUrl: "/facebook.svg", // Replace with actual image URL
  },
  {
    title: "Location Services",
    href: "/services/location-services",
    imageUrl: "/youtube.svg", // Replace with actual image URL
  },
  {
    title: "Mapping Solutions",
    href: "/services/mapping-solutions",
    imageUrl: "/facebook.svg", // Replace with actual image URL
  },
  {
    title: "Next-Gen Technologies",
    href: "/services/next-gen-technologies",
    imageUrl: "/youtube.svg", // Replace with actual image URL
  },
  {
    title: "Next-Gen Technologies",
    href: "/services/next-gen-technologies",
    imageUrl: "/youtube.svg", // Replace with actual image URL
  },
  {
    title: "Next-Gen Technologies",
    href: "/services/next-gen-technologies",
    imageUrl: "/youtube.svg", // Replace with actual image URL
  },
  {
    title: "Tech Support",
    href: "/services/tech-support",
    imageUrl: "/instagram.svg", // Replace with actual image URL
  },
  {
    title: "Custom Software",
    href: "/services/custom-software",
    imageUrl: "/logo.png", // Replace with actual image URL
  },
  // Add more services as needed
];

const aboutItems = [
  {
    title: "About Us",
    href: "/about/us",
    description: "Learn about our company and mission.",
  },
  {
    title: "Contact Us",
    href: "/about/contact",
    description: "Reach out to us for any inquiries or assistance.",
  },
  {
    title: "Hero Section",
    href: "/about/hero-section",
    description: "Explore information about our hero section.",
  },
];

function Navbar2() {
  return (
    <NavigationMenu className="min-w-full p-4 flex justify-between">
      <NavigationMenuLink
        href="/"
        className={`${navigationMenuTriggerStyle()} text-xl cursor-pointer`}
      >
        0x3f.Lancers
      </NavigationMenuLink>

      <NavigationMenuList className="text-lg gap-10 mx-auto">
        {" "}
        {/* Increase text size for the entire navbar */}
        <NavigationMenuItem>
          {/* Components dropdown */}
          <NavigationMenuTrigger className="text-xl ">
            {" "}
            {/* Increase text size for the dropdown trigger */}
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-4 p-6   md:w-[600px] md:grid-cols-2 lg:w-[700px]">
              {" "}
              {/* Increase width and gap */}
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* Services dropdown */}
          <NavigationMenuTrigger className="text-xl">
            {" "}
            {/* Increase text size for the dropdown trigger */}
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-4 p-6 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
              {services.map((service, index) => (
                <ListItem key={index} href={service.href}>
                  <div className="flex mx-6 items-center  flex-col my-3 text-sm">
                    <Image
                      src={service.imageUrl}
                      width={30}
                      height={15}
                      alt="image"
                    />
                    <p className="text-red-800">{service.title}</p>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* About dropdown */}
          <NavigationMenuTrigger className="text-xl">
            {" "}
            {/* Increase text size for the dropdown trigger */}
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-4 p-6 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
              {" "}
              {/* Increase width and gap */}
              {aboutItems.map((aboutItem, index) => (
                <ListItem
                  key={index}
                  title={aboutItem.title}
                  href={aboutItem.href}
                >
                  {aboutItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* Documentation and other links */}

          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} text-xl`}
          >
            {" "}
            {/* Increase text size */}
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="border border-white rounded-lg mx-28 list-none">
          {/* Documentation and other links */}

          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} text-xl`}
          >
            {" "}
            {/* Increase text size */}
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
// ListItem component for rendering individual items in the dropdown
const ListItem = ({ title, href, children }) => {
  return (
    <li>
      <NavigationMenuLink href={href}>
        <div>
          <div className="text-base font-medium leading-none">{title}</div>{" "}
          {/* Increase text size */}
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar2;
