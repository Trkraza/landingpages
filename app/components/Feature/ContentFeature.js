"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Explore Nature",
    content:
      "Discover the beauty of the natural world with our guided tours. Explore lush forests, serene lakes, and majestic mountains. Our tours are designed to bring you closer to nature while ensuring an unforgettable adventure.",
    moreInfo: "https://example.com/nature",
  },
  {
    id: 2,
    title: "City Life",
    content:
      "Dive into the heart of the city with our immersive experiences. From bustling markets and gourmet cuisine to historic landmarks and vibrant nightlife, explore what makes each city unique. Join us for an urban adventure and discover the pulse of the city.",
    moreInfo: "https://example.com/citylife",
  },
  {
    id: 3,
    title: "Art & Culture",
    content:
      "Immerse yourself in the world of art and culture. Visit galleries, museums, and theaters to experience the finest creations humanity has to offer. Attend workshops, enjoy live performances, and meet artists and creators. Enrich your life with the beauty of art and culture.",
    moreInfo: "https://example.com/artculture",
  },
  {
    id: 4,
    title: "Beach Retreat",
    content:
      "Escape to sandy shores and tranquil waters with our beach retreat packages. Bask in the sun, swim in crystal-clear waters, and indulge in delicious seafood cuisine. Relax and rejuvenate on your dream beach vacation.",
    moreInfo: "https://example.com/beachretreat",
  },
  {
    id: 5,
    title: "Mountain Adventures",
    content:
      "Embark on thrilling mountain adventures with our experienced guides. Conquer challenging trails, enjoy breathtaking views, and immerse yourself in the beauty of alpine landscapes. Experience the adrenaline rush of mountaineering and trekking.",
    moreInfo: "https://example.com/mountainadventures",
  },
];

export default function ContentFeature() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="flex flex-col items-center p-4 md:p-8"
      style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)" }}
    >
      {/* Content Display Card */}
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center overflow-hidden">
        <div className="w-full lg:w-2/3 p-6 space-y-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">
            {data[activeIndex].title}
          </h1>
          <p className="text-gray-700 mb-4">{data[activeIndex].content}</p>
          <a
            href={data[activeIndex].moreInfo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors duration-300 text-center"
          >
            Explore More
          </a>
        </div>

        <div className="w-full lg:w-1/3 mt-4 lg:mt-0 space-y-2 lg:pl-4">
          {data.map((item, index) => (
            <button
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)} // Changed onClick to onMouseEnter
              className={`w-full text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
                activeIndex === index
                  ? "bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-md"
                  : "bg-white bg-opacity-50 text-gray-800"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
