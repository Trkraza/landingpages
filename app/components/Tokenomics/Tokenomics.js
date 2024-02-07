import { FaCheck, FaMinus } from "react-icons/fa";

const Tokenomics = () => {
  return (
    <div className="containerGlass container border border-b-gray-950 rounded-3xl  bg-gradient-to-b from-[#0052FF] to-[#FFFFFF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
        <div className="lg:col-start-1 lg:col-end-7">
          <div className="flex flex-col h-full justify-start">
            <div className="mb-4">
              <h1 className="text-lg font-bold text-pink-500 mt-5">
                Tokenomics
              </h1>
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-white">
              $LOOT<span className="opacity-50"> Token</span>
            </h2>
            <p className="mb-8 text-lg leading-loose text-white">
              Total Supply: <span className="font-bold">10,000,000 $LOOT</span>
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    Buy/Sell Tax:
                  </span>
                  5% tax applied to each transaction of $LOOT
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    First 6 months:
                  </span>
                  1% for LP, 4% for team
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    After 6 months:
                  </span>
                  1% for LP, 2% for revenue sharing, 2% for team
                </span>
              </li>
            </ul>
            <hr className="h-[1px] bg-white/20 block mb-8" />
            <ul className="space-y-4">
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    Printer goes brrr:
                  </span>
                  Token holders are eligible for 50% off subscription fee and
                  25% revenue share
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    Farm together:
                  </span>
                  $LOOT holders can refer users and earn 5% of all fees
                  collected from referred users.
                </span>
              </li>
              <li className="flex items-baseline">
                <span className="mr-2 text-green-400">
                  <FaCheck size={16} className="text-gray-300" />
                </span>
                <span className="text-white">
                  <span className=" font-extrabold text-white mr-2">
                    Earn together:
                  </span>
                  Token holders can burn $LOOT for $xLOOT which earns 50%
                  revenue share.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-end-13  mt-6">
          <div className="flex flex-col ">
            <div className="mb-4 w-full ">
              <span className="text-white   text-opacity-40 text-xs uppercase tracking-widest">
                TOKEN DISTRIBUTION
              </span>
            </div>
            <div className="mb-8 w-full flex flex-col space-y-4">
              <div className="flex flex-col ">
                <span className="text-white font-bold text-lg">500,000</span>
                <span className="text-sm text-white">
                  Team &amp; Founder (5%)
                </span>
                <div className="mt-3 w-full h-1 bg-white bg-opacity-20 rounded">
                  <div
                    className="h-full bg-pink-500 rounded"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-white font-bold text-lg">500,000</span>
                <span className="text-sm text-white">CEX Listing (5%)</span>
                <div className="mt-3 w-full h-1 bg-white bg-opacity-20 rounded">
                  <div
                    className="h-full bg-pink-500 rounded"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-white font-bold text-lg">4,000,000</span>
                <span className="text-sm text-white">
                  Supply Added to Liquidity (40%)
                </span>
                <div className="mt-3 w-full h-1 bg-white bg-opacity-20 rounded">
                  <div
                    className="h-full bg-pink-500 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-white font-bold text-lg">5,000,000</span>
                <span className="text-sm text-white">Seed (50%)</span>
                <div className="mt-3 w-full h-1 bg-white bg-opacity-20 rounded">
                  <div
                    className="h-full bg-pink-500 rounded"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 w-full ">
                <span className="text-white text-opacity-40 text-xs uppercase tracking-widest">
                  VESTING
                </span>
              </div>
              <ul className="text-sm space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-100">
                    <FaMinus size={16} className="text-gray-300 " />
                  </span>
                  <span className="text-white">
                    <span className=" font-extrabold text-white mr-2">
                      Team:
                    </span>
                    0% TGE, 6 months cliff, linear for 9 months
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-2 text-gray-100">
                    <FaMinus size={16} className="text-gray-300 " />
                  </span>
                  <span className="text-white">
                    <span className=" font-extrabold text-white mr-2">
                      Seed:
                    </span>
                    33% TGE, linear for 1 month
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
