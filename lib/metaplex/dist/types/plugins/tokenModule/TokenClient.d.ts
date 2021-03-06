import type { PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Task } from "../../utils";
import { TokenBuildersClient } from './TokenBuildersClient';
import { Mint } from './Mint';
import { Token, TokenWithMint } from './Token';
import { CreateMintInput, CreateMintOutput } from './createMint';
import { CreateTokenInput, CreateTokenOutput } from './createToken';
import { CreateTokenWithMintInput, CreateTokenWithMintOutput } from './createTokenWithMint';
import { FindMintByAddressInput } from './findMintByAddress';
import { FindTokenByAddressInput } from './findTokenByAddress';
import { FindTokenWithMintByAddressInput } from './findTokenWithMintByAddress';
import { FindTokenWithMintByMintInput } from './findTokenWithMintByMint';
import { MintTokensInput, MintTokensOutput } from './mintTokens';
import { SendTokensInput, SendTokensOutput } from './sendTokens';
export declare class TokenClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    builders(): TokenBuildersClient;
    createMint(input?: CreateMintInput): Task<CreateMintOutput & {
        mint: Mint;
    }>;
    createToken(input: CreateTokenInput): Task<CreateTokenOutput & {
        token: Token;
    }>;
    createTokenWithMint(input?: CreateTokenWithMintInput): Task<CreateTokenWithMintOutput & {
        token: TokenWithMint;
    }>;
    findMintByAddress(address: PublicKey, options?: Omit<FindMintByAddressInput, 'address'>): Task<Readonly<{
        model: "mint";
        address: PublicKey;
        mintAuthorityAddress: import("../../utils").Option<PublicKey>;
        freezeAuthorityAddress: import("../../utils").Option<PublicKey>;
        decimals: number;
        supply: import("../..").Amount;
        isWrappedSol: boolean;
        currency: import("../..").Currency;
    }>, []>;
    findTokenByAddress(address: PublicKey, options?: Omit<FindTokenByAddressInput, 'address'>): Task<Readonly<{
        model: "token";
        address: PublicKey | import("../..").Pda;
        isAssociatedToken: boolean;
        mintAddress: PublicKey;
        ownerAddress: PublicKey;
        amount: import("../..").BigNumber;
        closeAuthorityAddress: import("../../utils").Option<PublicKey>;
        delegateAddress: import("../../utils").Option<PublicKey>;
        delegateAmount: import("../..").BigNumber;
    }>, []>;
    findTokenWithMintByAddress(address: PublicKey, options?: Omit<FindTokenWithMintByAddressInput, 'address'>): Task<TokenWithMint, []>;
    findTokenWithMintByMint(input: FindTokenWithMintByMintInput): Task<TokenWithMint, []>;
    mintTokens(input: MintTokensInput): Task<MintTokensOutput>;
    sendTokens(input: SendTokensInput): Task<SendTokensOutput>;
}
