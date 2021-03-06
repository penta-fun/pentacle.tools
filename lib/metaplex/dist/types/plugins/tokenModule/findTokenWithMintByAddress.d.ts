import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { TokenWithMint } from './Token';
declare const Key: "FindTokenWithMintByAddressOperation";
export declare const findTokenWithMintByAddressOperation: import("../../types").OperationConstructor<FindTokenWithMintByAddressOperation, "FindTokenWithMintByAddressOperation", FindTokenWithMintByAddressInput, TokenWithMint>;
export declare type FindTokenWithMintByAddressOperation = Operation<typeof Key, FindTokenWithMintByAddressInput, TokenWithMint>;
export declare type FindTokenWithMintByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
};
export declare const findTokenWithMintByAddressOperationHandler: OperationHandler<FindTokenWithMintByAddressOperation>;
export {};
