import React from "react";
import Blockchain from "./Blockchain";
import BlockchainSlider from "./BlockchainSlider";
import BlockchainProjects from "./BlockchainProjects";
import IconSlider from "./BlockchainIcon";

const BlockchainShow = () => {
  return (
    <div>
      <Blockchain />
      <BlockchainSlider />
      <BlockchainProjects />
      <IconSlider />
    </div>
  );
};

export default BlockchainShow;
