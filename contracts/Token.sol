// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    // Functions
    constructor(
        string memory _name,
        string memory _ticker,
        uint256 _supply
    ) ERC20(_name, _ticker) {
        _mint(msg.sender, _supply);
    }
}

contract Factory {
    // State variables
    address[] private tokens;
    uint256 private tokenCount;
    event TokenDeployed(address tokenAddress);

    // Functions
    function deployToken(
        string calldata _name,
        string calldata _ticker,
        uint256 _supply
    ) public returns (address) {
        Token token = new Token(_name, _ticker, _supply);
        token.transfer(msg.sender, _supply);
        tokens.push(address(token));
        tokenCount += 1;
        emit TokenDeployed(address(token));
        return address(token);
    }

    // View / Pure functions
    function getTokenAddress(uint256 index) public view returns (address) {
        return tokens[index];
    }

    function getNumberOfTokens() public view returns (uint256) {
        return tokens.length;
    }
}
