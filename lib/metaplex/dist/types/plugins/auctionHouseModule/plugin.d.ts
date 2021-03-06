import type { MetaplexPlugin } from "../../types";
import { AuctionsClient } from './AuctionsClient';
export declare const auctionHouseModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        auctions(): AuctionsClient;
    }
}
