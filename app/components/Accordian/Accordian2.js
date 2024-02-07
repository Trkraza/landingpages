"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between bg-[#2d2b3f] p-4 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronRightIcon
          className={`text-white transform ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      {isOpen && <div className="p-4 text-sm text-gray-300">{children}</div>}
    </div>
  );
}

export default function Accordian2() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center border border-white text-white p-8">
      <div className="mb-12 text-center">
        <h2 className="text-sm uppercase tracking-widest mb-2">
          Frequently Asked Questions
        </h2>
        <h1 className="text-5xl font-bold">KNow More About</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="flex flex-col space-y-4">
          <AccordionItem title="What is 0x3f.Lancers do ?">
            Ox3f.Lancers is a Crypto Based StartUp
          </AccordionItem>
          <AccordionItem title="Who Features You Provide">
            We provide many Features Inckuding Web Development,Dapps Etc
          </AccordionItem>
        </div>
        <div className="flex flex-col space-y-4">
          <AccordionItem title="What is Youre Goal?">
            Solving Real World Issues
          </AccordionItem>
          <AccordionItem title="How Many Projects You have completed?">
            We Have Completed Many Projects Reach To Projects Section
          </AccordionItem>
        </div>
      </div>
      <div className="mt-8">
        <Button className="bg-[#5f5c7f] hover:bg-[#504e68] text-white py-2 px-6 rounded-lg flex items-center">
          Learn More
          <ChevronRightIcon className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
