import { toMetadata, toTokenWithMetadata } from './Metadata.mjs';
import { toTokenAccount, toMintAccount } from '../tokenModule/accounts.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { findMetadataPda } from '../../programs/tokenMetadata/pdas/findMetadataPda.mjs';
import { parseMetadataAccount } from '../../programs/tokenMetadata/accounts/MetadataAccount.mjs';
import { toMint } from '../tokenModule/Mint.mjs';
import { toTokenWithMint } from '../tokenModule/Token.mjs';

// -----------------
// Operation
// -----------------
const Key = 'FindTokenWithMetadataByAddressOperation';
const findTokenWithMetadataByAddressOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const findTokenWithMetadataByAddressOperationHandler = {
  handle: async (operation, metaplex, scope) => {
    const {
      address,
      commitment,
      loadJsonMetadata = true
    } = operation.input;
    const tokenAccount = toTokenAccount(await metaplex.rpc().getAccount(address, commitment));
    const mintAddress = tokenAccount.data.mint;
    const metadataAddress = findMetadataPda(mintAddress);
    const accounts = await metaplex.rpc().getMultipleAccounts([mintAddress, metadataAddress], commitment);
    const mintAccount = toMintAccount(accounts[0]);
    const metadataAccount = parseMetadataAccount(accounts[1]);
    const mintModel = toMint(mintAccount);

    if (!metadataAccount.exists) {
      return toTokenWithMint(tokenAccount, mintModel);
    }

    let metadataModel = toMetadata(metadataAccount);

    if (loadJsonMetadata) {
      metadataModel = await metaplex.nfts().loadJsonMetadata(metadataModel).run(scope);
    }

    return toTokenWithMetadata(tokenAccount, mintModel, metadataModel);
  }
};

export { findTokenWithMetadataByAddressOperation, findTokenWithMetadataByAddressOperationHandler };
//# sourceMappingURL=findTokenWithMetadataByAddress.mjs.map
