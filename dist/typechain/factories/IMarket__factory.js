"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMarket__factory = void 0;
const ethers_1 = require("ethers");
class IMarket__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMarket__factory = IMarket__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.Ask",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.Ask",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.Bid",
                name: "bid",
                type: "tuple",
            },
        ],
        name: "BidCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.Bid",
                name: "bid",
                type: "tuple",
            },
        ],
        name: "BidFinalized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.Bid",
                name: "bid",
                type: "tuple",
            },
        ],
        name: "BidRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "prevOwner",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "creator",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "owner",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct IMarket.BidShares",
                name: "bidShares",
                type: "tuple",
            },
        ],
        name: "BidShareUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.Bid",
                name: "expectedBid",
                type: "tuple",
            },
        ],
        name: "acceptBid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "bidder",
                type: "address",
            },
        ],
        name: "bidForTokenBidder",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.Bid",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "bidSharesForToken",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "prevOwner",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "creator",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "owner",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.BidShares",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mediaContractAddress",
                type: "address",
            },
        ],
        name: "configure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "currentAskForToken",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                ],
                internalType: "struct IMarket.Ask",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bidAmount",
                type: "uint256",
            },
        ],
        name: "isValidBid",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "prevOwner",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "creator",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "owner",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.BidShares",
                name: "bidShares",
                type: "tuple",
            },
        ],
        name: "isValidBidShares",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "removeAsk",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "bidder",
                type: "address",
            },
        ],
        name: "removeBid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                ],
                internalType: "struct IMarket.Ask",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "setAsk",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "bidder",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "sellOnShare",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.Bid",
                name: "bid",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "setBid",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "prevOwner",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "creator",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Decimal.D256",
                        name: "owner",
                        type: "tuple",
                    },
                ],
                internalType: "struct IMarket.BidShares",
                name: "bidShares",
                type: "tuple",
            },
        ],
        name: "setBidShares",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                ],
                internalType: "struct Decimal.D256",
                name: "sharePercentage",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "splitShare",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
//# sourceMappingURL=IMarket__factory.js.map