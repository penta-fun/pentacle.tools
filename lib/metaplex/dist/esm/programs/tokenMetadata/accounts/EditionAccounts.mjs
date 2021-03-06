import { Edition, Key, MasterEditionV1, MasterEditionV2 } from '@metaplex-foundation/mpl-token-metadata';
import { getAccountParsingFunction, getAccountParsingAndAssertingFunction } from '../../../types/Account.mjs';

const originalOrPrintEditionAccountParser = {
  name: 'MasterEditionV1 | MasterEditionV2 | Edition',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV1) {
      return MasterEditionV1.deserialize(data, offset);
    } else if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV2) {
      return MasterEditionV2.deserialize(data, offset);
    } else {
      return Edition.deserialize(data, offset);
    }
  }
};
const parseOriginalOrPrintEditionAccount = getAccountParsingFunction(originalOrPrintEditionAccountParser);
const toOriginalOrPrintEditionAccount = getAccountParsingAndAssertingFunction(originalOrPrintEditionAccountParser);
const isOriginalEditionAccount = account => {
  return 'maxSupply' in account.data;
};
const isPrintEditionAccount = account => {
  return !isOriginalEditionAccount(account);
};
const originalEditionAccountParser = {
  name: 'MasterEditionV1 | MasterEditionV2',
  deserialize: (data, offset = 0) => {
    if ((data === null || data === void 0 ? void 0 : data[0]) === Key.MasterEditionV1) {
      return MasterEditionV1.deserialize(data, offset);
    } else {
      return MasterEditionV2.deserialize(data, offset);
    }
  }
};
const parseOriginalEditionAccount = getAccountParsingFunction(originalEditionAccountParser);
const toOriginalEditionAccount = getAccountParsingAndAssertingFunction(originalEditionAccountParser);
const parsePrintEditionAccount = getAccountParsingFunction(Edition);
const toPrintEditionAccount = getAccountParsingAndAssertingFunction(Edition);

export { isOriginalEditionAccount, isPrintEditionAccount, parseOriginalEditionAccount, parseOriginalOrPrintEditionAccount, parsePrintEditionAccount, toOriginalEditionAccount, toOriginalOrPrintEditionAccount, toPrintEditionAccount };
//# sourceMappingURL=EditionAccounts.mjs.map
