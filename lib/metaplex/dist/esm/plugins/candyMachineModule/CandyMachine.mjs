import { EndSettingType } from '@metaplex-foundation/mpl-candy-machine';
import { countCandyMachineItems, parseCandyMachineItems, getCandyMachineUuidFromAddress } from './helpers.mjs';
import assert from '../../utils/assert.mjs';
import { toBigNumber } from '../../types/BigNumber.mjs';
import { lamports } from '../../types/Amount.mjs';
import { removeEmptyChars } from '../../utils/common.mjs';
import { toOptionDateTime, toDateTime } from '../../types/DateTime.mjs';

// -----------------
// Program to Model
// -----------------
const isCandyMachine = value => typeof value === 'object' && value.model === 'candyMachine';
const assertCandyMachine = value => assert(isCandyMachine(value), 'Expected CandyMachine type');
const toCandyMachine = (account, unparsedAccount) => {
  const itemsAvailable = toBigNumber(account.data.data.itemsAvailable);
  const itemsMinted = toBigNumber(account.data.itemsRedeemed);
  const endSettings = account.data.data.endSettings;
  const hiddenSettings = account.data.data.hiddenSettings;
  const whitelistMintSettings = account.data.data.whitelistMintSettings;
  const gatekeeper = account.data.data.gatekeeper;
  const rawData = unparsedAccount.data;
  const itemsLoaded = hiddenSettings ? toBigNumber(0) : countCandyMachineItems(rawData);
  const items = hiddenSettings ? [] : parseCandyMachineItems(rawData);
  return {
    model: 'candyMachine',
    address: account.publicKey,
    authorityAddress: account.data.authority,
    walletAddress: account.data.wallet,
    tokenMintAddress: account.data.tokenMint,
    uuid: account.data.data.uuid,
    price: lamports(account.data.data.price),
    symbol: removeEmptyChars(account.data.data.symbol),
    sellerFeeBasisPoints: account.data.data.sellerFeeBasisPoints,
    isMutable: account.data.data.isMutable,
    retainAuthority: account.data.data.retainAuthority,
    goLiveDate: toOptionDateTime(account.data.data.goLiveDate),
    maxEditionSupply: toBigNumber(account.data.data.maxSupply),
    items,
    itemsAvailable,
    itemsMinted,
    itemsRemaining: toBigNumber(itemsAvailable.sub(itemsMinted)),
    itemsLoaded,
    isFullyLoaded: itemsAvailable.lte(itemsLoaded),
    endSettings: endSettings ? endSettings.endSettingType === EndSettingType.Date ? {
      endSettingType: EndSettingType.Date,
      date: toDateTime(endSettings.number)
    } : {
      endSettingType: EndSettingType.Amount,
      number: toBigNumber(endSettings.number)
    } : null,
    hiddenSettings,
    whitelistMintSettings: whitelistMintSettings ? { ...whitelistMintSettings,
      discountPrice: whitelistMintSettings.discountPrice ? lamports(whitelistMintSettings.discountPrice) : null
    } : null,
    gatekeeper: gatekeeper ? { ...gatekeeper,
      network: gatekeeper.gatekeeperNetwork
    } : null,
    creators: account.data.data.creators
  };
}; // -----------------
// Model to Configs
// -----------------

const toCandyMachineConfigs = candyMachine => {
  return {
    wallet: candyMachine.walletAddress,
    tokenMint: candyMachine.tokenMintAddress,
    ...candyMachine
  };
}; // -----------------
// Configs to Program
// -----------------

const toCandyMachineInstructionData = (address, configs) => {
  var _whitelistMintSetting, _whitelistMintSetting2;

  const endSettings = configs.endSettings;
  const whitelistMintSettings = configs.whitelistMintSettings;
  const gatekeeper = configs.gatekeeper;
  return {
    wallet: configs.wallet,
    tokenMint: configs.tokenMint,
    data: { ...configs,
      uuid: getCandyMachineUuidFromAddress(address),
      price: configs.price.basisPoints,
      maxSupply: configs.maxEditionSupply,
      endSettings: endSettings ? { ...endSettings,
        number: endSettings.endSettingType === EndSettingType.Date ? endSettings.date : endSettings.number
      } : null,
      whitelistMintSettings: whitelistMintSettings ? { ...whitelistMintSettings,
        discountPrice: (_whitelistMintSetting = (_whitelistMintSetting2 = whitelistMintSettings.discountPrice) === null || _whitelistMintSetting2 === void 0 ? void 0 : _whitelistMintSetting2.basisPoints) !== null && _whitelistMintSetting !== void 0 ? _whitelistMintSetting : null
      } : null,
      gatekeeper: gatekeeper ? { ...gatekeeper,
        gatekeeperNetwork: gatekeeper.network
      } : null
    }
  };
};

export { assertCandyMachine, isCandyMachine, toCandyMachine, toCandyMachineConfigs, toCandyMachineInstructionData };
//# sourceMappingURL=CandyMachine.mjs.map
