import { Commitment, PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { CandyMachine } from './CandyMachine';
declare const Key: "FindCandyMachineByAddressOperation";
export declare const findCandyMachineByAddressOperation: import("../../types").OperationConstructor<FindCandyMachineByAddressOperation, "FindCandyMachineByAddressOperation", FindCandyMachineByAddressInput, Readonly<{
    model: "candyMachine";
    address: PublicKey;
    authorityAddress: PublicKey;
    walletAddress: PublicKey;
    tokenMintAddress: import("../..").Option<PublicKey>;
    uuid: string;
    price: import("@/types").Amount;
    symbol: string;
    sellerFeeBasisPoints: number;
    isMutable: boolean;
    retainAuthority: boolean;
    goLiveDate: import("../..").Option<import("@/types").DateTime>;
    maxEditionSupply: import("@/types").BigNumber;
    items: Readonly<{
        name: string;
        uri: string;
    }>[];
    itemsAvailable: import("@/types").BigNumber;
    itemsMinted: import("@/types").BigNumber;
    itemsRemaining: import("@/types").BigNumber;
    itemsLoaded: import("@/types").BigNumber;
    isFullyLoaded: boolean;
    endSettings: import("../..").Option<import("./CandyMachine").EndSettings>;
    hiddenSettings: import("../..").Option<import("./CandyMachine").HiddenSettings>;
    whitelistMintSettings: import("../..").Option<import("./CandyMachine").WhitelistMintSettings>;
    gatekeeper: import("../..").Option<import("./CandyMachine").Gatekeeper>;
    creators: Readonly<{
        address: PublicKey;
        verified: boolean;
        share: number;
    }>[];
}>>;
export declare type FindCandyMachineByAddressOperation = Operation<typeof Key, FindCandyMachineByAddressInput, CandyMachine>;
export declare type FindCandyMachineByAddressInput = {
    address: PublicKey;
    commitment?: Commitment;
};
export declare const findCandyMachineByAddressOperationHandler: OperationHandler<FindCandyMachineByAddressOperation>;
export {};
