const hre = require("hardhat");
const { ethers, waffle } = require("hardhat");
const { expect, use } = require("chai");
const { solidity } = require("ethereum-waffle");
const { BigNumber, utils, provider } = ethers;
const web3 = require("web3");
const { parseUnits } = require('ethers/lib/utils');

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
        const nftContract = await ethers.getContractFactory("AYA");
        NFT = await nftContract.deploy();
    });

    it("Should mint KOL to owner", async () => {
        await NFT.mint(owner.address, 5); 
        const tx1 = await NFT.balanceOf(owner.address); 
        console.log("balance of owner: ", tx1);  //some big number issue
        
        console.log("balance of owner:", web3.utils.fromWei(tx1.toString()));
    });
    it("Should not let mint KOL for same ID", async () => {
        await NFT.mint(owner.address, 5); 
        const tx1 = await NFT.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString()));
    });
    it("Should transfer 0 wei", async () => {
        await KOLToken.transfer(alice.address, web3.utils.toWei("0"));
        const tx1 = await KOLToken.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString()));
        const tx2 = await KOLToken.balanceOf(alice.address); 
        console.log("balance of alice", web3.utils.fromWei(tx2.toString()));
    });
});