import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Operation, OperationHandler, Signer } from "../../types";
import { Option, TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "CreateMintOperation";
export declare const createMintOperation: import("../../types").OperationConstructor<CreateMintOperation, "CreateMintOperation", CreateMintInput, CreateMintOutput>;
export declare type CreateMintOperation = Operation<typeof Key, CreateMintInput, CreateMintOutput>;
export declare type CreateMintInput = {
    decimals?: number;
    mint?: Signer;
    payer?: Signer;
    mintAuthority?: PublicKey;
    freezeAuthority?: Option<PublicKey>;
    tokenProgram?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateMintOutput = {
    response: SendAndConfirmTransactionResponse;
    mintSigner: Signer;
};
export declare const createMintOperationHandler: OperationHandler<CreateMintOperation>;
export declare type CreateMintBuilderParams = Omit<CreateMintInput, 'confirmOptions'> & {
    createAccountInstructionKey?: string;
    initializeMintInstructionKey?: string;
};
export declare type CreateMintBuilderContext = Omit<CreateMintOutput, 'response'>;
export declare const createMintBuilder: (metaplex: Metaplex, params: CreateMintBuilderParams) => Promise<TransactionBuilder<CreateMintBuilderContext>>;
export {};
