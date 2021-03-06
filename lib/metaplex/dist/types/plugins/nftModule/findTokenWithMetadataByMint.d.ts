import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { TokenWithMetadata } from './Metadata';
import { TokenWithMint } from '../tokenModule';
declare const Key: "FindTokenWithMetadataByMintOperation";
export declare const findTokenWithMetadataByMintOperation: import("../../types").OperationConstructor<FindTokenWithMetadataByMintOperation, "FindTokenWithMetadataByMintOperation", FindTokenWithMetadataByMintInput, TokenWithMint | TokenWithMetadata>;
export declare type FindTokenWithMetadataByMintOperation = Operation<typeof Key, FindTokenWithMetadataByMintInput, TokenWithMetadata | TokenWithMint>;
export declare type FindTokenWithMetadataByMintInput = {
    mintAddress: PublicKey;
    ownerAddress: PublicKey;
    commitment?: Commitment;
    loadJsonMetadata?: boolean;
};
export declare const findTokenWithMetadataByMintOperationHandler: OperationHandler<FindTokenWithMetadataByMintOperation>;
export {};
