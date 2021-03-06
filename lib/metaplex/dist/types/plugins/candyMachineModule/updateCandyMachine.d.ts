import type { ConfirmOptions, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler, Signer } from "../../types";
import { Metaplex } from "../../Metaplex";
import { TransactionBuilder } from "../../utils";
import { SendAndConfirmTransactionResponse } from '../rpcModule';
import { CandyMachine, CandyMachineConfigs } from './CandyMachine';
declare const Key: "UpdateCandyMachineOperation";
export declare const updateCandyMachineOperation: import("../../types").OperationConstructor<UpdateCandyMachineOperation, "UpdateCandyMachineOperation", UpdateCandyMachineInput, UpdateCandyMachineOutput>;
export declare type UpdateCandyMachineOperation = Operation<typeof Key, UpdateCandyMachineInput, UpdateCandyMachineOutput>;
export declare type UpdateCandyMachineInputWithoutConfigs = {
    candyMachine: CandyMachine;
    authority?: Signer;
    newAuthority?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type UpdateCandyMachineInput = UpdateCandyMachineInputWithoutConfigs & Partial<CandyMachineConfigs>;
export declare type UpdateCandyMachineOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const updateCandyMachineOperationHandler: OperationHandler<UpdateCandyMachineOperation>;
export declare type UpdateCandyMachineBuilderParams = Omit<UpdateCandyMachineInput, 'confirmOptions'> & {
    updateInstructionKey?: string;
    updateAuthorityInstructionKey?: string;
};
export declare const updateCandyMachineBuilder: (metaplex: Metaplex, params: UpdateCandyMachineBuilderParams) => TransactionBuilder;
export {};
