import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Operation, Signer, OperationHandler } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
import { AuctionHouse } from './AuctionHouse';
declare const Key: "UpdateAuctionHouseOperation";
export declare const updateAuctionHouseOperation: import("../../types").OperationConstructor<UpdateAuctionHouseOperation, "UpdateAuctionHouseOperation", UpdateAuctionHouseInput, UpdateAuctionHouseOutput>;
export declare type UpdateAuctionHouseOperation = Operation<typeof Key, UpdateAuctionHouseInput, UpdateAuctionHouseOutput>;
export declare type UpdateAuctionHouseInput = {
    auctionHouse: AuctionHouse;
    authority?: Signer;
    payer?: Signer;
    sellerFeeBasisPoints?: number | null;
    requiresSignOff?: boolean | null;
    canChangeSalePrice?: boolean | null;
    newAuthority?: PublicKey;
    feeWithdrawalDestination?: PublicKey;
    treasuryWithdrawalDestinationOwner?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type UpdateAuctionHouseOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const updateAuctionHouseOperationHandler: OperationHandler<UpdateAuctionHouseOperation>;
export declare type UpdateAuctionHouseBuilderParams = Omit<UpdateAuctionHouseInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare const updateAuctionHouseBuilder: (metaplex: Metaplex, params: UpdateAuctionHouseBuilderParams) => TransactionBuilder;
export {};
