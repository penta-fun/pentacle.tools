import { AuctionHouse, ListingReceipt } from '@metaplex-foundation/mpl-auction-house';
import { Account } from "../../types";
export declare type AuctionHouseAccount = Account<AuctionHouse>;
export declare const parseAuctionHouseAccount: import("../../types").AccountParsingFunction<AuctionHouse>;
export declare const toAuctionHouseAccount: import("../../types").AccountParsingAndAssertingFunction<AuctionHouse>;
export declare type ListingReceiptAccount = Account<ListingReceipt>;
export declare const parseListingReceiptAccount: import("../../types").AccountParsingFunction<ListingReceipt>;
export declare const toListingReceiptAccount: import("../../types").AccountParsingAndAssertingFunction<ListingReceipt>;
