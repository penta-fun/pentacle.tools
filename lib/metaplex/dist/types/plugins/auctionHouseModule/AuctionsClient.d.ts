import type { Metaplex } from "../../Metaplex";
import { Task } from "../../utils";
import type { PublicKey } from '@solana/web3.js';
import { AuctionHouse } from './AuctionHouse';
import { AuctionsBuildersClient } from './AuctionsBuildersClient';
import { CreateAuctionHouseInput, CreateAuctionHouseOutput } from './createAuctionHouse';
import { FindAuctionHouseByAddressInput } from './findAuctionHouseByAddress';
import { UpdateAuctionHouseInput, UpdateAuctionHouseOutput } from './updateAuctionHouse';
import { Signer } from "../../types";
import { AuctionHouseClient } from './AuctionHouseClient';
export declare class AuctionsClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    builders(): AuctionsBuildersClient;
    for(auctionHouse: AuctionHouse, auctioneerAuthority?: Signer): AuctionHouseClient;
    createAuctionHouse(input: CreateAuctionHouseInput): Task<CreateAuctionHouseOutput & {
        auctionHouse: AuctionHouse;
    }>;
    updateAuctionHouse(auctionHouse: AuctionHouse, input: Omit<UpdateAuctionHouseInput, 'auctionHouse'>): Task<UpdateAuctionHouseOutput & {
        auctionHouse: AuctionHouse;
    }>;
    findAuctionHouseByAddress(address: PublicKey, options?: Omit<FindAuctionHouseByAddressInput, 'address'>): Task<AuctionHouse>;
    findAuctionHouseByCreatorAndMint(creator: PublicKey, treasuryMint: PublicKey, options?: Omit<FindAuctionHouseByAddressInput, 'address'>): Task<AuctionHouse>;
}
