import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Operation, Signer, OperationHandler, Pda } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "CreateAuctionHouseOperation";
export declare const createAuctionHouseOperation: import("../../types").OperationConstructor<CreateAuctionHouseOperation, "CreateAuctionHouseOperation", CreateAuctionHouseInput, CreateAuctionHouseOutput>;
export declare type CreateAuctionHouseOperation = Operation<typeof Key, CreateAuctionHouseInput, CreateAuctionHouseOutput>;
export declare type CreateAuctionHouseInput = {
    sellerFeeBasisPoints: number;
    requiresSignOff?: boolean;
    canChangeSalePrice?: boolean;
    treasuryMint?: PublicKey;
    payer?: Signer;
    authority?: PublicKey;
    feeWithdrawalDestination?: PublicKey;
    treasuryWithdrawalDestinationOwner?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateAuctionHouseOutput = {
    response: SendAndConfirmTransactionResponse;
    auctionHouseAddress: Pda;
    auctionHouseFeeAccountAddress: Pda;
    auctionHouseTreasuryAddress: Pda;
    treasuryWithdrawalDestinationAddress: PublicKey;
};
export declare const createAuctionHouseOperationHandler: OperationHandler<CreateAuctionHouseOperation>;
export declare type CreateAuctionHouseBuilderParams = Omit<CreateAuctionHouseInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare type CreateAuctionHouseBuilderContext = Omit<CreateAuctionHouseOutput, 'response'>;
export declare const createAuctionHouseBuilder: (metaplex: Metaplex, params: CreateAuctionHouseBuilderParams) => TransactionBuilder<CreateAuctionHouseBuilderContext>;
export {};
