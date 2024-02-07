"use client";
import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircle, FaRegSquare, FaRegStar } from "react-icons/fa";

export default function Home() {
  const buttonData = [
    {
      id: "circle",
      icon: <FaRegCircle className="text-3xl hover:text-blue-500" />,
      text: "Circle Icon Button",
      description:
        "Description for Circle Button. Here is more detailed information.",
      imagePath: "/block1.webp",
    },
    {
      id: "square",
      icon: <FaRegSquare className="text-3xl hover:text-green-500" />,
      text: "Square Icon Button",
      description:
        "Description for Square Button. Here is more detailed information.",
      imagePath: "/ai1.webp",
    },
    {
      id: "star",
      icon: <FaRegStar className="text-3xl hover:text-yellow-500" />,
      text: "Star Icon Button",
      description:
        "Description for Star Button. Here is more detailed information.",
      imagePath: "/fs1.jfif",
    },
  ];

  const [activeData, setActiveData] = useState(buttonData[0]);

  const textVariants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: "tween", duration: 1.0 } },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { type: "tween", duration: 1.0 },
    },
  };

  const imageVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: "tween", duration: 1.0 } },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { type: "tween", duration: 1.0 },
    },
  };

  return (
    <div>
      <Head>
        <title>Interactive Icon Buttons with TailwindCSS</title>
      </Head>

      <main className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4  md:px-10 gap-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id + "text"}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:w-1/2 mb-4"
          >
            <div className="bg-white shadow-xl rounded-xl ml-0 lg:ml-7 flex flex-col justify-center p-6 border border-gray-200 h-auto md:h-[50vh] w-full md:w-[40vw]">
              <h2 className="text-xl font-bold mb-2">{activeData.text}</h2>
              <p className="text-gray-600">{activeData.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-4 bg-black text-white rounded-full p-2 mb-4">
          {buttonData.map((button) => (
            <div
              key={button.id}
              onClick={() => setActiveData(button)}
              className="cursor-pointer rounded-full hover:bg-gray-200 transition duration-300"
            >
              {button.icon}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id + "image"}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:w-1/2"
          >
            <div className="shadow-xl rounded-xl overflow-hidden h-auto md:h-[50vh] w-full md:w-[40vw] flex justify-center">
              <img
                src={activeData.imagePath}
                alt="Dynamic Image"
                className="object-cover h-auto w-full" // Adjusted for correct sizing
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
