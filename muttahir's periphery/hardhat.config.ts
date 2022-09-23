
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
// import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";

dotenvConfig({ path: resolve(__dirname, "./.env") });

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

// Ensure that we have all the environment variables we need.
let privateKey: string;
if (!process.env.PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
} else {
  privateKey = process.env.PRIVATE_KEY;
}

let infuraApiKey: string;
if (!process.env.INFURA_API_KEY) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
} else {
  infuraApiKey = process.env.INFURA_API_KEY;
}

function createTestnetConfig(network: keyof typeof chainIds): NetworkUserConfig {
  if (network == "bsctestnet") {
    const url: string = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    
    return {
      accounts: [privateKey],
      chainId: chainIds[network],
      url,
    };
  }
  else if(network == "mumbai"){
    const url: string = "https://rpc-mumbai.maticvigil.com";
    return {
      accounts: [privateKey],
      chainId: chainIds[network],
      url,
    };
    
  }

  else if(network == "matic"){
    const url: string = "https://rpc-mainnet.maticvigil.com";
    const privateKey:any = process.env.PRIVATE_KEY;
    return {
      accounts: [privateKey],
      chainId: chainIds[network],
      url,
    };
    
  }

  else if(network == "bscmainnet"){
    const url: string = "https://rpc-mainnet.maticvigil.com";
    const privateKey:any = process.env.PRIVATE_KEY;
    return {
      accounts: [privateKey],
      chainId: chainIds[network],
      url,
    };
    
  }
  else {
    const url: string = "https://" + network + ".infura.io/v3/" + infuraApiKey;

    return {
      accounts: [privateKey],
      chainId: chainIds[network],
      url,
    };
  }
}
const config: HardhatUserConfig = {
  networks: {
    goerli: createTestnetConfig("goerli"),
    mainnet: createTestnetConfig("mainnet"),
    kovan: createTestnetConfig("kovan"),
    rinkeby: createTestnetConfig("rinkeby"),
    ropsten: createTestnetConfig("ropsten"),
    bsctestnet: createTestnetConfig("bsctestnet"),
    mumbai: createTestnetConfig("mumbai"),
    bscmainnet: createTestnetConfig("bscmainnet"),
    matic: createTestnetConfig("matic"),
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.6.6",
      },
      {
        version:" ^0.6.6"
      },
      {
        version: ">=0.4.0 "
      },
      {
        version: "^0.4.0 "
      },
      {
        version: "0.5.0",
      },
      {
        version: "^0.8.0",
      }
    ]
  },
};

export default config;
