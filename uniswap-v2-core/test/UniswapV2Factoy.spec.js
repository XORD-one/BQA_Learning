//assertion library
const { expect, assert } = require("chai");
const { toChecksumAddress, zeroAddress } = require("ethereumjs-util");
const { ethers } = require("hardhat");
const web3 = require("web3");

//
const provider = waffle.provider;

// variables for testing
const feetoSetter_address = '0x287cf34b46797570c74BD367dC081B57d2A52A88' // default FeeToSetter address
const new_feeTo_addres = '0xbcB23907bd420000b2174d9aF306b7f25414160c'   // New FeeTo address
const new_feeToSetter_address = '0x221575B97A76b4Aca221f674CB300c2f9C877d01' // new feeToSetter address
const zero_address = '0x0000000000000000000000000000000000000000'       // burnable address
const non_0x_address = 'HeRxXNHFaPuE6oi1Y2uNjuDcHTXgZVMANRNd4yvLFrBC'   // non 0x address
const token1_address = '0x039B39C32121E68Dd78b92A871Daa54b7314F288' // TSUN as token1
const token2_address = '0xc778417E063141139Fce010982780140Aa0cD5Ab' // WETH as token2

describe('Test Suite Uniswap v2 Core', () => {
    beforeEach(async function () {
        [owner, addr1, addr2, ...addrs] = await provider.getWallets();
        // console.log('Owner address: ', owner.address)


        // getting factory contract 
        let factory_contract = await ethers.getContractFactory("UniswapV2Factory");

        // deploying token
        _contract = await factory_contract.deploy(owner.address);

        // waiting for the token to deploy
        await _contract.deployed();

        // console.log('Yeh Factory Contract address ha: ',_contract.address);
    })

    describe('Read only functions', () => {
        xit('Get Fee to address', async function () {
            // feeTo: indicating the recipient of the charge.
            const feeto = await _contract.feeTo()
            expect(feeto).to.be.equal(zero_address)
        })

        xit('Fee to setter', async function () {
            // feeToSetter: The address allowed to change feeTo.
            const feetoSetter = await _contract.feeToSetter()
            expect(feetoSetter).to.be.equal(owner.address)
        })

        it('All pairs length', async function () {
            // Returns the total number of pairs created through the factory so far.
            const allpairLength = await _contract.allPairsLength()
            expect(allpairLength).to.be.equal('0')
        })

        it.skip('All pairs at specific index', async function () {
            // Return address of the pair at the specific address
            // Pass 0 for the address of the first pair created, 1 for the second, etc.
            const allpairs = await _contract.allPairs(0)
            expect(allpairs).to.be.reverted;
        })

        xit('Get pair address', async function () {
            // Returns the address of the pair for tokenA and tokenB, if it has been created, else address(0)
            const pair_address = await _contract.getPair(owner.address, zero_address)
            expect(pair_address).to.be.equal(zero_address)
        })

    });

    describe('Write functions', () => {
        it('Create a Pair', async function () {
            // createPair: create a new pair
            // using the simple method
            // const createpair_tx = await _contract.createPair(token1_address, token2_address)
            // console.log("Create pair transaction: ", createpair_tx)

            // using the emit event
            const bytecode = `0x${UniswapV2Pair.evm.bytecode.object}`
            const create2Address = getCreate2Address(factory.address, tokens, bytecode)
            await expect(_contract.getPair(token1_address, token2_address)).to.emit(_contract.address, 'PairCreated').withArgs(token1_address, token2_address, create2Address, allPairs.length)

            // get the total number of pairs created through the factory so far.
            const allpairLength = await _contract.allPairsLength()
            // console.log('Number of Pairs: ', allpairLength)
            expect(allpairLength).to.be.equal('1')


            // get address of the pair at the specific address
            // Pass 0 for the address of the first pair created, 1 for the second, etc.
            const pairatIndex = await _contract.allPairs(0)
            // console.log('Pair at index 0: ', pairatIndex)


            // get the address of the pair for tokenA and tokenB
            const pair_address = await _contract.getPair(token1_address, token2_address)
            // console.log('Pair address: ', pair_address)
            expect(pair_address).to.be.equal(pairatIndex)
        })

        xit('SetFeeTo to new address', async function () {
            // not working - error - feetoSetter related

            // set feeTo address that is the recipeint of the charge
            const SetFeeTo_tx = await _contract.setFeeTo(new_feeTo_addres)
            // console.log('Setting a New feeTo address: ', SetFeeTo_tx)

            // feeTo: indicating the recipient of the charge.
            const feeto = await _contract.feeTo()
            expect(feeto).to.be.equal(new_feeTo_addres)
        })

        xit('setFeeToSetter to new address', async function () {
            // setFeeToSetter: The address allowed to change feeTo.
            const setNewFeeToSetter_tx = await _contract.setFeeToSetter(new_feeToSetter_address)
            // console.log('New feeToSetter address: ', setNewFeeToSetter_tx)

            // checking the new feeToSetter address
            const newFeeToSetter = await _contract.feeToSetter()
            expect(newFeeToSetter).to.be.equal(new_feeToSetter_address)
        })

    });

});
