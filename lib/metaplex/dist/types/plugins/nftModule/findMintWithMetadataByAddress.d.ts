import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { MintWithMetadata } from './Metadata';
import { Mint } from '../tokenModule';
declare const Key: "FindMintWithMetadataByAddressOperation";
export declare const findMintWithMetadataByAddressOperation: import("../../types").OperationConstructor<FindMintWithMetadataByAddressOperation, "FindMintWithMetadataByAddressOperation", FindMintWithMetadataByAddressInput, Readonly<{
    model: "mint";
    address: PublicKey;
    mintAuthorityAddress: import("@/utils").Option<PublicKey>;
    freezeAuthorityAddress: import("@/utils").Option<PublicKey>;
    decimals: number;
    supply: import("@/types").Amount;
    isWrappedSol: boolean;
    currency: import("@/types").Currency;
}> | MintWithMetadata>;
export declare type FindMintWithMetadataByAddressOperation = Operation<typeof Key, FindMintWithMetadataByAddressInput, MintWithMetadata | Mint>;
export declare type FindMintWithMetadataByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
    loadJsonMetadata?: boolean;
};
export declare const findMintWithMetadataByAddressOperationHandler: OperationHandler<FindMintWithMetadataByAddressOperation>;
export {};
