import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Token } from './Token';
declare const Key: "FindTokenByAddressOperation";
export declare const findTokenByAddressOperation: import("../../types").OperationConstructor<FindTokenByAddressOperation, "FindTokenByAddressOperation", FindTokenByAddressInput, Readonly<{
    model: "token";
    address: PublicKey | import("@/types").Pda;
    isAssociatedToken: boolean;
    mintAddress: PublicKey;
    ownerAddress: PublicKey;
    amount: import("@/types").BigNumber;
    closeAuthorityAddress: import("../..").Option<PublicKey>;
    delegateAddress: import("../..").Option<PublicKey>;
    delegateAmount: import("@/types").BigNumber;
}>>;
export declare type FindTokenByAddressOperation = Operation<typeof Key, FindTokenByAddressInput, Token>;
export declare type FindTokenByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
};
export declare const findTokenByAddressOperationHandler: OperationHandler<FindTokenByAddressOperation>;
export {};
