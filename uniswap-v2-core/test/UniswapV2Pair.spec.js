//assertion library
// const { expandTo18Decimals } = require("./shared/utilities");
const { bigNumberify, toChecksumAddress, zeroAddress } = require("ethereumjs-util");
const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const web3 = require("web3");


//
const provider = waffle.provider;

// variables for testing 
const total_supply = 100 // intial total supply
const approval_amount = 50 // for giving approval to addr1
const transfer_amount = 20  // for transfer to addr2
const zero_address = '0x0000000000000000000000000000000000000000'       // burnable address


describe('Test Suite Uniswap v2 Core', () => {
    beforeEach(async function () {
        [owner, addr1, addr2, addr3, ...addrs] = await provider.getWallets();
        // console.log('Owner address: ', owner.address)


        // getting UniswapV2ERC20 contract 
        let factory_contract = await ethers.getContractFactory("UniswapV2ERC20");

        // deploying token
        _contract = await factory_contract.deploy();

        // waiting for the token to deploy
        await _contract.deployed();

        // console.log('Yeh UniswapV2ERC20 token Contract address ha: ', _contract.address);

        // minting the token each time the it block run
        await expect(_contract.mint(owner.address, total_supply))
                .to.emit(_contract, 'Transfer')
                .withArgs(zero_address, owner.address, total_supply)
    })

    describe('Read only functions', () => {
        it('Basic readonly functions', async () => {
            const name = await _contract.name()
            expect(name).to.eq('Biqa')
            expect(await _contract.symbol()).to.eq('BQA-V2')
            expect(await _contract.decimals()).to.eq(18)
            // expect(await _contract.totalSupply()).to.eq(total_supply)
            // expect(await _contract.balanceOf(wallet.address)).to.eq(total_supply)
        })

        it('total supply and balance of owner', async function () {
            // minting tokens to owner address
            // const mint_tx = await _contract.mint(owner.address, total_supply)
            // console.log('mint transaction: ', mint_tx)

            // using emit event
            // await expect(_contract.mint(owner.address, total_supply))
            //     .to.emit(_contract, 'Transfer')
            //     .withArgs(zero_address, owner.address, total_supply)

            // assertion for total supply and balance of owner 
            expect(await _contract.totalSupply()).to.eq(total_supply)
            expect(await _contract.balanceOf(owner.address)).to.eq(total_supply)
        })

        it('approve', async () => {
            await expect(_contract.approve(addr1.address, approval_amount))
                .to.emit(_contract, 'Approval')
                .withArgs(owner.address, addr1.address, approval_amount)
            expect(await _contract.allowance(owner.address, addr1.address)).to.eq(approval_amount)
        })

        it('transfer', async () => {
            await expect(_contract.transfer(addr2.address, transfer_amount))
                .to.emit(_contract, 'Transfer')
                .withArgs(owner.address, addr2.address, transfer_amount)
            expect(await _contract.balanceOf(addr2.address)).to.eq(transfer_amount)
            expect(await _contract.balanceOf(owner.address)).to.eq(total_supply - transfer_amount)
            // console.log("owner balance at this place: ",total_supply - transfer_amount)
        })

        it('transferFrom', async () => {
            // console.log("Owner address at this place: ", await _contract.balanceOf(owner.address))
            
            await _contract.approve(addr3.address, approval_amount)
            expect(await _contract.allowance(owner.address, addr3.address)).to.eq(approval_amount)

            // await _contract.burn(owner.address, total_supply)
            // console.log("Owner address after burn: ", await _contract.balanceOf(owner.address))

            await expect(_contract.connect(addr3).transferFrom(owner.address, addr3.address, transfer_amount))
                .to.emit(_contract, 'Transfer')
                .withArgs(owner.address, addr3.address, transfer_amount)


            expect(await _contract.allowance(owner.address, addr3.address)).to.eq(approval_amount-transfer_amount)
            expect(await _contract.balanceOf(owner.address)).to.eq(total_supply - transfer_amount)

        })

    })
})
