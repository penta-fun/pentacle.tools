import { TOKEN_PROGRAM_ID } from '@solana/spl-token-v2';
import { TokenClient } from './TokenClient.mjs';
import { createMintOperation, createMintOperationHandler } from './createMint.mjs';
import { createTokenOperation, createTokenOperationHandler } from './createToken.mjs';
import { createTokenWithMintOperation, createTokenWithMintOperationHandler } from './createTokenWithMint.mjs';
import { findMintByAddressOperation, findMintByAddressOperationHandler } from './findMintByAddress.mjs';
import { findTokenByAddressOperation, findTokenByAddressOperationHandler } from './findTokenByAddress.mjs';
import { findTokenWithMintByAddressOperation, findTokenWithMintByAddressOperationHandler } from './findTokenWithMintByAddress.mjs';
import { findTokenWithMintByMintOperation, findTokenWithMintByMintOperationHandler } from './findTokenWithMintByMint.mjs';
import { mintTokensOperation, mintTokensOperationHandler } from './mintTokens.mjs';
import { sendTokensOperation, sendTokensOperationHandler } from './sendTokens.mjs';

const tokenModule = () => ({
  install(metaplex) {
    // Program.
    metaplex.programs().register({
      name: 'TokenProgram',
      address: TOKEN_PROGRAM_ID
    }); // Operations.

    const op = metaplex.operations();
    op.register(createMintOperation, createMintOperationHandler);
    op.register(createTokenOperation, createTokenOperationHandler);
    op.register(createTokenWithMintOperation, createTokenWithMintOperationHandler);
    op.register(findMintByAddressOperation, findMintByAddressOperationHandler);
    op.register(findTokenByAddressOperation, findTokenByAddressOperationHandler);
    op.register(findTokenWithMintByAddressOperation, findTokenWithMintByAddressOperationHandler);
    op.register(findTokenWithMintByMintOperation, findTokenWithMintByMintOperationHandler);
    op.register(mintTokensOperation, mintTokensOperationHandler);
    op.register(sendTokensOperation, sendTokensOperationHandler);

    metaplex.tokens = function () {
      return new TokenClient(this);
    };
  }

});

export { tokenModule };
//# sourceMappingURL=plugin.mjs.map
