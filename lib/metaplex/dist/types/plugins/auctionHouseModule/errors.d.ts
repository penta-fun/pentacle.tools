import { MetaplexError, MetaplexErrorInputWithoutSource } from "../../errors";
export declare class AuctionHouseError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class TreasuryDestinationOwnerRequiredError extends AuctionHouseError {
    constructor(cause?: Error);
}
