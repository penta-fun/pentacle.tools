import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, KeypairSigner, Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
import { Mint } from './Mint';
declare const Key: "MintTokensOperation";
export declare const mintTokensOperation: import("../../types").OperationConstructor<MintTokensOperation, "MintTokensOperation", MintTokensInput, MintTokensOutput>;
export declare type MintTokensOperation = Operation<typeof Key, MintTokensInput, MintTokensOutput>;
export declare type MintTokensInput = {
    mint: PublicKey | Mint;
    destination: PublicKey;
    amount: Amount;
    mintAuthority?: PublicKey | Signer;
    multiSigners?: KeypairSigner[];
    tokenProgram?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type MintTokensOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const mintTokensOperationHandler: OperationHandler<MintTokensOperation>;
export declare type MintTokensBuilderParams = Omit<MintTokensInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare const mintTokensBuilder: (metaplex: Metaplex, params: MintTokensBuilderParams) => TransactionBuilder;
export {};
