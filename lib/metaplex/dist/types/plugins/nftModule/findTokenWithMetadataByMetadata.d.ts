import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { TokenWithMetadata } from './Metadata';
declare const Key: "FindTokenWithMetadataByMetadataOperation";
export declare const findTokenWithMetadataByMetadataOperation: import("../../types").OperationConstructor<FindTokenWithMetadataByMetadataOperation, "FindTokenWithMetadataByMetadataOperation", FindTokenWithMetadataByMetadataInput, TokenWithMetadata>;
export declare type FindTokenWithMetadataByMetadataOperation = Operation<typeof Key, FindTokenWithMetadataByMetadataInput, TokenWithMetadata>;
export declare type FindTokenWithMetadataByMetadataInput = {
    metadataAddress: PublicKey;
    ownerAddress: PublicKey;
    commitment?: Commitment;
    loadJsonMetadata?: boolean;
};
export declare const findTokenWithMetadataByMetadataOperationHandler: OperationHandler<FindTokenWithMetadataByMetadataOperation>;
export {};
