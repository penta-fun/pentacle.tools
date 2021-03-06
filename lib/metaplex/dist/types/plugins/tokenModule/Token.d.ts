import type { PublicKey } from '@solana/web3.js';
import { Amount, BigNumber, Pda } from "../../types";
import { Option } from "../../utils";
import { TokenAccount } from './accounts';
import { Mint } from './Mint';
export declare type Token = Readonly<{
    model: 'token';
    address: PublicKey | Pda;
    isAssociatedToken: boolean;
    mintAddress: PublicKey;
    ownerAddress: PublicKey;
    amount: BigNumber;
    closeAuthorityAddress: Option<PublicKey>;
    delegateAddress: Option<PublicKey>;
    delegateAmount: BigNumber;
}>;
export declare const isToken: (value: any) => value is Readonly<{
    model: 'token';
    address: PublicKey | Pda;
    isAssociatedToken: boolean;
    mintAddress: PublicKey;
    ownerAddress: PublicKey;
    amount: BigNumber;
    closeAuthorityAddress: Option<PublicKey>;
    delegateAddress: Option<PublicKey>;
    delegateAmount: BigNumber;
}>;
export declare const assertToken: (value: any) => asserts value is Readonly<{
    model: 'token';
    address: PublicKey | Pda;
    isAssociatedToken: boolean;
    mintAddress: PublicKey;
    ownerAddress: PublicKey;
    amount: BigNumber;
    closeAuthorityAddress: Option<PublicKey>;
    delegateAddress: Option<PublicKey>;
    delegateAmount: BigNumber;
}>;
export declare const toToken: (account: TokenAccount) => Token;
export declare type TokenWithMint = Omit<Token, 'model' | 'mintAddress' | 'amount' | 'delegateAmount'> & Readonly<{
    model: 'tokenWithMint';
    mint: Mint;
    amount: Amount;
    delegateAmount: Amount;
}>;
export declare const isTokenWithMint: (value: any) => value is TokenWithMint;
export declare const assertTokenWithMint: (value: any) => asserts value is TokenWithMint;
export declare const toTokenWithMint: (tokenAccount: TokenAccount, mintModel: Mint) => TokenWithMint;
