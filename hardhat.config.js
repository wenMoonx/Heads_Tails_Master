/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      allowUnlimitedContractSize: true,
      accounts: {
        count: 20,
      },
      timeout: 1000000,
      // forking: {
      //   url: 'https://eth-mainnet.g.alchemy.com/v2/bMPtjoaH5fJRB9uRqkpJxbIHJn3ZkBes'
      // }
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.11",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.2",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.8.0",
      },
    ],
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 300000000,
  },
  plugins: ["solidity-coverage"],
};
