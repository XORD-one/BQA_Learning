//assertion library
import { deployContract } from "ethereum-waffle";
import ERC20 from "../../artifacts/contracts/UniswapV2ERC20.sol/UniswapV2ERC20.json";
import UniswapV2Factory from "../../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json";
import UniswapV2Pair from "../../artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json";
import { Contract, Wallet } from "ethers";
import { artifacts } from "hardhat";



// variables for testing 
const total_supply = 100 // intial total supply
const tokenA_supply = 10000 // tokenA supply
const tokenB_supply = 10000 // tokenB  supply

//--------------------------------------------With Fixture method 01----------------------------------------------//

// while using fixtures method # 01 --- {working nice}
export async function erc20Fixture([owner, addr1, addr2, addr3]:Wallet[]) {
  // now contract to deploy will go here..
  const _contract = await deployContract(owner, ERC20)
  // console.log('Yeh UniswapV2ERC20 token Contract address ha: ', _contract.address);

  // minting the UniswapV2ERC20 token
  await _contract.mint(owner.address, total_supply)
  const total_balance = await (_contract.balanceOf(owner.address))
  console.log('Balance of owner: ', String(total_balance));

  return { _contract, owner, addr1, addr2, addr3 }
}

//--------------------------------------------With Fixture method 02----------------------------------------------//
// while using fixtures method # 02 --- {working unexpected}
// async function erc20Fixture02() {
//     [owner, addr1, addr2, addr3, ...addrs] = await provider.getWallets();
//     // console.log('Owner address: ', owner.address)


//     // getting UniswapV2ERC20 contract
//     let factory_contract = await ethers.getContractFactory("UniswapV2ERC20");

//     // deploying token
//     _contract = await factory_contract.deploy();

//     // waiting for the token to deploy
//     await _contract.deployed();

//     // console.log('Yeh UniswapV2ERC20 token Contract address ha: ', _contract.address);

//     // minting the token each time the it block run
//     await expect(_contract.mint(owner.address, total_supply))
//         .to.emit(_contract, 'Transfer')
//         .withArgs(zero_address, owner.address, total_supply)

//     return { _contract, owner, addr1, addr2, addr3 }
// }

//--------------------------------------------Factory Fixture----------------------------------------------//

export async function factoryFixture([owner, addr1, addr2, addr3]:Wallet[]) {
  // now contract to deploy will go here..
  const factory_contract = await deployContract(owner, UniswapV2Factory, [owner.address])
  // console.log('Yeh UniswapV2Factory Contract address ha: ', factory_contract.address);

  return { factory_contract, owner, addr1, addr2, addr3 }
}

//--------------------------------------------Pair Fixture----------------------------------------------//

export async function pairFixture([owner, addr1, addr2, addr3]:Wallet[]) {

  // now contract to deploy will go here..
  // we have to use the factory contract here bcz we have to create pair and to use other functios from factory
  const { factory_contract } = await factoryFixture([owner, addr1, addr2, addr3])

  // deploying token A & B for pair contract
  const tokenA = await deployContract(owner, ERC20)
  const tokenB = await deployContract(owner, ERC20)
  
  // minting the tokenA
  await tokenA.mint(owner.address, tokenA_supply)
  const tokenA_balance = await (tokenA.balanceOf(owner.address))

  // minting the tokenB
  await tokenB.mint(owner.address, tokenB_supply)
  const tokenB_balance = await (tokenB.balanceOf(owner.address))

  // creating pair of tokenA and tokenB
  await factory_contract.createPair(tokenA.address, tokenB.address)
  const pairAddress = await factory_contract.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(UniswapV2Pair.abi)).connect(owner)
  
  // const tokenArtifact = await artifacts.readArtifact("UniswapV2Pair")
  // const pair = new Contract(pairAddress, tokenArtifact.abi, provider).connect(owner)
  
  // await pair['mint(address)'](owner.address, {gasLimit: 999999})
  // console.log("owner",owner.address); 

  const token0Address = await pair.token0()
  const token0 = tokenA.address === token0Address ? tokenA : tokenB;
  const token1 = tokenA.address === token0Address ? tokenB : tokenA;
  // console.log('token0: ', token0.address)
  // console.log('token1: ', token1.address)

  return { owner, factory_contract, token0, token1, pair }
}

//--------------------------------------------Fixtures Ended----------------------------------------------//
