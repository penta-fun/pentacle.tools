import { MetaplexPlugin } from "../../types";
import { CandyMachinesClient } from './CandyMachinesClient';
export declare const candyMachineModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        candyMachines(): CandyMachinesClient;
    }
}
