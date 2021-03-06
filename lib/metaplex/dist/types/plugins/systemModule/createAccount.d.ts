import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "CreateAccountOperation";
export declare const createAccountOperation: import("../../types").OperationConstructor<CreateAccountOperation, "CreateAccountOperation", CreateAccountInput, CreateAccountOutput>;
export declare type CreateAccountOperation = Operation<typeof Key, CreateAccountInput, CreateAccountOutput>;
export declare type CreateAccountInput = {
    space: number;
    lamports?: Amount;
    payer?: Signer;
    newAccount?: Signer;
    program?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateAccountOutput = {
    response: SendAndConfirmTransactionResponse;
    newAccount: Signer;
    lamports: Amount;
};
export declare const createAccountOperationHandler: OperationHandler<CreateAccountOperation>;
export declare type CreateAccountBuilderParams = Omit<CreateAccountInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare type CreateAccountBuilderContext = Omit<CreateAccountOutput, 'response'>;
export declare const createAccountBuilder: (metaplex: Metaplex, params: CreateAccountBuilderParams) => Promise<TransactionBuilder<CreateAccountBuilderContext>>;
export {};
