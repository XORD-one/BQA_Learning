import { ethers } from "hardhat";

async function main() {
	// uniswap v2 factory contracts deployment
	const periphery = await ethers.getContractFactory("UniswapV2Router02");
	let periphery_address = await periphery.deploy("0x0e774D35989D39B5C68da6eB3Bf8786d5D2516cF", "0xc778417E063141139Fce010982780140Aa0cD5Ab"); // Rinkeby WETH = 0xc778417E063141139Fce010982780140Aa0cD5Ab, Factory Contract = 0x0e774D35989D39B5C68da6eB3Bf8786d5D2516cF
	await periphery_address.deployed();
	console.log("Periphery Address: ", periphery_address.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
