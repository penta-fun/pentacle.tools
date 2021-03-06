import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { TokenWithMint } from './Token';
declare const Key: "FindTokenWithMintByMintOperation";
export declare const findTokenWithMintByMintOperation: import("../../types").OperationConstructor<FindTokenWithMintByMintOperation, "FindTokenWithMintByMintOperation", FindTokenWithMintByMintInput, TokenWithMint>;
export declare type FindTokenWithMintByMintOperation = Operation<typeof Key, FindTokenWithMintByMintInput, TokenWithMint>;
export declare type FindTokenWithMintByMintInput = {
    mint: PublicKey;
    address: PublicKey;
    addressType: 'owner' | 'token';
    commitment?: Commitment;
};
export declare const findTokenWithMintByMintOperationHandler: OperationHandler<FindTokenWithMintByMintOperation>;
export {};
