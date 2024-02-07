"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Orbit from "../commonComponents/Orbit/Orbit";

const buttonTooltips = {
  bitcoin: "Bitcoin",
  ethereum: "Ethereum",
  bnb: "BNB",
  solana: "Solana",
  avalanche: "Avalanche",
  cosmos: "Cosmos",
  celo: "Celo",
  polygon: "Polygon",
  base: "Base",
  optimism: "Optimism",
  aribitrum: "Arbitrum",
  TonCoin: "TonCoin",
};

const buttonImages = {
  bitcoin: "/Bitcoin.ico",
  ethereum: "/ethereum.ico",
  bnb: "/bnb-bnb-logo.ico",
  solana: "/Solana.ico",
  avalanche: "/avalanche.ico",
  cosmos: "/cosmos.ico",
  celo: "/celetia.ico",
  polygon: "/polygon.ico",
  base: "/base.ico",
  optimism: "/optimism.ico",
  aribitrum: "/arbitrum.ico",
  TonCoin: "/tron.ico",
};

const HeroSection = () => {
  const colorOptions = {
    bitcoin: {
      background: "bg-[#F7931A]",
      text: "text-black",
      smallText: "text-white",
    },
    ethereum: {
      background: "bg-[#627EEA]",
      text: "text-white",
      smallText: "text-green-500",
    },
    bnb: {
      background: "bg-[#F0B90B]",
      text: "text-white",
      smallText: "text-red-500",
    },
    solana: {
      background: "bg-gradient-to-r from-[#17BB9D] to-[#7367E2]",
      text: "text-white",
      smallText: "text-orange-500",
    },
    avalanche: {
      background: "bg-[#E84142]",
      text: "text-white",
      smallText: "text-yellow-700",
    },
    cosmos: {
      background: "bg-[#2E3148]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    celo: {
      background: "bg-gradient-to-r from-[#FBCC5C] to-[#35D07F]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    polygon: {
      background: "bg-[#8247E5]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    base: {
      background: "bg-gradient-to-r from-[#0052FF] to-[#FFFFFF]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    optimism: {
      background: "bg-[#FF0420]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    aribitrum: {
      background: "bg-gradient-to-r from-[#213147] via-[#FFFFFF] to-[#12AAFF] ",
      text: "text-white",
      smallText: "text-yellow-500",
    },
    TonCoin: {
      background: "bg-[#0098EA]",
      text: "text-white",
      smallText: "text-yellow-500",
    },
  };

  const [buttonStyles, setButtonStyles] = useState({
    background: "bg-white",
    text: "text-black",
    smallText: "text-blue-800",
  });

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (colorOption, key) => {
    setButtonStyles(colorOption);
    setActiveButton(key);
  };

  const [tooltip, setTooltip] = useState({
    show: false,
    content: "",
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (e, name) => {
    setTooltip({
      show: true,
      content: buttonTooltips[name],
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, show: false });
  };

  return (
    <section
      className={`lg:pt-32 ${buttonStyles.background} w-[100vw] h-[100vh] pb-28 rounded-lg`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mx-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            className={`text-4xl sm:text-5xl lg:text-[75px] lg:leading-normal font-extrabold select-none ${buttonStyles.text} transition-all duration-1000`}
          >
            <span
              className={`${buttonStyles.smallText} from-primary-400 to-secondary-600 transition-all duration-1000`}
            >
              Hello, We are{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developers",
                1000,
                "Web3 Developers",
                1000,
                "UI/UX Designers",
                1000,
                "Bot Developers",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
              className={`${buttonStyles.text}`}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl transition-all duration-1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>

          {/* Tooltip Element */}
          {tooltip.show && (
            <div
              style={{
                position: "fixed",
                top: tooltip.y + 10,
                left: tooltip.x + 10,
                zIndex: 1000,
              }}
              className="p-2 bg-[#008080] text-white text-xs rounded-md"
            >
              {tooltip.content}
            </div>
          )}

          <div className="flex flex-col items-center bg-[#ffff] py-2 px-3 rounded-full border border-red-900 space-y-4 shadow-lg transition-all duration-1000">
            <div className="flex space-x-4">
              {Object.entries(colorOptions).map(
                ([key, value]) =>
                  key !== "reset" && (
                    <button
                      key={key}
                      onClick={() => handleButtonClick(value, key)}
                      onMouseEnter={(e) => handleMouseEnter(e, key)}
                      onMouseLeave={handleMouseLeave}
                      className={`cursor-pointer focus:outline-none transition-all duration-1000 transform hover:scale-110 rounded-full bg-gray-200 p-1 ${activeButton === key ? "ring-2 ring-gray-400" : ""
                        }`}
                    >
                      <Image
                        src={buttonImages[key]}
                        alt={key}
                        width={30}
                        height={30}
                      />
                    </button>
                  )
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-5 place-self-center"
        >
          <Orbit />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
