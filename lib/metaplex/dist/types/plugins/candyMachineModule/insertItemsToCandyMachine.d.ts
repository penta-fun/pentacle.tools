import type { ConfirmOptions } from '@solana/web3.js';
import { BigNumber, Operation, OperationHandler, Signer } from "../../types";
import { TransactionBuilder } from "../../utils";
import { CandyMachine, CandyMachineItem } from './CandyMachine';
import { SendAndConfirmTransactionResponse } from '../rpcModule';
declare const Key: "InsertItemsToCandyMachineOperation";
export declare const insertItemsToCandyMachineOperation: import("../../types").OperationConstructor<InsertItemsToCandyMachineOperation, "InsertItemsToCandyMachineOperation", InsertItemsToCandyMachineInput, InsertItemsToCandyMachineOutput>;
export declare type InsertItemsToCandyMachineOperation = Operation<typeof Key, InsertItemsToCandyMachineInput, InsertItemsToCandyMachineOutput>;
export declare type InsertItemsToCandyMachineInput = {
    candyMachine: CandyMachine;
    authority: Signer;
    items: CandyMachineItem[];
    index?: BigNumber;
    confirmOptions?: ConfirmOptions;
};
export declare type InsertItemsToCandyMachineOutput = {
    response: SendAndConfirmTransactionResponse;
};
export declare const InsertItemsToCandyMachineOperationHandler: OperationHandler<InsertItemsToCandyMachineOperation>;
export declare type InsertItemsToCandyMachineBuilderParams = Omit<InsertItemsToCandyMachineInput, 'confirmOptions'> & {
    instructionKey?: string;
};
export declare const insertItemsToCandyMachineBuilder: (params: InsertItemsToCandyMachineBuilderParams) => TransactionBuilder;
export {};
