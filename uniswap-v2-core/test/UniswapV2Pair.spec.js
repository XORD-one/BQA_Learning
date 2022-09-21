//assertion library
// const { expandTo18Decimals } = require("./shared/utilities");
const { bigNumberify, toChecksumAddress, zeroAddress } = require("ethereumjs-util");
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const web3 = require("web3");
const { loadFixture } = require("ethereum-waffle");
const { pairFixture } = require("./shared/fixtures.js");
const { Contract, utils } = require("ethers");

//
const provider = waffle.provider;

// variables for testing 
const total_supply = 100 // intial total supply
const approval_amount = 50 // for giving approval to addr1
const transfer_amount = 20  // for transfer to addr2
const zero_address = '0x0000000000000000000000000000000000000000'       // burnable address
// const MINIMUM_LIQUIDITY = utils.bigNumberify(10).pow(3); // Min liquidity

describe('Test Suite Uniswap v2 Pair', () => {
    // beforeEach(async function () {
    //     [owner, addr1, addr2, addr3, ...addrs] = await provider.getWallets();
    // })

    describe('Read only functions', () => {
        it('mint', async () => {
            const { owner, token0, token1, pair } = await loadFixture(pairFixture)
            console.log('')
            const token0Amount = 2;    // token1 amount of liquidity that will add to the pair
            const token1Amount = 4;   // token2 amount of liquidity that will add to the pair

            // transfer tx for adding liquidity of token1
            await token0.transfer(pair.address, token0Amount)

            // transfer tx for adding liquidity of token2
            await token1.transfer(pair.address, token1Amount)


            const expectedLiquidity = 2;
            await expect(pair['mint(address)'](owner.address, { gasLimit: 999999 }))
                .to.emit(pair, 'Transfer')
                .withArgs(zeroAddress, zeroAddress, MINIMUM_LIQUIDITY)
                .to.emit(pair, 'Transfer')
                .withArgs(zeroAddress, owner.address, expectedLiquidity - (MINIMUM_LIQUIDITY))
                .to.emit(pair, 'Sync')
                .withArgs(token0Amount, token1Amount)
                .to.emit(pair, 'Mint')
                .withArgs(owner.address, token0Amount, token1Amount)
            console.log('in After mint')
            // expect(await pair.totalSupply()).to.eq(expectedLiquidity)
            // expect(await pair.balanceOf(owner.address)).to.eq(expectedLiquidity.sub(MINIMUM_LIQUIDITY))
            // expect(await token0.balanceOf(pair.address)).to.eq(token0Amount)
            // expect(await token1.balanceOf(pair.address)).to.eq(token1Amount)
            // const reserves = await pair.getReserves()
            // expect(reserves[0]).to.eq(token0Amount)
            // expect(reserves[1]).to.eq(token1Amount)
        })

    })
})
