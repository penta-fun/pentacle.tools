import { Account } from "../../types";
import { RawAccount as SplTokenAccount, RawMint as SplMintAccount } from '@solana/spl-token-v2';
export declare type MintAccount = Account<SplMintAccount>;
export declare const parseMintAccount: import("../../types").AccountParsingFunction<SplMintAccount>;
export declare const toMintAccount: import("../../types").AccountParsingAndAssertingFunction<SplMintAccount>;
export declare type TokenAccount = Account<SplTokenAccount>;
export declare const parseTokenAccount: import("../../types").AccountParsingFunction<SplTokenAccount>;
export declare const toTokenAccount: import("../../types").AccountParsingAndAssertingFunction<SplTokenAccount>;
