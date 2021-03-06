import { MintLayout, AccountLayout } from '@solana/spl-token-v2';
import { getAccountParsingFunction, getAccountParsingAndAssertingFunction } from '../../types/Account.mjs';

const mintAccountParser = {
  name: 'MintAccount',
  deserialize: (data, offset) => {
    const span = MintLayout.getSpan(data, offset);
    const decoded = MintLayout.decode(data, offset);
    return [decoded, span];
  }
};
const parseMintAccount = getAccountParsingFunction(mintAccountParser);
const toMintAccount = getAccountParsingAndAssertingFunction(mintAccountParser);
const tokenAccountParser = {
  name: 'TokenAccount',
  deserialize: (data, offset) => {
    const span = AccountLayout.getSpan(data, offset);
    const decoded = AccountLayout.decode(data, offset);
    return [decoded, span];
  }
};
const parseTokenAccount = getAccountParsingFunction(tokenAccountParser);
const toTokenAccount = getAccountParsingAndAssertingFunction(tokenAccountParser);

export { parseMintAccount, parseTokenAccount, toMintAccount, toTokenAccount };
//# sourceMappingURL=accounts.mjs.map
