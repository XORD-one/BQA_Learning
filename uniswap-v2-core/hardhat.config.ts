import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomiclabs/hardhat-waffle";

const { INFURA_API_KEY, PRIVATE_KEY } = process.env;
const chainIds = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  bscmainnet: 56,
  matic: 137,
  rinkeby: 4,
  ropsten: 3,
  bsctestnet: 97,
  mumbai:80001 ,
};

if (!(INFURA_API_KEY || PRIVATE_KEY)) {
  throw new Error("Please set your INFURA_API_KEY & PRIVATE_KEY in a .env file");
}

export default {
  
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.5.16",
      }
    ]
  },
  
  networks: {
    goerli: {
      accounts: [PRIVATE_KEY],
      chainId: chainIds['goerli'],
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      gas: 2100000,
    },
    rinkeby: {
      accounts: [PRIVATE_KEY],
      chainId: chainIds['rinkeby'],
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      gas: 2100000,
    },
    ropsten: {
      accounts: [PRIVATE_KEY],
      chainId: chainIds['ropsten'],
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      gas: 2100000,
    },
  },

  etherscan: {
    apiKey: "R4EM2ERTIYCWHXK1HBQMCD982Q1WSYJIEN",
  },
};



