import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, KeypairSigner, Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
import { Mint } from './Mint';
declare const Key: "SendTokensOperation";
export declare const sendTokensOperation: import("../../types").OperationConstructor<SendTokensOperation, "SendTokensOperation", SendTokensInput, SendTokensOutput>;
export declare type SendTokensOperation = Operation<typeof Key, SendTokensInput, SendTokensOutput>;
export declare type SendTokensInput = {
    mint: PublicKey | Mint;
    to: PublicKey;
    amount: Amount;
    fromOwner?: PublicKey | Signer;
    fromToken?: PublicKey;
    fromMultiSigners?: KeypairSigner[];
    tokenProgram?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type SendTokensOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const sendTokensOperationHandler: OperationHandler<SendTokensOperation>;
export declare type SendTokensBuilderParams = Omit<SendTokensInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare const sendTokensBuilder: (metaplex: Metaplex, params: SendTokensBuilderParams) => TransactionBuilder;
export {};
