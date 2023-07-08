// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.18;

import {VRFCoordinatorV2Interface} from "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import {VRFConsumerBaseV2} from "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

/**
 * @title The Roulette contract
 * @notice Gets random values from Chainlink VRF V2
 */
contract Roulette is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface public immutable coordinator;
    mapping(uint8 => string) public colors;

    // Your subscription ID.
    uint64 public immutable subscriptionId;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 public immutable keyHash;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 public constant CALLBACK_GAS_LIMIT = 100000;

    // The default is 3, but you can set this higher.
    uint16 public constant REQUEST_CONFIRMATIONS = 3;

    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 public constant NUM_WORDS = 1;

    uint256[] public randomWords;
    uint256 public requestId;
    address public owner;

    event ReturnedRandomness(uint256[] randomWords);

    /**
     * @notice Constructor inherits VRFConsumerBaseV2
     *
     * @param _subscriptionId - the subscription ID that this contract uses for funding requests
     * @param _vrfCoordinator - coordinator, check https://docs.chain.link/docs/vrf-contracts/#configurations
     * @param _keyHash - the gas lane to use, which specifies the maximum gas price to bump to
     */
    constructor(
        uint64 _subscriptionId,
        address _vrfCoordinator,
        bytes32 _keyHash
    ) VRFConsumerBaseV2(_vrfCoordinator) {
        coordinator = VRFCoordinatorV2Interface(_vrfCoordinator);
        keyHash = _keyHash;
        subscriptionId = _subscriptionId;
        owner = msg.sender;
        colors[0] = "green";
        colors[1] = "red";
        colors[2] = "black";
        colors[3] = "red";
        colors[4] = "black";
        colors[5] = "red";
        colors[6] = "black";
        colors[7] = "red";
        colors[8] = "black";
        colors[9] = "red";
        colors[10] = "black";
        colors[11] = "black";
        colors[12] = "red";
        colors[13] = "black";
        colors[14] = "red";
        colors[15] = "black";
        colors[16] = "red";
        colors[17] = "black";
        colors[18] = "red";
        colors[19] = "red";
        colors[20] = "black";
        colors[21] = "red";
        colors[22] = "black";
        colors[23] = "red";
        colors[24] = "black";
        colors[25] = "red";
        colors[26] = "black";
        colors[27] = "red";
        colors[28] = "black";
        colors[29] = "black";
        colors[30] = "red";
        colors[31] = "black";
        colors[32] = "red";
        colors[33] = "black";
        colors[34] = "red";
        colors[35] = "black";
        colors[36] = "red";
    }

    /**
     * @notice Requests randomness
     * Assumes the subscription is funded sufficiently; "Words" refers to unit of data in Computer Science
     */
    function requestRandomWords() external onlyOwner {
        // Will revert if subscription is not set and funded.
        requestId = coordinator.requestRandomWords(
            keyHash,
            subscriptionId,
            REQUEST_CONFIRMATIONS,
            CALLBACK_GAS_LIMIT,
            NUM_WORDS
        );
    }

    /**
     * @notice Callback function used by VRF Coordinator
     *
     * @param _requestId - id of the request
     * @param _randomWords - array of random results from VRF Coordinator
     */
    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        uint8 rouletteNumber = uint8(_randomWords[0] % 37);
        string memory colorOfNumber = colors[rouletteNumber];
        randomWords = _randomWords;
        emit ReturnedRandomness(randomWords);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
