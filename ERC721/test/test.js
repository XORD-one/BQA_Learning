const hre = require("hardhat");
const { ethers, waffle } = require("hardhat");
const { expect, use } = require("chai");
const { solidity } = require("ethereum-waffle");
const { BigNumber, utils, provider } = ethers;

use(solidity);

const ZERO = new BigNumber.from("0");
const ONE = new BigNumber.from("1");
const ONE_ETH = utils.parseUnits("1", 18);
const LESS_ETH = utils.parseUnits("0.1", 5);
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const MAX_UINT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const [owner,alice,bob,carol,staker,addr1,addr2] = waffle.provider.getWallets();

describe("ERC721 contract fn test", () => {

    it("Should deploy ERC721", async () => {
        const token = await ethers.getContractFactory("ERC721");
        NFTtoken = await token.deploy();
        await NFTtoken.deployed();
    });
    
//     let MIT;
//     let deployer, taker, maker, partner;

//     before(async () => {
//         [deployer, taker, maker, partner] = await ethers.getSigners();
//         const mitContract = await ethers.getContractFactory("MIT721");
//         MIT = await mitContract.deploy();
//     });
//     it("it should show contract address", async () => {
//         console.log("MIT address: ", MIT.address);
//     });
//     it('should mint 3030 nfts in a single go', async () => {
//         let res = await MIT.mint(3030);
//     })
    
});