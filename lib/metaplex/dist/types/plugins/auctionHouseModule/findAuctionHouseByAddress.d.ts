import type { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { AuctionHouse } from './AuctionHouse';
declare const Key: "FindAuctionHouseByAddressOperation";
export declare const findAuctionHouseByAddressOperation: import("../../types").OperationConstructor<FindAuctionHouseByAddressOperation, "FindAuctionHouseByAddressOperation", FindAuctionHouseByAddressInput, Readonly<{
    model: "auctionHouse";
    address: import("@/types").Pda;
    creatorAddress: PublicKey;
    authorityAddress: PublicKey;
    treasuryMint: Readonly<{
        model: "mint";
        address: PublicKey;
        mintAuthorityAddress: import("@/utils").Option<PublicKey>;
        freezeAuthorityAddress: import("@/utils").Option<PublicKey>;
        decimals: number;
        supply: import("@/types").Amount;
        isWrappedSol: boolean;
        currency: import("@/types").Currency;
    }> | import("..").MintWithMetadata;
    feeAccountAddress: import("@/types").Pda;
    treasuryAccountAddress: import("@/types").Pda;
    feeWithdrawalDestinationAddress: PublicKey;
    treasuryWithdrawalDestinationAddress: PublicKey;
    sellerFeeBasisPoints: number;
    requiresSignOff: boolean;
    canChangeSalePrice: boolean;
    isNative: boolean;
}>>;
export declare type FindAuctionHouseByAddressOperation = Operation<typeof Key, FindAuctionHouseByAddressInput, AuctionHouse>;
export declare type FindAuctionHouseByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
};
export declare const findAuctionHouseByAddressOperationHandler: OperationHandler<FindAuctionHouseByAddressOperation>;
export {};
