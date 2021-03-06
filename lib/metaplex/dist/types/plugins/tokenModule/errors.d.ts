import { PublicKey } from '@solana/web3.js';
import { MetaplexError, MetaplexErrorInputWithoutSource } from "../../errors";
export declare class TokenError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class MintAuthorityMustBeSignerToMintInitialSupplyError extends TokenError {
    constructor(cause?: Error);
}
export declare class TokenAndMintDoNotMatchError extends TokenError {
    constructor(token: PublicKey, tokenMint: PublicKey, mint: PublicKey, cause?: Error);
}
