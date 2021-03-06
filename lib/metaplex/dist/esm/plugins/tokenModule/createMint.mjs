import { MINT_SIZE, createInitializeMintInstruction } from '@solana/spl-token-v2';
import { Keypair } from '@solana/web3.js';
import { TokenProgram } from './program.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

const Key = 'CreateMintOperation';
const createMintOperation = useOperation(Key);
const createMintOperationHandler = {
  async handle(operation, metaplex, scope) {
    const builder = await createMintBuilder(metaplex, operation.input);
    scope.throwIfCanceled();
    return builder.sendAndConfirm(metaplex, operation.input.confirmOptions);
  }

}; // -----------------
// Builder
// -----------------

const createMintBuilder = async (metaplex, params) => {
  var _params$createAccount, _params$initializeMin;

  const {
    decimals = 0,
    mint = Keypair.generate(),
    payer = metaplex.identity(),
    mintAuthority = metaplex.identity().publicKey,
    freezeAuthority = metaplex.identity().publicKey,
    tokenProgram = TokenProgram.publicKey
  } = params;
  return TransactionBuilder.make().setFeePayer(payer).setContext({
    mintSigner: mint
  }) // Create an empty account for the mint.
  .add(await metaplex.system().builders().createAccount({
    payer,
    newAccount: mint,
    space: MINT_SIZE,
    program: tokenProgram,
    instructionKey: (_params$createAccount = params.createAccountInstructionKey) !== null && _params$createAccount !== void 0 ? _params$createAccount : 'createAccount'
  })) // Initialize the mint.
  .add({
    instruction: createInitializeMintInstruction(mint.publicKey, decimals, mintAuthority, freezeAuthority, tokenProgram),
    signers: [mint],
    key: (_params$initializeMin = params.initializeMintInstructionKey) !== null && _params$initializeMin !== void 0 ? _params$initializeMin : 'initializeMint'
  });
};

export { createMintBuilder, createMintOperation, createMintOperationHandler };
//# sourceMappingURL=createMint.mjs.map
