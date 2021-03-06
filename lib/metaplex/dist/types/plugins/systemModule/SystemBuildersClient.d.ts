import type { Metaplex } from "../../Metaplex";
import { CreateAccountBuilderParams } from './createAccount';
import { TransferSolBuilderParams } from './transferSol';
export declare class SystemBuildersClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    createAccount(input: CreateAccountBuilderParams): Promise<import("../..").TransactionBuilder<import("./createAccount").CreateAccountBuilderContext>>;
    transferSol(input: TransferSolBuilderParams): import("../..").TransactionBuilder<object>;
}
