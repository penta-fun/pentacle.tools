import { createTransferCheckedInstruction } from '@solana/spl-token-v2';
import { isMint } from './Mint.mjs';
import { findAssociatedTokenAccountPda } from './pdas.mjs';
import { TokenProgram } from './program.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { isSigner } from '../../types/Signer.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'SendTokensOperation';
const sendTokensOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const sendTokensOperationHandler = {
  async handle(operation, metaplex) {
    return sendTokensBuilder(metaplex, operation.input).sendAndConfirm(metaplex, operation.input.confirmOptions);
  }

}; // -----------------
// Builder
// -----------------

const sendTokensBuilder = (metaplex, params) => {
  var _params$instructionKe;

  const {
    mint,
    to,
    amount,
    fromOwner = metaplex.identity(),
    fromToken,
    fromMultiSigners = [],
    tokenProgram = TokenProgram.publicKey
  } = params;
  const [fromOwnerPublicKey, signers] = isSigner(fromOwner) ? [fromOwner.publicKey, [fromOwner]] : [fromOwner, fromMultiSigners];
  const mintAddress = isMint(mint) ? mint.address : mint;
  const decimals = isMint(mint) ? mint.decimals : amount.currency.decimals;
  const fromTokenOrAssociated = fromToken !== null && fromToken !== void 0 ? fromToken : findAssociatedTokenAccountPda(mintAddress, fromOwnerPublicKey);
  return TransactionBuilder.make().add({
    instruction: createTransferCheckedInstruction(fromTokenOrAssociated, mintAddress, to, fromOwnerPublicKey, amount.basisPoints.toNumber(), decimals, fromMultiSigners, tokenProgram),
    signers,
    key: (_params$instructionKe = params.instructionKey) !== null && _params$instructionKe !== void 0 ? _params$instructionKe : 'transferTokens'
  });
};

export { sendTokensBuilder, sendTokensOperation, sendTokensOperationHandler };
//# sourceMappingURL=sendTokens.mjs.map
