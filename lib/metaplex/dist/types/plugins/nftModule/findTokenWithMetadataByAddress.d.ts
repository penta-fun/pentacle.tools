import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { TokenWithMetadata } from './Metadata';
import { TokenWithMint } from '../tokenModule';
declare const Key: "FindTokenWithMetadataByAddressOperation";
export declare const findTokenWithMetadataByAddressOperation: import("../../types").OperationConstructor<FindTokenWithMetadataByAddressOperation, "FindTokenWithMetadataByAddressOperation", FindTokenWithMetadataByAddressInput, TokenWithMint | TokenWithMetadata>;
export declare type FindTokenWithMetadataByAddressOperation = Operation<typeof Key, FindTokenWithMetadataByAddressInput, TokenWithMetadata | TokenWithMint>;
export declare type FindTokenWithMetadataByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
    loadJsonMetadata?: boolean;
};
export declare const findTokenWithMetadataByAddressOperationHandler: OperationHandler<FindTokenWithMetadataByAddressOperation>;
export {};
