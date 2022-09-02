import { ethers } from "hardhat";

async function main() {
	// uniswap v2 factory contracts deployment
	const factory = await ethers.getContractFactory("UniswapV2Factory");
	let factory_address = await factory.deploy("0xbcB23907bd420000b2174d9aF306b7f25414160c"); // feeToSetter = 0xbcB23907bd420000b2174d9aF306b7f25414160c
	await factory_address.deployed();
  console.log("Factory Address: ", factory_address.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
