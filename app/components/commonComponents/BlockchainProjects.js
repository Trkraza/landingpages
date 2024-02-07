import Head from "next/head";
import Image from "next/image";

const services = [
  {
    title: "Retail",
    imageSrc: "/retail1.jpg", // Make sure to replace with your actual image paths
    description:
      "Enhance your retail business with blockchain solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
  {
    title: "Real Estate",
    imageSrc: "/realestate.avif",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
  {
    title: "E - Voting",
    imageSrc: "/evoting.jfif",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
  {
    title: "health-Care",
    imageSrc: "/healthcare.jfif",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
  {
    title: "Supply-Chain",
    imageSrc: "/supplychain.jfif",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
  {
    title: "AI-Service",
    imageSrc: "/ai.jfif",
    description:
      "Blockchain technology for secure real estate transactions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia orci ut libero cursus, eu gravida lectus sagittis. Fusce vehicula facilisis justo, et semper tellus fermentum vel. Morbi ac mi felis. Duis in dui nec ligula hendrerit ullamcorper. Maecenas eget tincidunt arcu. Duis non ultrices justo. Nulla facilisi. Sed feugiat tortor vel velit imperdiet, nec eleifend velit tempus. Sed nec nisl nec nisl vestibulum bibendum. Nunc in felis sit amet nulla hendrerit convallis vel vel metus. Ut semper, arcu id tempus venenatis, dui arcu tristique lacus, non semper nisi tortor nec augue.",
  },
];

export default function BlockchainProjects() {
  return (
    <div className=" bg-white py-10 mx-32">
      <Head>
        <title>Blockchain Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-extrabold text-center mx-auto py-2  pt-4 w-[50vw] mb-8">
        Our Blockchain Development Services for Various Sectors
      </h1>
      <main className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <Image
            src="/face.png" // Replace with your actual image path
            alt="Main Image"
            width={50}
            height={50}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const ServiceCard = ({ title, imageSrc, description }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-32 sm:h-48 object-cover group-hover:opacity-75"
      />
      <div className="p-4">
        <p className="text-2xl font-bold text-center text-gray-900 ">{title}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 transition-all transform translate-y-full duration-1000 group-hover:translate-y-0">
        <p className="text-gray-700 text-sm text-center  ">{description}</p>
      </div>
    </div>
  );
};
