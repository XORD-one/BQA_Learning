//assertion library
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const web3 = require("web3");
const { loadFixture } = require("ethereum-waffle");
const { factoryFixture } = require("./shared/fixtures.js");
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
        //---------------Without using fixtures--------------------------//
        // [owner, addr1, addr2, ...addrs] = await provider.getWallets();
        // // console.log('Owner address: ', owner.address)


        // // getting factory contract 
        // let factory_contract = await ethers.getContractFactory("UniswapV2Factory");

        // // deploying token
        // _contract = await factory_contract.deploy(owner.address);

        // // waiting for the token to deploy
        // await _contract.deployed();

        // // console.log('Yeh Factory Contract address ha: ',_contract.address);

        //---------------While using fixtures--------------------------//
        

    })


    describe('Read only functions', () => {
        it('Get Fee to address', async function () {
            // load factory fixture
            const { factory_contract } = await loadFixture(factoryFixture)

            // feeTo: indicating the recipient of the charge.
            const feeto = await factory_contract.feeTo()
            expect(feeto).to.be.equal(zero_address)
        })

        it('Fee to setter', async function () {
            // load factory fixture
            const { factory_contract, owner } = await loadFixture(factoryFixture)

            // feeToSetter: The address allowed to change feeTo.
            const feetoSetter = await factory_contract.feeToSetter()
            expect(feetoSetter).to.be.equal(owner.address)
        })

        it('All pairs length', async function () {
            // load factory fixture
            const { factory_contract } = await loadFixture(factoryFixture)

            // Returns the total number of pairs created through the factory so far.
            const allpairLength = await factory_contract.allPairsLength()
            expect(allpairLength).to.be.equal('0')
        })

        it('All pairs at specific index', async function () {
            // Error not working: 
            /*"message":"VM Exception while processing transaction: invalid opcode"*/

            // load factory fixture
            const { factory_contract } = await loadFixture(factoryFixture)

            // Return address of the pair at the specific address
            // Pass 0 for the address of the first pair created, 1 for the second, etc.
            expect(await factory_contract.allPairs(0)).to.be.reverted()
        })

        it('Get pair address', async function () {
            // load factory fixture
            const { factory_contract, owner } = await loadFixture(factoryFixture)

            // Returns the address of the pair for tokenA and tokenB, if it has been created, else address(0)
            const pair_address = await factory_contract.getPair(owner.address, zero_address)
            expect(pair_address).to.be.equal(zero_address)
        })

    });

    describe('Write functions', () => {
        it('Create a Pair', async function () {
            // load factory fixture
            const { factory_contract } = await loadFixture(factoryFixture)

            // createPair: create a new pair
            // using the simple method
            const createpair_tx = await factory_contract.createPair(token1_address, token2_address)
            // console.log("Create pair transaction: ", createpair_tx)


            //---------Start-------------//
            // Not working: using the emit event
            // const bytecode = `0x${UniswapV2Pair.evm.bytecode.object}`
            // const create2Address = getCreate2Address(factory.address, tokens, bytecode)
            // await expect(_contract.getPair(token1_address, token2_address)).to.emit(_contract.address, 'PairCreated').withArgs(token1_address, token2_address, create2Address, allPairs.length)
            //----------End-------------//


            // get the total number of pairs created through the factory so far.
            const allpairLength = await factory_contract.allPairsLength()
            // console.log('Number of Pairs: ', allpairLength)
            expect(allpairLength).to.be.equal('1')


            // get address of the pair at the specific address
            // Pass 0 for the address of the first pair created, 1 for the second, etc.
            const pairatIndex = await factory_contract.allPairs(0)
            // console.log('Pair at index 0: ', pairatIndex)


            // get the address of the pair for tokenA and tokenB
            const pair_address = await factory_contract.getPair(token1_address, token2_address)
            // console.log('Pair address: ', pair_address)
            expect(pair_address).to.be.equal(pairatIndex)
        })

        it('SetFeeTo to new address', async function () {
            const { factory_contract } = await loadFixture(factoryFixture)

            // set feeTo address that is the recipeint of the charge
            const SetFeeTo_tx = await factory_contract.setFeeTo(new_feeTo_addres)
            // console.log('Setting a New feeTo address: ', SetFeeTo_tx)

            // feeTo: indicating the recipient of the charge.
            const feeto = await factory_contract.feeTo()
            expect(feeto).to.be.equal(new_feeTo_addres)
        })

        it('setFeeToSetter to new address', async function () {
            // load factory fixture
            const { factory_contract } = await loadFixture(factoryFixture)


            // setFeeToSetter: The address allowed to change feeTo.
            const setNewFeeToSetter_tx = await factory_contract.setFeeToSetter(new_feeToSetter_address)
            // console.log('New feeToSetter address: ', setNewFeeToSetter_tx)

            // checking the new feeToSetter address
            const newFeeToSetter = await factory_contract.feeToSetter()
            expect(newFeeToSetter).to.be.equal(new_feeToSetter_address)
        })

    });

});
