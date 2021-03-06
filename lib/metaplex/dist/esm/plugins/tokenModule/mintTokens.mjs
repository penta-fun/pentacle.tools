import { createMintToInstruction } from '@solana/spl-token-v2';
import { isMint } from './Mint.mjs';
import { TokenProgram } from './program.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { isSigner } from '../../types/Signer.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'MintTokensOperation';
const mintTokensOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const mintTokensOperationHandler = {
  async handle(operation, metaplex) {
    return mintTokensBuilder(metaplex, operation.input).sendAndConfirm(metaplex, operation.input.confirmOptions);
  }

}; // -----------------
// Builder
// -----------------

const mintTokensBuilder = (metaplex, params) => {
  var _params$instructionKe;

  const {
    mint,
    destination,
    amount,
    mintAuthority = metaplex.identity(),
    multiSigners = [],
    tokenProgram = TokenProgram.publicKey
  } = params;
  const [mintAuthorityPublicKey, signers] = isSigner(mintAuthority) ? [mintAuthority.publicKey, [mintAuthority]] : [mintAuthority, multiSigners];
  return TransactionBuilder.make().add({
    instruction: createMintToInstruction(isMint(mint) ? mint.address : mint, destination, mintAuthorityPublicKey, amount.basisPoints.toNumber(), multiSigners, tokenProgram),
    signers,
    key: (_params$instructionKe = params.instructionKey) !== null && _params$instructionKe !== void 0 ? _params$instructionKe : 'mintTokens'
  });
};

export { mintTokensBuilder, mintTokensOperation, mintTokensOperationHandler };
//# sourceMappingURL=mintTokens.mjs.map
