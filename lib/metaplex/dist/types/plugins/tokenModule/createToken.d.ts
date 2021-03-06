import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "CreateTokenOperation";
export declare const createTokenOperation: import("../../types").OperationConstructor<CreateTokenOperation, "CreateTokenOperation", CreateTokenInput, CreateTokenOutput>;
export declare type CreateTokenOperation = Operation<typeof Key, CreateTokenInput, CreateTokenOutput>;
export declare type CreateTokenInput = {
    mint: PublicKey;
    owner?: PublicKey;
    token?: Signer;
    payer?: Signer;
    tokenProgram?: PublicKey;
    associatedTokenProgram?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateTokenOutput = {
    response: SendAndConfirmTransactionResponse;
    tokenAddress: PublicKey;
};
export declare const createTokenOperationHandler: OperationHandler<CreateTokenOperation>;
export declare type CreateTokenBuilderParams = Omit<CreateTokenInput, 'confirmOptions'> & {
    createAssociatedTokenAccountInstructionKey?: string;
    createAccountInstructionKey?: string;
    initializeTokenInstructionKey?: string;
};
export declare type CreateTokenBuilderContext = Omit<CreateTokenOutput, 'response'>;
export declare const createTokenBuilder: (metaplex: Metaplex, params: CreateTokenBuilderParams) => Promise<TransactionBuilder<CreateTokenBuilderContext>>;
export {};
