import { findAssociatedTokenAccountPda } from './pdas.mjs';
import assert from '../../utils/assert.mjs';
import { toBigNumber } from '../../types/BigNumber.mjs';
import { amount } from '../../types/Amount.mjs';

const isToken = value => typeof value === 'object' && value.model === 'token';
const assertToken = value => assert(isToken(value), `Expected Token model`);
const toToken = account => {
  const associatedTokenAddress = findAssociatedTokenAccountPda(account.data.mint, account.data.owner);
  const isAssociatedToken = associatedTokenAddress.equals(account.publicKey);
  return {
    model: 'token',
    address: isAssociatedToken ? associatedTokenAddress : account.publicKey,
    isAssociatedToken,
    mintAddress: account.data.mint,
    ownerAddress: account.data.owner,
    amount: toBigNumber(account.data.amount.toString()),
    closeAuthorityAddress: account.data.closeAuthorityOption ? account.data.closeAuthority : null,
    delegateAddress: account.data.delegateOption ? account.data.delegate : null,
    delegateAmount: toBigNumber(account.data.delegatedAmount.toString())
  };
};
const isTokenWithMint = value => typeof value === 'object' && value.model === 'tokenWithMint';
const assertTokenWithMint = value => assert(isTokenWithMint(value), `Expected TokenWithMint model`);
const toTokenWithMint = (tokenAccount, mintModel) => {
  const token = toToken(tokenAccount);
  return { ...token,
    model: 'tokenWithMint',
    mint: mintModel,
    amount: amount(token.amount, mintModel.currency),
    delegateAmount: amount(token.delegateAmount, mintModel.currency)
  };
};

export { assertToken, assertTokenWithMint, isToken, isTokenWithMint, toToken, toTokenWithMint };
//# sourceMappingURL=Token.mjs.map
