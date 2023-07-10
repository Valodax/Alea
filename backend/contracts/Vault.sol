// SPDX-License-Identifier: MIT
// Alea Vault Contract
pragma solidity ^0.8.18;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract Vault is ConfirmedOwner {
    mapping(address => uint256) public balances;
    mapping(address => bool) public registeredContracts;

    constructor() ConfirmedOwner(msg.sender) {}

    modifier onlyRegisteredContracts() {
        require(
            registeredContracts[msg.sender] == true,
            "Must be registered contract"
        );
        _;
    }

    function registerContract(address contractAddress) public onlyOwner {
        registeredContracts[contractAddress] = true;
    }

    function deregisterContract(address contractAddress) public onlyOwner {
        registeredContracts[contractAddress] = false;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function transfer(
        uint256 amount,
        address toAddress
    ) external onlyRegisteredContracts {
        require(address(this).balance >= amount, "Not enough balance");
        (bool success, ) = toAddress.call{value: amount}("");
        require(success, "Transfer failed");
    }

    function getOwner() public view returns (address) {
        return owner();
    }
}
