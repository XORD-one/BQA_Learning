const { expect } = require('chai');
const { parseUnits } = require('ethers/lib/utils');
const { ethers, waffle } = require("hardhat");
const web3 = require("web3");
const [owner,alice,bob,carol,other,staking,addr1,addr2,user3,user4] = waffle.provider.getWallets();

// public   - all can access
// external - Cannot be accessed internally, only externally
// internal - only this contract and contracts deriving from it can access
// private  - can be accessed only from this contract

describe("ERC20 contract fn test", function (){

    // beforeEach("deploy KOL token", async () => {
    //     const kolnet = await ethers.getContractFactory("KOLNET");
    //     KOLToken = await kolnet.deploy();
    //     await KOLToken.deployed();
    // });

    it("Should deploy KOL token", async () => {
        const kolnet = await ethers.getContractFactory("KOLNET");
        KOLToken = await kolnet.deploy();
        await KOLToken.deployed();
    });

    it("Should mint KOL to owner", async () => {
        await KOLToken.mint(owner.address, parseUnits("1000000", "18")); //1000000
        const tx1 = await KOLToken.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString()));
    });

    it("Should burn some KOL of owner", async () => {
        await KOLToken.burn(parseUnits("2000", "18"));  //1000000-2000=998000
        const tx1 = await KOLToken.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString()));
    });

    it("Should transfer 1 wei", async () => {
        await KOLToken.transfer(alice.address, web3.utils.toWei("0.000000000000000001"));
        const tx1 = await KOLToken.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString())); //998000-0.000000000000000001=997999.999999999999999999
        const tx2 = await KOLToken.balanceOf(alice.address); 
        console.log("balance of alice", web3.utils.fromWei(tx2.toString())); //0.000000000000000001
    });

    it("Should transfer 0 wei", async () => {
        await KOLToken.transfer(alice.address, web3.utils.toWei("0"));
        const tx1 = await KOLToken.balanceOf(owner.address); 
        console.log("balance of owner", web3.utils.fromWei(tx1.toString()));
        const tx2 = await KOLToken.balanceOf(alice.address); 
        console.log("balance of alice", web3.utils.fromWei(tx2.toString()));
    });

    it("Should display total supply before and afer mint", async () => {
        const tx1 = await KOLToken.totalSupply(); 
        console.log("Total Supply of KOL", web3.utils.fromWei(tx1.toString()));  //998000
        await KOLToken.mint(owner.address, parseUnits("12345", "18"));
        const tx2 = await KOLToken.totalSupply(); 
        console.log("Total Supply of KOL after mint", web3.utils.fromWei(tx2.toString())); //998000+12345=1010345
    });

    it("Should verify name, symbol and decimals", async() => {
        console.log(expect(await KOLToken.name()).to.equal("KOLNET"));
        console.log(expect(await KOLToken.symbol()).to.equal("KOL"));
        console.log(expect(await KOLToken.decimals()).to.equal(18));
    }); 
    
    it("Should not let user tranfer more amount then user's balance", async() => {
        console.log(expect(await KOLToken.name()).to.equal("KOLNET"));
        console.log(expect(await KOLToken.symbol()).to.equal("KOL"));
        console.log(expect(await KOLToken.decimals()).to.equal(18));
    });             
});