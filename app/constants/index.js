import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaShareAlt,
  FaPen,
  FaShoppingCart,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "about_us", label: "About Us" },
  { href: "/", key: "pricing", label: "Pricing" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

export const HOW_WE_WORK = [
  {
    id: 1,
    icon: <FaCode />,
    heading: "Blockchain",
    column: [
      "Lorem ipsum ",
      "Sed do eiusmod ",
      "Ut enim ad minim ",
      "Duis aute irure ",
      "Excepteur sint ",
    ],
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    heading: "Websites",
    column: [
      "Lorem ipsum  ",
      "Sed do eiusmod ",
      "Ut enim ad minim ",
      "Duis aute irure ",
      "Excepteur sint .",
    ],
  },
  {
    id: 3,
    icon: <FaSearch />,
    heading: "Telegrambot",
    column: [
      "Lorem ipsum  ",
      "Sed do eiusmod ",
      "Ut enim ad minim ",
      "Duis aute irure ",
      "Excepteur sint .",
    ],
  },
  // Add more steps as needed
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    icon: <FaCode />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Graphic Design",
    icon: <FaPaintBrush />,
    description: "Vivamus fringilla sapien et pulvinar lobortis.",
  },
  {
    id: 3,
    name: "Mobile App Development",
    icon: <FaMobileAlt />,
    description: "Fusce commodo tellus vel elit congue, vel scelerisque urna.",
  },
  {
    id: 4,
    name: "SEO Services",
    icon: <FaSearch />,
    description: "Nullam eget mi eu ligula bibendum tincidunt. Ut imperdiet.",
  },
  {
    id: 5,
    name: "Social Media Marketing",
    icon: <FaShareAlt />,
    description: "Duis at malesuada neque. Integer varius euismod eros vitae.",
  },
  {
    id: 6,
    name: "Content Writing",
    icon: <FaPen />,
    description: "Pellentesque habitant morbi tristique senectus et netus et.",
  },
  {
    id: 7,
    name: "E-commerce Solutions",
    icon: <FaShoppingCart />,
    description: "Cras rhoncus, libero eget ultrices euismod, nisl turpis.",
  },
  // ... add more services
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/arbitrum.ico",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/Bitcoin.ico",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/base.ico",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/cosmos.ico",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About 0x3f.Lancers",
      "New Releases",
      "Environment",
      "Work",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Dasu", "Shiva Praskash", "Trk"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "CEO", value: "123-456-7890" },
    { label: "Email US", value: "0x3f.lancers@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaYoutube />,
    <FaWordpress />,
  ],
};
