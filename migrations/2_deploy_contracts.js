const { artifacts } = require("hardhat");
const HeadsOrTails = artifacts.require("HeadsOrTails");

module.exports = function (deployer) {
  deployer.deploy(HeadsOrTails);
};
