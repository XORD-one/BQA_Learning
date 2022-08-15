// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    // //Deploying Normal Contract
    //   const Kongz = await ethers.getContractFactory("Cyberlion");
    //   const kongz = await Kongz.deploy("https://ipfs.infura.io/ipfs/QmcnmA55F2tBVxkEsyjC9ufGsUnBpmiU4Rzhy5bNuRLLew");
    //   await kongz.deployed();
    //     console.log("Kongz Contract Address", kongz.address);

    //Deploying Normal Contract
    const [deployer]= await ethers.getSigners();
    console.log("Deployer Address", deployer.address);
   
    // const params = ["0xa0e9e6b79a3e1ab87feb209567ef3e0373210a89","0xec3de49eead1501fb9a4832dcf3ddcfa4d83badf","0xdb3c70be87586cf814daec0e534813529a6ea1d4"]
    // const UnipilotStaking = await ethers.getContractFactory("UnipilotStaking");
    
    // const unipilotStaking = await UnipilotStaking.deploy(...params);
    // await unipilotStaking.deployed();
    // console.log("unipilotStaking  Address", unipilotStaking.address);

    const mitContract = await ethers.getContractFactory("MIT721");
    const MIT = await mitContract.deploy();
    console.log("MIT Contract Address", MIT.address);

    //Deploying Upgradable Contract
    // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
    // const greeter = await upgrades.deployProxy(Greeter,["Hello World"],{initializer: 'initialize'});
    // await greeter.deployed();
    // console.log("Greeter Upgradable Contract Address", greeter.address);

    //Upgrading Upgradable Contract
    // const proxyAddress = '0x9539f8A71e8129623050ee117a92Efa6c5a23e5b';
    // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
    // const GreeterAddress = await upgrades.prepareUpgrade (proxyAddress,Greeter);
    // console.log("Greeter upgrade address :",GreeterAddress);
}
(async function () {
    try {
        await main();
    } catch (error) {
        console.log(error);
    }
})();
