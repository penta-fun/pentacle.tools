import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import type { SendAndConfirmTransactionResponse } from '../rpcModule';
import { Operation, OperationHandler, Signer, Amount, Pda } from "../../types";
import { TransactionBuilder } from "../../utils";
import { AuctionHouse } from './AuctionHouse';
declare const Key: "CreateListingOperation";
export declare const createListingOperation: import("../../types").OperationConstructor<CreateListingOperation, "CreateListingOperation", CreateListingInput, CreateListingOutput>;
export declare type CreateListingOperation = Operation<typeof Key, CreateListingInput, CreateListingOutput>;
export declare type CreateListingInput = {
    auctionHouse: AuctionHouse;
    wallet?: PublicKey | Signer;
    authority?: PublicKey | Signer;
    auctioneerAuthority?: Signer;
    mintAccount: PublicKey;
    tokenAccount?: PublicKey;
    price?: Amount;
    tokens?: Amount;
    bookkeeper?: Signer;
    printReceipt?: boolean;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateListingOutput = {
    response: SendAndConfirmTransactionResponse;
    sellerTradeState: Pda;
    freeSellerTradeState: Pda;
    tokenAccount: PublicKey;
    metadata: Pda;
    wallet: PublicKey;
    receipt: Pda;
    bookkeeper: PublicKey;
    price: Amount;
    tokens: Amount;
};
export declare const createListingOperationHandler: OperationHandler<CreateListingOperation>;
export declare type CreateListingBuilderParams = Omit<CreateListingInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare type CreateListingBuilderContext = Omit<CreateListingOutput, 'response'>;
export declare const createListingBuilder: (metaplex: Metaplex, params: CreateListingBuilderParams) => TransactionBuilder<CreateListingBuilderContext>;
export {};
