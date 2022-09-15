import { ethers } from "hardhat";

async function main() {
	// uniswap v2 factory contracts deployment
	const factory = await ethers.getContractFactory("UniswapV2Factory");
	let factory_address = await factory.deploy("0x287cf34b46797570c74BD367dC081B57d2A52A88"); // feeToSetter = 0x360FAa21A46de5B6e54cc7d58c19866e28270FEF
	await factory_address.deployed();
  console.log("Factory Address: ", factory_address.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
