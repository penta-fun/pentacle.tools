import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "TransferSolOperation";
export declare const transferSolOperation: import("../../types").OperationConstructor<TransferSolOperation, "TransferSolOperation", TransferSolInput, TransferSolOutput>;
export declare type TransferSolOperation = Operation<typeof Key, TransferSolInput, TransferSolOutput>;
export declare type TransferSolInput = {
    from?: Signer;
    to: PublicKey;
    amount: Amount;
    basePubkey?: PublicKey;
    seed?: string;
    program?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type TransferSolOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const transferSolOperationHandler: OperationHandler<TransferSolOperation>;
export declare type TransferSolBuilderParams = Omit<TransferSolInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare const transferSolBuilder: (metaplex: Metaplex, params: TransferSolBuilderParams) => TransactionBuilder;
export {};
