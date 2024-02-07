// FeatureDetailPage.js

"use client";
import Blockchain from "@/app/components/commonComponents/Blockchain";
import BlockchainShow from "@/app/components/commonComponents/BlockchainShow";
import { useParams } from "next/navigation";

const FeatureDetailPage = () => {
  const params = useParams();
  const featureSlug = params.slug || "";

  // Function to render details for Genetic Engineering
  const renderGeneticEngineering = () => (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Genetic Engineering Details</h1>
        <p className="text-gray-700 mb-4">
          Dive into the advancements of Genetic Engineering, altering the
          genetic makeup for medical, agricultural, and industrial applications.
        </p>
        <img
          src="/genetic_engineering_image.jpg"
          alt="Genetic Engineering"
          className="w-full rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Sub-Features:</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Gene Editing</li>
          <li>Biotechnology</li>
          <li>Genomic Sequencing</li>
        </ul>
      </div>
    </div>
  );

  // Function to render details for Blockchain Technology
  const renderBlockchainTechnology = () => (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Blockchain Technology Details
        </h1>
        <p className="text-gray-700 mb-4">
          Explore the decentralized world of Blockchain, offering transparent
          and secure transactions, smart contracts, and revolutionary
          applications.
        </p>
        <img
          src="/blockchain_technology_image.jpg"
          alt="Blockchain Technology"
          className="w-full rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Sub-Features:</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Smart Contracts</li>
          <li>Decentralized Applications</li>
          <li>Crypto Tokens</li>
        </ul>
      </div>
    </div>
  );

  // Function to render details for Internet of Things
  const renderInternetOfThings = () => (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Internet of Things Details</h1>
        <p className="text-gray-700 mb-4">
          Unveil the interconnected world of IoT, enhancing daily life with
          smart devices, home automation, and data-driven decision making.
        </p>
        <img
          src="/iot_image.jpg"
          alt="Internet of Things"
          className="w-full rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Sub-Features:</h2>
        <ul className="list-disc ml-8 mb-4">
          <li>Smart Devices</li>
          <li>Data Analytics</li>
          <li>IoT Security</li>
        </ul>
      </div>
    </div>
  );

  // Use switch case to determine which function to call based on the feature slug
  const renderFeatureDetails = () => {
    switch (featureSlug) {
      case "genetic":
        return renderGeneticEngineering();
      case "blockchain":
        return <BlockchainShow />;
      case "internet":
        return renderInternetOfThings();
      default:
        return (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <p className="text-red-500 text-center font-bold">
              Feature not found or not implemented yet!
            </p>
          </div>
        );
    }
  };

  return renderFeatureDetails();
};

export default FeatureDetailPage;
