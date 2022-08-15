// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./ERC721.sol";
contract AYA is ERC721 {
    constructor() ERC721("AYANET", "AYA") {}
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}