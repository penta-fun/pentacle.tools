import type { Metaplex } from "../../Metaplex";
import { CreateAccountInput } from './createAccount';
import { SystemBuildersClient } from './SystemBuildersClient';
import { TransferSolInput } from './transferSol';
export declare class SystemClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    builders(): SystemBuildersClient;
    createAccount(input: CreateAccountInput): import("../..").Task<import("./createAccount").CreateAccountOutput, []>;
    transferSol(input: TransferSolInput): import("../..").Task<import("./transferSol").TransferSolOutput, []>;
}
