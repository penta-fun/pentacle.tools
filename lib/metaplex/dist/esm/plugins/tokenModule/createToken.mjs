import { ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, ACCOUNT_SIZE, createInitializeAccountInstruction } from '@solana/spl-token-v2';
import { findAssociatedTokenAccountPda } from './pdas.mjs';
import { TokenProgram } from './program.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'CreateTokenOperation';
const createTokenOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const createTokenOperationHandler = {
  async handle(operation, metaplex, scope) {
    const builder = await createTokenBuilder(metaplex, operation.input);
    scope.throwIfCanceled();
    return builder.sendAndConfirm(metaplex, operation.input.confirmOptions);
  }

}; // -----------------
// Builder
// -----------------

const createTokenBuilder = async (metaplex, params) => {
  var _params$createAccount, _params$initializeTok;

  const {
    mint,
    owner = metaplex.identity().publicKey,
    token,
    payer = metaplex.identity(),
    tokenProgram = TokenProgram.publicKey,
    associatedTokenProgram = ASSOCIATED_TOKEN_PROGRAM_ID
  } = params;
  const isAssociatedToken = token === undefined;
  const builder = TransactionBuilder.make().setFeePayer(payer);

  if (isAssociatedToken) {
    var _params$createAssocia;

    const associatedTokenAddress = findAssociatedTokenAccountPda(mint, owner, tokenProgram, associatedTokenProgram);
    return builder.setContext({
      tokenAddress: associatedTokenAddress
    }) // Create an associated token account.
    .add({
      instruction: createAssociatedTokenAccountInstruction(payer.publicKey, associatedTokenAddress, owner, mint, tokenProgram, associatedTokenProgram),
      signers: [payer],
      key: (_params$createAssocia = params.createAssociatedTokenAccountInstructionKey) !== null && _params$createAssocia !== void 0 ? _params$createAssocia : 'createAssociatedTokenAccount'
    });
  }

  return builder.setContext({
    tokenAddress: token.publicKey
  }) // Create an empty account for the Token.
  .add(await metaplex.system().builders().createAccount({
    payer,
    newAccount: token,
    space: ACCOUNT_SIZE,
    program: tokenProgram,
    instructionKey: (_params$createAccount = params.createAccountInstructionKey) !== null && _params$createAccount !== void 0 ? _params$createAccount : 'createAccount'
  })) // Initialize the Token.
  .add({
    instruction: createInitializeAccountInstruction(token.publicKey, mint, owner, tokenProgram),
    signers: [token],
    key: (_params$initializeTok = params.initializeTokenInstructionKey) !== null && _params$initializeTok !== void 0 ? _params$initializeTok : 'initializeToken'
  });
};

export { createTokenBuilder, createTokenOperation, createTokenOperationHandler };
//# sourceMappingURL=createToken.mjs.map
