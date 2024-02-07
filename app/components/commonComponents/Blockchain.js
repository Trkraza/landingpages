import Image from "next/image";
import { FaUsers } from "react-icons/fa";
export default function Blockchain() {
  return (
    <>
      <div>
        <div className="bg-[#e6f9fc] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  alt="Blockchain Illustration"
                  className="rounded-t-3xl rounded-b-3xl"
                  height="400"
                  src="/blackchain.webp"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div>
                <div className="mb-6 inline-block bg-[#00c2cb] py-1 px-4 text-sm font-semibold text-white uppercase tracking-widest rounded-full">
                  <h4 className="flex justify-center items-center gap-2">
                    {" "}
                    <span>
                      <FaUsers />
                    </span>
                    <span>About Us</span>
                  </h4>
                </div>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                  Our Blockchain Development Services
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  We Provide safe, decentralized, and immutable blockchain
                  development services for your business.
                </p>
                <p className="mb-8 text-lg text-gray-600">
                  Blockchain development solutions demand in-depth expertise and
                  understanding. To assist you in creating your own Blockchain
                  project or solution, we provide our assistance and
                  professional knowledge. We work with you to create blockchain
                  technology for your business, which will eventually provide
                  you with simple and secure transaction records
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white gap-4  border-yellow-500  border-4 rounded-2xl">
                  <div className="flex flex-col items-center p-4 shadow rounded-lg border-2 border-r-yellow-100 ">
                    <span className="text-3xl font-bold text-gray-900">
                      50+
                    </span>
                    <span className="mt-1 text-lg font-medium text-gray-600">
                      Developers
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg ">
                    <span className="text-3xl font-bold text-gray-900">
                      100+
                    </span>
                    <span className="mt-1 text-lg font-medium text-gray-600">
                      Projects
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg">
                    <span className="text-3xl font-bold text-gray-900">7+</span>
                    <span className="mt-1 text-lg font-medium text-gray-600">
                      Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
