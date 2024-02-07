import React from "react";
import "./Orbit.scss";

import Image from "next/image";

const Orbit = () => {
  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center border-2 border-black rounded-full p-2">
          {/* <FaCode className="orbit-center__icon" /> */}

          <Image src="/companyLogo.ico" width={70} height={70} alt="image" />

          <Image src="/companyLogo.ico" width={60} height={60} />
        </li>

        <li>
          <ul className="orbit-ring-0">
            <li>
              <img src="/xrp.ico" alt="image" />
            </li>
            <li>
              <img src="/hedera.ico" alt="image" />
            </li>
            <li>
              <img src="/near.ico" alt="image" />
            </li>
            <li>
              <img src="/sui-sui-logo.ico" alt="image" />
            </li>
            <li>
              <img src="/celetia.ico" alt="image" />
            </li>
            <li>
              <img src="/fantom.ico" alt="image" />
            </li>
            <li>
              <img src="/injective.ico" alt="image" />
            </li>
          </ul>
        </li>

        <li>
          <ul className="orbit-ring-1">
            <li>
              <img src="/arbitrum.ico" alt="image" />
            </li>
            <li>
              <img src="/polygon.ico" alt="image" />
            </li>
            <li>
              <img src="/optimism.ico" alt="image" />
            </li>
            <li>
              <img src="/base.ico" alt="image" />
            </li>
            <li>
              <img src="/manta.ico" alt="image" />
            </li>
            <li>
              <img src="/starknet.ico" alt="image" />
            </li>
            <li>
              <img src="/zksync.ico" alt="image" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="orbit-ring-2">
            <li>
              <img src="/bitcoin.ico" alt="image" />

              <img src="/Bitcoin.ico" alt="image" />
            </li>
            <li>
              <img src="/ethereum.ico" alt="image" />
            </li>
            <li>
              <img src="/bnb-bnb-logo.ico" alt="image" />
            </li>
            <li>
              <img src="/Solana.ico" alt="image" />
            </li>
            <li>
              <img src="/tron.ico" alt="image" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="orbit-ring-3">
            <li>
              <img src="/avalanche.ico" alt="image" />
            </li>
            <li>
              <img src="/cosmos.ico" alt="image" />
            </li>
            <li>
              <img src="/polkadot.ico" alt="image" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Orbit;
