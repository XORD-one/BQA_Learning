//assertion library
import { expandTo18Decimals } from './shared/utilities';
import { toChecksumAddress, zeroAddress } from 'ethereumjs-util';
import { expect, assert } from 'chai';
import { ethers, waffle } from 'hardhat';
import web3 from 'web3';
import { loadFixture } from 'ethereum-waffle';
import { pairFixture } from './shared/fixturesUpdated';
import { BigNumber, Contract, utils } from 'ethers';

//
const provider = waffle.provider;

// variables for testing 
const overrides = {
    gasLimit: 999999
  }

describe('Test Suite Uniswap v2 Pair', () => {
    describe('Read only functions', () => {
        it('mint', async () => { 
            const { owner, token0, token1, pair } = await loadFixture(pairFixture) 
            
            const token0Amount = expandTo18Decimals(1) // token1 amount of liquidity that will add to the pair
            const token1Amount = expandTo18Decimals(4) // token2 amount of liquidity that will add to the pair
            // transfer tx for adding liquidity of token1
            await token0.transfer(pair.address, token0Amount)
            // transfer tx for adding liquidity of token2
            await token1.transfer(pair.address, token1Amount)

            const expectedLiquidity = expandTo18Decimals(2)
            const MINIMUM_LIQUIDITY = BigNumber.from(10).pow(3)

            await expect(pair['mint(address)'](owner.address))
                .to.emit(pair, 'Transfer')
                .withArgs(zeroAddress, zeroAddress, MINIMUM_LIQUIDITY)
                .to.emit(pair, 'Transfer')
                .withArgs(zeroAddress, owner.address, expectedLiquidity.sub(MINIMUM_LIQUIDITY))
                .to.emit(pair, 'Sync')
                .withArgs(token0Amount, token1Amount)
                .to.emit(pair, 'Mint')
                .withArgs(owner.address, token0Amount, token1Amount)
            console.log('in After mint')
            expect(await pair.totalSupply()).to.eq(expectedLiquidity)
            expect(await pair.balanceOf(owner.address)).to.eq(expectedLiquidity.sub(MINIMUM_LIQUIDITY))
            expect(await token0.balanceOf(pair.address)).to.eq(token0Amount)
            expect(await token1.balanceOf(pair.address)).to.eq(token1Amount)
            const reserves = await pair.getReserves()
            expect(reserves[0]).to.eq(token0Amount)
            expect(reserves[1]).to.eq(token1Amount)
        })

    })
})
