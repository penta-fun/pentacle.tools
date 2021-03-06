import { createCreateAuctionHouseInstruction } from '@metaplex-foundation/mpl-auction-house';
import { findAuctionHousePda, findAuctionHouseFeePda, findAuctionHouseTreasuryPda } from './pdas.mjs';
import { WRAPPED_SOL_MINT } from '../tokenModule/constants.mjs';
import { findAssociatedTokenAccountPda } from '../tokenModule/pdas.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'CreateAuctionHouseOperation';
const createAuctionHouseOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const createAuctionHouseOperationHandler = {
  handle: async (operation, metaplex) => {
    const builder = createAuctionHouseBuilder(metaplex, operation.input);
    const response = await metaplex.rpc().sendAndConfirmTransaction(builder, undefined, operation.input.confirmOptions);
    return {
      response,
      ...builder.getContext()
    };
  }
}; // -----------------
// Builder
// -----------------

const createAuctionHouseBuilder = (metaplex, params) => {
  var _params$canChangeSale, _params$requiresSignO, _params$authority, _params$payer, _params$treasuryMint, _params$treasuryWithd, _params$feeWithdrawal, _params$instructionKe;

  // Data.
  const canChangeSalePrice = (_params$canChangeSale = params.canChangeSalePrice) !== null && _params$canChangeSale !== void 0 ? _params$canChangeSale : false;
  const requiresSignOff = (_params$requiresSignO = params.requiresSignOff) !== null && _params$requiresSignO !== void 0 ? _params$requiresSignO : canChangeSalePrice; // Accounts.

  const authority = (_params$authority = params.authority) !== null && _params$authority !== void 0 ? _params$authority : metaplex.identity().publicKey;
  const payer = (_params$payer = params.payer) !== null && _params$payer !== void 0 ? _params$payer : metaplex.identity();
  const treasuryMint = (_params$treasuryMint = params.treasuryMint) !== null && _params$treasuryMint !== void 0 ? _params$treasuryMint : WRAPPED_SOL_MINT;
  const treasuryWithdrawalDestinationOwner = (_params$treasuryWithd = params.treasuryWithdrawalDestinationOwner) !== null && _params$treasuryWithd !== void 0 ? _params$treasuryWithd : metaplex.identity().publicKey;
  const feeWithdrawalDestination = (_params$feeWithdrawal = params.feeWithdrawalDestination) !== null && _params$feeWithdrawal !== void 0 ? _params$feeWithdrawal : metaplex.identity().publicKey; // PDAs.

  const auctionHouse = findAuctionHousePda(authority, treasuryMint);
  const auctionHouseFeeAccount = findAuctionHouseFeePda(auctionHouse);
  const auctionHouseTreasury = findAuctionHouseTreasuryPda(auctionHouse);
  const treasuryWithdrawalDestination = treasuryMint.equals(WRAPPED_SOL_MINT) ? treasuryWithdrawalDestinationOwner : findAssociatedTokenAccountPda(treasuryMint, treasuryWithdrawalDestinationOwner);
  return TransactionBuilder.make().setFeePayer(payer).setContext({
    auctionHouseAddress: auctionHouse,
    auctionHouseFeeAccountAddress: auctionHouseFeeAccount,
    auctionHouseTreasuryAddress: auctionHouseTreasury,
    treasuryWithdrawalDestinationAddress: treasuryWithdrawalDestination
  }).add({
    instruction: createCreateAuctionHouseInstruction({
      treasuryMint,
      payer: payer.publicKey,
      authority,
      feeWithdrawalDestination,
      treasuryWithdrawalDestination,
      treasuryWithdrawalDestinationOwner,
      auctionHouse,
      auctionHouseFeeAccount,
      auctionHouseTreasury
    }, {
      bump: auctionHouse.bump,
      feePayerBump: auctionHouseFeeAccount.bump,
      treasuryBump: auctionHouseTreasury.bump,
      sellerFeeBasisPoints: params.sellerFeeBasisPoints,
      requiresSignOff,
      canChangeSalePrice
    }),
    signers: [payer],
    key: (_params$instructionKe = params.instructionKey) !== null && _params$instructionKe !== void 0 ? _params$instructionKe : 'createAuctionHouse'
  });
};

export { createAuctionHouseBuilder, createAuctionHouseOperation, createAuctionHouseOperationHandler };
//# sourceMappingURL=createAuctionHouse.mjs.map
