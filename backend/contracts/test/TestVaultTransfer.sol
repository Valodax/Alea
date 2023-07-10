// SPDX-License-Identifier: MIT
// Alea Test Receiver Contract
import {Vault} from "../Vault.sol";

pragma solidity ^0.8.18;

interface IVault {
    function transfer() external;
}

contract TestVaultTransfer {
    Vault private vault;

    constructor(Vault _vault) {
        vault = _vault;
    }

    function playGame(uint256 amount) public {
        transferToUser(amount, msg.sender);
    }

    function transferToUser(uint256 amount, address userAddress) private {
        vault.transfer(amount, userAddress);
    }
}
