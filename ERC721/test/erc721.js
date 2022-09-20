//assertion library
const { expect, assert } = require("chai");
const { toChecksumAddress } = require("ethereumjs-util");
const { ethers } = require("hardhat");
const web3 = require("web3");
//
const provider = waffle.provider;

const myAccount = '0x08cDc925bEb97f689a63da01E35C195a80e1998d'

describe('ERC-721 Test Suite', () => {
    describe('0 Deploy token', () => {
        it("0.1- Deploy 721 token", async function () {
            // getting KOLNET token contract 
            let tok = await ethers.getContractFactory("erc721");

            token = await tok.deploy(); // deploying token
            await token.deployed();     // waiting for the token to deploy
            console.log('721 token', token.address);

        });

    });

    describe('Minting token testcases', () => {
        it("1.1 Minting 721 token", async function () {
            [owner, addr1, addr2, ...addrs] = await provider.getWallets();

            // minting token on the owner address
            // await token.mint(owner.address, '');
            await token.mint(owner.address, '0');
            await token.mint(owner.address, '1');
            // console.log(owner.address)
        })
        it("1.2 Minting token to address other than owner", async function () {
            [owner, addr1, addr2, ...addrs] = await provider.getWallets();
            // minting token on the owner address
            const tx = await token.mint(addr1.address, '999');
        })

        it('1.3 Minting token with max tokenID', async function () {
            await token.mint(owner.address, '115792089237316195423570985008687907853269984665640564039457584007913129639935');
        })

        it('1.4 Minting token with greater than max tokenID', async function () {
            await expect(token.mint(owner.address, '115792089237316195423570985008687907853269984665640564039457584007913129639936')).to.be.reverted;
        })

        it('1.5 Minting token with negative tokenID', async function () {
            await expect(token.mint(owner.address, '-100')).to.be.reverted;
        })
    })

    describe('Tokens information testcases', () => {
        it("2.1 token name", async function () {
            const name = await token.name()
            const symbol = await token.symbol()
            console.log('Token Name = ', name + '\nToken Symbol =', symbol)
        })

        it("2.2- Token URI", async function () {
            let tokenuri = await token.tokenURI('1')
            console.log("base URI= ", tokenuri)
        })
    })

    describe('Balance of testcases', () => {
        it("3.1 Balance of owner", async function () {
            // let balance = await token.balanceOf(myAccount)
            let balance = await token.balanceOf(owner.address)
            console.log(balance)
        })

        it("3.2 Checking balance of address other than owner", async function () {
            const my_balance = await token.balanceOf(myAccount)
            console.log(my_balance)
        })

        
        it("3.3 Checking balance of ether address", async function () {
            const incorrect_balance = await token.balanceOf('0x71C7656EC7ab88b098defB751B7401B5f6d8976F')
            console.log(incorrect_balance)
        })
    })


    describe('Owner of token testcases', () => {
        it("4.1 owner of token incorrect token id", async function () {
            
            let owner = await expect(token.ownerOf('321')).to.be.revertedWith('invalid token ID')  // owner of tokenid 321
            // console.log(owner)
        })

        it("4.2 owner of token correct token id", async function () {
            let owner1 = await token.ownerOf('0')
            console.log(owner1)
        })

        it("4.3 Check function by passing 0x address", async function () {
            const zeroadd_owner = await token.ownerOf('0x0000000000000000000000000000000000000000');
            // console.log(zeroadd_owner)
        })
    })

    describe('Approve token testcases', () => {
        it("5.1 Giving token approval of id 1 to address1", async function () {
            // giving token approval to the address
            const approval2 = await token.approve(addr1.address, '1')
            // console.log(approval)
            console.log("address 1 = ", addr1.address)
        })

        it("5.2 Giving approval tokenId=Not exist to myAccount", async function () {
            // giving token approval to the address
            const approval = await expect(token.approve(myAccount, '1229')).to.be.revertedWith('ERC721: invalid token ID')
            // console.log(approval)

        })

        it("5.3 Giving approval tokenId=1 to owner itself", async function () {
            // giving token approval to the address
            const approval = await expect(token.approve(owner.address, '1')).to.be.revertedWith('ERC721: approval to current owner')
            // console.log(approval)
        })
    })

    describe('Checking the token approval testcases', () => {
        it("6.1  Owner of the token", async function () {
            // checking the approval status of the token
            const getapproved = await token.getApproved('1')
            console.log('checking ownership', getapproved)

        })

        it("6.2 Verify Approved owner of the token id that does not exist", async function () {
            // checking the approval status of the token
            const getapproved2 = await expect(token.getApproved('8273')).to.be.revertedWith('ERC721: invalid token ID')
        })
    })

    describe('Set approval for all token testcases', () => {
        it("7.1- Giving token approval for all", async function () {
            // give approval for all tokens to the address
            const aprroveall = await token.setApprovalForAll(addr2.address, true)
            //console.log(aprroveall)
        })

        it("7.2 Giving token approvalForAll to owner address", async function () {
            // give approval for all tokens to the address
            const aprroveall = await expect(token.setApprovalForAll(owner.address, true)).to.be.revertedWith('ERC721: approve to caller')
            // console.log(aprroveall)
        })

        it("7.3 Rejecting token approvalForAll to owner address", async function () {
            // give approval for all tokens to the address
            const aprroveall = await expect(token.setApprovalForAll(owner.address, false)).to.be.revertedWith('ERC721: approve to caller')
            // console.log(aprroveall)
        })
    })

    describe('Check approval for all token testcases', () => {
        it("8.1- Check token approval for all", async function () {
            const checkapproveall = await token.isApprovedForAll(owner.address, addr2.address)
            console.log(checkapproveall)
        })
    })

    describe('Transfer testcases', () => {
        it("9.1 Transfer function", async function () {
            // simple transfer function
            const tx = await token.transfer(owner.address, myAccount, '1')
            // console.log(tx)
        })

        it("9.2 Transfer token having id that does not exist", async function () {
            // simple transfer function
            let tx = await expect(token.transfer(owner.address, myAccount, '45353')).to.be.revertedWith('ERC721: invalid token ID')
            // console.log(tx)
        })

        it("9.6 Transfer token from address that is owned by someone else", async function () {
            // simple transfer function
            let tx = await expect(token.transfer(addr1.address, addr2.address, '1')).to.be.revertedWith('ERC721: transfer from incorrect owner')
            // console.log(tx)
        })
    })


    describe('TransferFrom testcases', () => {
        it("10.1- Tansfer from function", async function () {
            // transferFrom is working without giving token approval to owner
            const transferfrom = await token.transferFrom(owner.address, addr1.address, '0')
            // console.log(transferfrom)

            // // the below code is not giving approval to address1
            // const approval3 = await token.approve(addr1.address, '0')
            // const transferfrom2 = await token.transferFrom(addr1.address, owner.address, '0')


            // after transfer the ownership of the token will change
            // let ownr = await token.ownerOf('1')
            // console.log(ownr) 

        })
    })

    describe('Burn token testcases', () => {
        it("11.1 Normal token burn", async function () {
            const burned = await token.burn('0')
            // console.log(burned)
        })

        it("11.2 Burn token that you don't own", async function () {
            const burned = await expect(token.burn('393')).to.be.revertedWith('ERC721: invalid token ID')
            // console.log(burned)
        })

        it("11.3 Burn token having id= token address", async function () {
            const burned = await expect(token.burn(myAccount)).to.be.revertedWith('ERC721: invalid token ID')
            // console.log(burned)
			//updated
        })
    })
})