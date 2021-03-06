import assert from '../../utils/assert.mjs';
import { Pda } from '../../types/Pda.mjs';

const isAuctionHouse = value => typeof value === 'object' && value.model === 'auctionHouse';
const assertAuctionHouse = value => assert(isAuctionHouse(value), `Expected AuctionHouse type`);
const toAuctionHouse = (auctionHouseAccount, treasuryMint) => ({
  model: 'auctionHouse',
  address: new Pda(auctionHouseAccount.publicKey, auctionHouseAccount.data.bump),
  creatorAddress: auctionHouseAccount.data.creator,
  authorityAddress: auctionHouseAccount.data.authority,
  treasuryMint,
  feeAccountAddress: new Pda(auctionHouseAccount.data.auctionHouseFeeAccount, auctionHouseAccount.data.feePayerBump),
  treasuryAccountAddress: new Pda(auctionHouseAccount.data.auctionHouseTreasury, auctionHouseAccount.data.treasuryBump),
  feeWithdrawalDestinationAddress: auctionHouseAccount.data.feeWithdrawalDestination,
  treasuryWithdrawalDestinationAddress: auctionHouseAccount.data.treasuryWithdrawalDestination,
  sellerFeeBasisPoints: auctionHouseAccount.data.sellerFeeBasisPoints,
  requiresSignOff: auctionHouseAccount.data.requiresSignOff,
  canChangeSalePrice: auctionHouseAccount.data.canChangeSalePrice,
  isNative: treasuryMint.isWrappedSol
});

export { assertAuctionHouse, isAuctionHouse, toAuctionHouse };
//# sourceMappingURL=AuctionHouse.mjs.map
