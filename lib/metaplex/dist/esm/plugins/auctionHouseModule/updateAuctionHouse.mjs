import { createUpdateAuctionHouseInstruction } from '@metaplex-foundation/mpl-auction-house';
import isEqual from 'lodash.isequal';
import { TreasuryDestinationOwnerRequiredError } from './errors.mjs';
import { NoInstructionsToSendError } from '../../errors/SdkError.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { findAssociatedTokenAccountPda } from '../tokenModule/pdas.mjs';
import { TransactionBuilder } from '../../utils/TransactionBuilder.mjs';

// Operation
// -----------------

const Key = 'UpdateAuctionHouseOperation';
const updateAuctionHouseOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const updateAuctionHouseOperationHandler = {
  handle: async (operation, metaplex) => {
    const builder = updateAuctionHouseBuilder(metaplex, operation.input);

    if (builder.isEmpty()) {
      throw new NoInstructionsToSendError(Key);
    }

    return builder.sendAndConfirm(metaplex, operation.input.confirmOptions);
  }
}; // -----------------
// Builder
// -----------------

const updateAuctionHouseBuilder = (metaplex, params) => {
  var _params$authority, _params$payer, _params$newAuthority, _params$feeWithdrawal, _params$sellerFeeBasi, _params$requiresSignO, _params$canChangeSale;

  const authority = (_params$authority = params.authority) !== null && _params$authority !== void 0 ? _params$authority : metaplex.identity();
  const payer = (_params$payer = params.payer) !== null && _params$payer !== void 0 ? _params$payer : metaplex.identity();
  const auctionHouse = params.auctionHouse;
  let treasuryWithdrawalDestinationOwner;
  let treasuryWithdrawalDestination;

  if (auctionHouse.isNative) {
    var _params$treasuryWithd;

    treasuryWithdrawalDestinationOwner = (_params$treasuryWithd = params.treasuryWithdrawalDestinationOwner) !== null && _params$treasuryWithd !== void 0 ? _params$treasuryWithd : auctionHouse.treasuryWithdrawalDestinationAddress;
    treasuryWithdrawalDestination = treasuryWithdrawalDestinationOwner;
  } else if (params.treasuryWithdrawalDestinationOwner) {
    treasuryWithdrawalDestinationOwner = params.treasuryWithdrawalDestinationOwner;
    treasuryWithdrawalDestination = findAssociatedTokenAccountPda(auctionHouse.treasuryMint.address, treasuryWithdrawalDestinationOwner);
  } else {
    throw new TreasuryDestinationOwnerRequiredError();
  }

  const originalData = {
    authority: auctionHouse.authorityAddress,
    feeWithdrawalDestination: auctionHouse.feeWithdrawalDestinationAddress,
    treasuryWithdrawalDestination: auctionHouse.treasuryWithdrawalDestinationAddress,
    sellerFeeBasisPoints: auctionHouse.sellerFeeBasisPoints,
    requiresSignOff: auctionHouse.requiresSignOff,
    canChangeSalePrice: auctionHouse.canChangeSalePrice
  };
  const updatedData = {
    authority: (_params$newAuthority = params.newAuthority) !== null && _params$newAuthority !== void 0 ? _params$newAuthority : originalData.authority,
    feeWithdrawalDestination: (_params$feeWithdrawal = params.feeWithdrawalDestination) !== null && _params$feeWithdrawal !== void 0 ? _params$feeWithdrawal : originalData.feeWithdrawalDestination,
    treasuryWithdrawalDestination,
    sellerFeeBasisPoints: (_params$sellerFeeBasi = params.sellerFeeBasisPoints) !== null && _params$sellerFeeBasi !== void 0 ? _params$sellerFeeBasi : originalData.sellerFeeBasisPoints,
    requiresSignOff: (_params$requiresSignO = params.requiresSignOff) !== null && _params$requiresSignO !== void 0 ? _params$requiresSignO : originalData.requiresSignOff,
    canChangeSalePrice: (_params$canChangeSale = params.canChangeSalePrice) !== null && _params$canChangeSale !== void 0 ? _params$canChangeSale : originalData.canChangeSalePrice
  };
  const shouldSendUpdateInstruction = !isEqual(originalData, updatedData);
  return TransactionBuilder.make().setFeePayer(payer).when(shouldSendUpdateInstruction, builder => {
    var _params$sellerFeeBasi2, _params$requiresSignO2, _params$canChangeSale2, _params$instructionKe;

    return builder.add({
      instruction: createUpdateAuctionHouseInstruction({
        treasuryMint: auctionHouse.treasuryMint.address,
        payer: payer.publicKey,
        authority: authority.publicKey,
        newAuthority: updatedData.authority,
        feeWithdrawalDestination: updatedData.feeWithdrawalDestination,
        treasuryWithdrawalDestination,
        treasuryWithdrawalDestinationOwner,
        auctionHouse: auctionHouse.address
      }, {
        sellerFeeBasisPoints: (_params$sellerFeeBasi2 = params.sellerFeeBasisPoints) !== null && _params$sellerFeeBasi2 !== void 0 ? _params$sellerFeeBasi2 : null,
        requiresSignOff: (_params$requiresSignO2 = params.requiresSignOff) !== null && _params$requiresSignO2 !== void 0 ? _params$requiresSignO2 : null,
        canChangeSalePrice: (_params$canChangeSale2 = params.canChangeSalePrice) !== null && _params$canChangeSale2 !== void 0 ? _params$canChangeSale2 : null
      }),
      signers: [payer, authority],
      key: (_params$instructionKe = params.instructionKey) !== null && _params$instructionKe !== void 0 ? _params$instructionKe : 'updateAuctionHouse'
    });
  });
};

export { updateAuctionHouseBuilder, updateAuctionHouseOperation, updateAuctionHouseOperationHandler };
//# sourceMappingURL=updateAuctionHouse.mjs.map
