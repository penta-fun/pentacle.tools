import { TOKEN_PROGRAM_ID } from '@solana/spl-token-v2';
import { MintGpaBuilder, TokenGpaBuilder } from './gpaBuilders.mjs';

const TokenProgram = {
  publicKey: TOKEN_PROGRAM_ID,

  mintAccounts(metaplex) {
    return new MintGpaBuilder(metaplex, this.publicKey);
  },

  tokenAccounts(metaplex) {
    return new TokenGpaBuilder(metaplex, this.publicKey);
  }

};

export { TokenProgram };
//# sourceMappingURL=program.mjs.map
