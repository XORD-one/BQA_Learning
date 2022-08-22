// scripts/create-box.js
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
	const provider = ethers.provider;

	let privateKey = process.env.PRIVATE_KEY;
	let owner = new ethers.Wallet(privateKey, provider);

	let balance = await owner.getBalance();
	console.log("Owner Balance: @", owner.address, balance);

	//assign address
	// let ZYGToken = "0x8f877316573a19bd3eca0faa64121e101ef07592";
	// let rewardToken = "0x8f877316573a19bd3eca0faa64121e101ef07592";

	let rinkebyAddress = {
		ZYGToken: "0x8f877316573a19bd3eca0faa64121e101ef07592",
		rewardToken: "0x8f877316573a19bd3eca0faa64121e101ef07592",
		rewardDistributor: "0x977d07383b9B0050559E992D8bE7D716020F4b81",
		lpTokenStaker: "0x7dD8B2B1307A392f397FD9FE3Ba2854f3A2dc575",
	};

	// //liquidity mining contracts deployment
	const RewardDistributor = await ethers.getContractFactory("RewardDistribution");
	const LpTokenStaker = await ethers.getContractFactory("LpStaker");
	const ZYGTokenLocker = await ethers.getContractFactory("ZYGLocking");

	// let rewardDistributor = await RewardDistributor.deploy(rinkebyAddress.rewardToken);
	// let lpTokenStaker = await LpTokenStaker.deploy(rinkebyAddress.rewardToken, rinkebyAddress.rewardDistributor);
	let zygStaker = await ZYGTokenLocker.deploy(rinkebyAddress.ZYGToken, rinkebyAddress.rewardToken, rinkebyAddress.rewardDistributor);

	// console.log("rewardDistributor: ", rewardDistributor.address);
	// console.log("lpTokenStaker: ", lpTokenStaker.address);
	console.log("zygStaker: ", zygStaker.address);
}
(async () => {
	try {
		await main();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();