import { toMetadata, toTokenWithMetadata } from './Metadata.mjs';
import { useOperation } from '../../types/Operation.mjs';
import { toMetadataAccount } from '../../programs/tokenMetadata/accounts/MetadataAccount.mjs';
import { findAssociatedTokenAccountPda } from '../tokenModule/pdas.mjs';
import { toMintAccount, toTokenAccount } from '../tokenModule/accounts.mjs';
import { toMint } from '../tokenModule/Mint.mjs';

// -----------------
// Operation
// -----------------
const Key = 'FindTokenWithMetadataByMetadataOperation';
const findTokenWithMetadataByMetadataOperation = useOperation(Key);
// -----------------
// Handler
// -----------------
const findTokenWithMetadataByMetadataOperationHandler = {
  handle: async (operation, metaplex, scope) => {
    const {
      metadataAddress,
      ownerAddress,
      commitment,
      loadJsonMetadata = true
    } = operation.input;
    const metadataAccount = toMetadataAccount(await metaplex.rpc().getAccount(metadataAddress));
    const mintAddress = metadataAccount.data.mint;
    const tokenAddress = findAssociatedTokenAccountPda(mintAddress, ownerAddress);
    const accounts = await metaplex.rpc().getMultipleAccounts([mintAddress, tokenAddress], commitment);
    const mintAccount = toMintAccount(accounts[0]);
    const tokenAccount = toTokenAccount(accounts[1]);
    const mintModel = toMint(mintAccount);
    let metadataModel = toMetadata(metadataAccount);

    if (loadJsonMetadata) {
      metadataModel = await metaplex.nfts().loadJsonMetadata(metadataModel).run(scope);
    }

    return toTokenWithMetadata(tokenAccount, mintModel, metadataModel);
  }
};

export { findTokenWithMetadataByMetadataOperation, findTokenWithMetadataByMetadataOperationHandler };
//# sourceMappingURL=findTokenWithMetadataByMetadata.mjs.map
