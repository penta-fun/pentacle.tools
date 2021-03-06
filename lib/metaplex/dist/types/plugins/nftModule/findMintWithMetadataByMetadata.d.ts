import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { MintWithMetadata } from './Metadata';
declare const Key: "FindMintWithMetadataByMetadataOperation";
export declare const findMintWithMetadataByMetadataOperation: import("../../types").OperationConstructor<FindMintWithMetadataByMetadataOperation, "FindMintWithMetadataByMetadataOperation", FindMintWithMetadataByMetadataInput, MintWithMetadata>;
export declare type FindMintWithMetadataByMetadataOperation = Operation<typeof Key, FindMintWithMetadataByMetadataInput, MintWithMetadata>;
export declare type FindMintWithMetadataByMetadataInput = {
    metadataAddress: PublicKey;
    commitment?: Commitment;
    loadJsonMetadata?: boolean;
};
export declare const findMintWithMetadataByMetadataOperationHandler: OperationHandler<FindMintWithMetadataByMetadataOperation>;
export {};
