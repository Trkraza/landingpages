"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import
import { MdArrowForward, MdArrowBack } from "react-icons/md";

// Placeholder Button component, replace with your actual Button component import
const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`${className} transition duration-300 ease-in-out`}
  >
    {children}
  </button>
);
const featuresInfo = {
  "Genetic Engineering": {
    description:
      "Dive into the advancements of Genetic Engineering, altering the genetic makeup for medical, agricultural, and industrial applications.",
    bgColor: "bg-[#f56565]",
    imageUrl: "/augmentedfeatures.jfif",
  },
  "Blockchain Technology": {
    description:
      "Explore the decentralized world of Blockchain, offering transparent and secure transactions, smart contracts, and revolutionary applications.",
    bgColor: "bg-[#4299e1]",
    imageUrl: "/blockchain.webp",
  },
  "Internet of Things (IoT)": {
    description:
      "Unveil the interconnected world of IoT, enhancing daily life with smart devices, home automation, and data-driven decision making.",
    bgColor: "bg-[#48bb78]",
    imageUrl: "/dataanalyticsfeature.avif",
  },
  // Note: Corrected and simplified feature names and details for clarity
  "Artificial Intelligence": {
    description:
      "Explore AI's impact on data analysis, automation, and solving complex problems across various industries.",
    bgColor: "bg-[#ed8936]",
    imageUrl: "/ai-feature.jpg", // Ensure correct image path
  },
  "Machine Learning": {
    description:
      "Dive into how machines can learn from data to improve decision making and create predictive models.",
    bgColor: "bg-[#9f7aea]",
    imageUrl: "/ml-feature.jpg", // Ensure correct image path
  },
};
const FeaturesComponent = () => {
  const featuresArray = Object.keys(featuresInfo);
  const router = useRouter();

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(1);
  const [visibleFeatures, setVisibleFeatures] = useState(
    featuresArray.slice(0, 3)
  );

  const updateVisibleFeatures = (index) => {
    let start = index - 1 < 0 ? 0 : index - 1;
    let end = start + 3;
    if (end > featuresArray.length) {
      end = featuresArray.length;
      start = end - 3 < 0 ? 0 : end - 3;
    }
    setVisibleFeatures(featuresArray.slice(start, end));
  };

  const nextFeature = () => {
    setActiveFeatureIndex(
      (prevIndex) => (prevIndex + 1) % featuresArray.length
    );
    updateVisibleFeatures(activeFeatureIndex + 1);
  };

  const prevFeature = () => {
    setActiveFeatureIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuresArray.length) % featuresArray.length
    );
    updateVisibleFeatures(activeFeatureIndex - 1);
  };

  const handleFeatureClick = (index) => {
    setActiveFeatureIndex(index);
    if (!visibleFeatures.includes(featuresArray[index])) {
      updateVisibleFeatures(index);
    }
  };

  const currentFeature = featuresArray[activeFeatureIndex];
  const url = currentFeature.split(" ")[0];
  const { description, imageUrl } = featuresInfo[currentFeature];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-black text-white py-4 rounded-lg mb-12">
          OUR FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-80 lg:pl-20 md:pl-0 shadow-md bg-cyan-500 bg-opacity-20 rounded-xl">
          <div>
            <h3 className="text-2xl font-bold mb-3">{currentFeature}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Button
              className="bg-[#e53e3e] text-white p-4 font-extrabold rounded-lg shadow transition-colors duration-300 ease-in-out w-full md:w-auto"
              onClick={() => router.push(`/services/${url.toLowerCase()}`)}
            >
              Explore More
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              alt={currentFeature}
              className="rounded-lg shadow-lg w-full md:w-auto"
              src={imageUrl}
            />
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-4">
            {/* Show icons instead of buttons on mobile */}
            {window.innerWidth <= 768 ? (
              <>
                <Button
                  className="text-white px-3 text-xl py-2 flex items-center bg-slate-600 rounded-full"
                  onClick={prevFeature}
                >
                  <MdArrowBack />
                </Button>
                <Button
                  className="text-white px-3 text-xl py-2 flex items-center bg-slate-600 rounded-full"
                  onClick={nextFeature}
                >
                  <MdArrowForward />
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="text-white px-3 text-xl py-2 flex items-center bg-slate-600 rounded-full"
                  onClick={prevFeature}
                >
                  <MdArrowBack />
                </Button>
                {visibleFeatures.map((feature, index) => (
                  <Button
                    key={feature}
                    className={`${
                      activeFeatureIndex === featuresArray.indexOf(feature)
                        ? "bg-black"
                        : "bg-red-500"
                    } text-white lg:rounded-full rounded-xl px-6 py-2 max-w-[300px]  shadow transition-all duration-300 ease-in-out transform hover:scale-105`}
                    onClick={() =>
                      handleFeatureClick(featuresArray.indexOf(feature))
                    }
                  >
                    {feature}
                  </Button>
                ))}
                <Button
                  className="text-white px-3 text-xl py-2 flex items-center bg-slate-600 rounded-full"
                  onClick={nextFeature}
                >
                  <MdArrowForward />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
