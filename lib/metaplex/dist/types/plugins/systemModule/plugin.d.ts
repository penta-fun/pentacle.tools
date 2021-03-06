import type { MetaplexPlugin } from "../../types";
import { SystemClient } from './SystemClient';
export declare const systemModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        system(): SystemClient;
    }
}
