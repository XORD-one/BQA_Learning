// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
import "hardhat/console.sol";

contract Test {
    function test(uint[20] a) public returns (uint){
         return a[10]*2;
    }

    function test2(uint[20] a) external returns (uint){
         return a[10]*2;
    }
}