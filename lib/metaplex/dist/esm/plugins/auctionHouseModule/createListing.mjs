import { SYSVAR_INSTRUCTIONS_PUBKEY } from '@solana/web3.js';
import { createAuctioneerSellInstruction, createSellInstruction, createPrintListingReceiptInstruction } from '@metaplex-foundation/mpl-auction-house';
import { findAuctionHouseTradeStatePda, findAuctionHouseProgramAsSignerPda, findAuctioneerPda, findListingReceiptPda } from './pdas.mjs';
import { AUCTIONEER_PRICE } from './constants.mjs';
import { token, amount, lamports } from '../../types/Amount.mjs';
import { findMetadataPda } from '../../programs/tokenMetadata/pdas/findMetadataPda.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { findAssociatedTokenAccountPda } from '../tokenModule/pdas.mjs';
import { toPublicKey } from '../../types/PublicKey.mjs';
import { isSigner } from '../../types/Signer.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'CreateListingOperation';
const createListingOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const createListingOperationHandler = {
  handle: async (operation, metaplex) => {
    const builder = createListingBuilder(metaplex, operation.input);
    const response = await metaplex.rpc().sendAndConfirmTransaction(builder, undefined, operation.input.confirmOptions);
    return {
      response,
      ...builder.getContext()
    };
  }
}; // -----------------
// Builder
// -----------------

const createListingBuilder = (metaplex, params) => {
  var _params$tokens, _params$price$basisPo, _params$price, _params$wallet, _params$authority, _params$tokenAccount, _params$bookkeeper, _params$printReceipt;

  // Data.
  const auctionHouse = params.auctionHouse;
  const tokens = (_params$tokens = params.tokens) !== null && _params$tokens !== void 0 ? _params$tokens : token(1);
  const priceBasisPoint = params.auctioneerAuthority ? AUCTIONEER_PRICE : (_params$price$basisPo = (_params$price = params.price) === null || _params$price === void 0 ? void 0 : _params$price.basisPoints) !== null && _params$price$basisPo !== void 0 ? _params$price$basisPo : 0;
  const price = amount(priceBasisPoint, auctionHouse.treasuryMint.currency); // Accounts.

  const wallet = (_params$wallet = params.wallet) !== null && _params$wallet !== void 0 ? _params$wallet : metaplex.identity();
  const authority = (_params$authority = params.authority) !== null && _params$authority !== void 0 ? _params$authority : auctionHouse.authorityAddress;
  const metadata = findMetadataPda(params.mintAccount);
  const tokenAccount = (_params$tokenAccount = params.tokenAccount) !== null && _params$tokenAccount !== void 0 ? _params$tokenAccount : findAssociatedTokenAccountPda(params.mintAccount, toPublicKey(wallet));
  const sellerTradeState = findAuctionHouseTradeStatePda(auctionHouse.address, toPublicKey(wallet), tokenAccount, auctionHouse.treasuryMint.address, params.mintAccount, price.basisPoints, tokens.basisPoints);
  const freeSellerTradeState = findAuctionHouseTradeStatePda(auctionHouse.address, toPublicKey(wallet), tokenAccount, auctionHouse.treasuryMint.address, params.mintAccount, lamports(0).basisPoints, tokens.basisPoints);
  const programAsSigner = findAuctionHouseProgramAsSignerPda();
  const accounts = {
    wallet: toPublicKey(wallet),
    tokenAccount,
    metadata,
    authority: toPublicKey(authority),
    auctionHouse: auctionHouse.address,
    auctionHouseFeeAccount: auctionHouse.feeAccountAddress,
    sellerTradeState,
    freeSellerTradeState,
    programAsSigner
  }; // Args.

  const args = {
    tradeStateBump: sellerTradeState.bump,
    freeTradeStateBump: freeSellerTradeState.bump,
    programAsSignerBump: programAsSigner.bump,
    buyerPrice: price.basisPoints,
    tokenSize: tokens.basisPoints
  }; // Sell Instruction.

  let sellInstruction;

  if (params.auctioneerAuthority) {
    sellInstruction = createAuctioneerSellInstruction({ ...accounts,
      auctioneerAuthority: params.auctioneerAuthority.publicKey,
      ahAuctioneerPda: findAuctioneerPda(auctionHouse.address, params.auctioneerAuthority.publicKey)
    }, args);
  } else {
    sellInstruction = createSellInstruction(accounts, args);
  } // Signers.


  const sellSigners = [wallet, authority, params.auctioneerAuthority].filter(input => !!input && isSigner(input)); // Receipt.

  const bookkeeper = (_params$bookkeeper = params.bookkeeper) !== null && _params$bookkeeper !== void 0 ? _params$bookkeeper : metaplex.identity();
  const receipt = findListingReceiptPda(sellerTradeState);
  return TransactionBuilder.make().setContext({
    sellerTradeState,
    freeSellerTradeState,
    tokenAccount,
    metadata,
    wallet: toPublicKey(wallet),
    receipt,
    bookkeeper: bookkeeper.publicKey,
    price,
    tokens
  }) // Create Listing.
  .add({
    instruction: sellInstruction,
    signers: sellSigners,
    key: 'sell'
  }) // Print the Listing Receipt.
  .when((_params$printReceipt = params.printReceipt) !== null && _params$printReceipt !== void 0 ? _params$printReceipt : true, builder => builder.add({
    instruction: createPrintListingReceiptInstruction({
      receipt,
      bookkeeper: bookkeeper.publicKey,
      instruction: SYSVAR_INSTRUCTIONS_PUBKEY
    }, {
      receiptBump: receipt.bump
    }),
    signers: [bookkeeper],
    key: 'printListingReceipt'
  }));
};

export { createListingBuilder, createListingOperation, createListingOperationHandler };
//# sourceMappingURL=createListing.mjs.map
