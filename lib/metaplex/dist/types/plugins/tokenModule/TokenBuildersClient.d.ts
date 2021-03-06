import type { Metaplex } from "../../Metaplex";
import { CreateMintBuilderParams } from './createMint';
import { CreateTokenBuilderParams } from './createToken';
import { CreateTokenWithMintBuilderParams } from './createTokenWithMint';
import { MintTokensBuilderParams } from './mintTokens';
import { SendTokensBuilderParams } from './sendTokens';
export declare class TokenBuildersClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    createMint(input: CreateMintBuilderParams): Promise<import("../..").TransactionBuilder<import("./createMint").CreateMintBuilderContext>>;
    createToken(input: CreateTokenBuilderParams): Promise<import("../..").TransactionBuilder<import("./createToken").CreateTokenBuilderContext>>;
    createTokenWithMint(input: CreateTokenWithMintBuilderParams): Promise<import("../..").TransactionBuilder<import("./createTokenWithMint").CreateTokenWithMintBuilderContext>>;
    mintTokens(input: MintTokensBuilderParams): import("../..").TransactionBuilder<object>;
    sendTokens(input: SendTokensBuilderParams): import("../..").TransactionBuilder<object>;
}
