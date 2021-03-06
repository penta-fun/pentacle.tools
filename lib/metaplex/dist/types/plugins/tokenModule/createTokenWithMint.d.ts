import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, Operation, OperationHandler, Signer } from "../../types";
import { Option, TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "CreateTokenWithMintOperation";
export declare const createTokenWithMintOperation: import("../../types").OperationConstructor<CreateTokenWithMintOperation, "CreateTokenWithMintOperation", CreateTokenWithMintInput, CreateTokenWithMintOutput>;
export declare type CreateTokenWithMintOperation = Operation<typeof Key, CreateTokenWithMintInput, CreateTokenWithMintOutput>;
export declare type CreateTokenWithMintInput = {
    decimals?: number;
    initialSupply?: Amount;
    mint?: Signer;
    mintAuthority?: Signer | PublicKey;
    freezeAuthority?: Option<PublicKey>;
    owner?: PublicKey;
    token?: Signer;
    payer?: Signer;
    tokenProgram?: PublicKey;
    associatedTokenProgram?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateTokenWithMintOutput = {
    response: SendAndConfirmTransactionResponse;
    mintSigner: Signer;
    tokenAddress: PublicKey;
};
export declare const createTokenWithMintOperationHandler: OperationHandler<CreateTokenWithMintOperation>;
export declare type CreateTokenWithMintBuilderParams = Omit<CreateTokenWithMintInput, 'confirmOptions'> & {
    createMintAccountInstructionKey?: string;
    initializeMintInstructionKey?: string;
    createAssociatedTokenAccountInstructionKey?: string;
    createTokenAccountInstructionKey?: string;
    initializeTokenInstructionKey?: string;
    mintTokensInstructionKey?: string;
};
export declare type CreateTokenWithMintBuilderContext = Omit<CreateTokenWithMintOutput, 'response'>;
export declare const createTokenWithMintBuilder: (metaplex: Metaplex, params: CreateTokenWithMintBuilderParams) => Promise<TransactionBuilder<CreateTokenWithMintBuilderContext>>;
export {};
