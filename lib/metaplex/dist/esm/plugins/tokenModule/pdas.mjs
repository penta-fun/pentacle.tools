import { TokenProgram } from './program.mjs';
import { ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token-v2';
import { Pda } from '../../types/Pda.mjs';

const findAssociatedTokenAccountPda = (mint, owner, tokenProgramId = TokenProgram.publicKey, associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID) => {
  return Pda.find(associatedTokenProgramId, [owner.toBuffer(), tokenProgramId.toBuffer(), mint.toBuffer()]);
};

export { findAssociatedTokenAccountPda };
//# sourceMappingURL=pdas.mjs.map
