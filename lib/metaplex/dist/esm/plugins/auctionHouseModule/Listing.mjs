import assert from '../../utils/assert.mjs';
import { toDateTime, toOptionDateTime } from '../../types/DateTime.mjs';
import { amount } from '../../types/Amount.mjs';
import { Pda } from '../../types/Pda.mjs';
import { toBigNumber } from '../../types/BigNumber.mjs';

const isListing = value => typeof value === 'object' && value.model === 'listing' && !value.lazy;
const assertListing = value => assert(isListing(value), `Expected Listing type`);
const toListing = (account, auctionHouseModel, tokenModel) => {
  const lazyListing = toLazyListing(account, auctionHouseModel);
  return { ...lazyListing,
    model: 'listing',
    lazy: false,
    token: tokenModel,
    tokens: amount(lazyListing.tokens, tokenModel.mint.currency)
  };
};
const isLazyListing = value => typeof value === 'object' && value.model === 'listing' && value.lazy;
const assertLazyListing = value => assert(isLazyListing(value), `Expected LazyListing type`);
const toLazyListing = (account, auctionHouseModel) => {
  return {
    model: 'listing',
    lazy: true,
    auctionHouse: auctionHouseModel,
    tradeStateAddress: new Pda(account.data.tradeState, account.data.tradeStateBump),
    bookkeeperAddress: account.data.bookkeeper,
    sellerAddress: account.data.seller,
    metadataAddress: account.data.metadata,
    receiptAddress: new Pda(account.data.tradeState, account.data.tradeStateBump),
    purchaseReceiptAddress: account.data.purchaseReceipt,
    // Data.
    price: amount(account.data.price, auctionHouseModel.treasuryMint.currency),
    tokens: toBigNumber(account.data.tokenSize),
    createdAt: toDateTime(account.data.createdAt),
    canceledAt: toOptionDateTime(account.data.canceledAt)
  };
};

export { assertLazyListing, assertListing, isLazyListing, isListing, toLazyListing, toListing };
//# sourceMappingURL=Listing.mjs.map
