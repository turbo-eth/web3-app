import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155Abi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  { type: 'error', inputs: [], name: 'ERC1155Base__ArrayLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC1155Base__BalanceQueryZeroAddress' },
  { type: 'error', inputs: [], name: 'ERC1155Base__BurnExceedsBalance' },
  { type: 'error', inputs: [], name: 'ERC1155Base__BurnFromZeroAddress' },
  {
    type: 'error',
    inputs: [],
    name: 'ERC1155Base__ERC1155ReceiverNotImplemented',
  },
  { type: 'error', inputs: [], name: 'ERC1155Base__ERC1155ReceiverRejected' },
  { type: 'error', inputs: [], name: 'ERC1155Base__MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'ERC1155Base__NotOwnerOrApproved' },
  { type: 'error', inputs: [], name: 'ERC1155Base__SelfApproval' },
  { type: 'error', inputs: [], name: 'ERC1155Base__TransferExceedsBalance' },
  { type: 'error', inputs: [], name: 'ERC1155Base__TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'ERC165Base__InvalidInterfaceId' },
  { type: 'error', inputs: [], name: 'EnumerableSet__IndexOutOfBounds' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: '_value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'Fungible',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'NonFungible',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'NonFungible2nd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'accountsByToken',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_id', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'uri_', internalType: 'string', type: 'string' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintBatch',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'tokensByAccount',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalHolders',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useReadErc1155 = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"Fungible"`
 */
export const useReadErc1155Fungible = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'Fungible',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"NonFungible"`
 */
export const useReadErc1155NonFungible = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'NonFungible',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"NonFungible2nd"`
 */
export const useReadErc1155NonFungible2nd = /*#__PURE__*/ createUseReadContract(
  { abi: erc1155Abi, functionName: 'NonFungible2nd' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"accountsByToken"`
 */
export const useReadErc1155AccountsByToken =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'accountsByToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc1155Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc1155BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadErc1155BalanceOfBatch = /*#__PURE__*/ createUseReadContract(
  { abi: erc1155Abi, functionName: 'balanceOfBatch' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"contractURI"`
 */
export const useReadErc1155ContractUri = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc1155IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc1155Name = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"owner"`
 */
export const useReadErc1155Owner = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc1155Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"tokensByAccount"`
 */
export const useReadErc1155TokensByAccount =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'tokensByAccount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"totalHolders"`
 */
export const useReadErc1155TotalHolders = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'totalHolders',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc1155TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"uri"`
 */
export const useReadErc1155Uri = /*#__PURE__*/ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'uri',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useWriteErc1155 = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc1155Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteErc1155Mint = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"mintBatch"`
 */
export const useWriteErc1155MintBatch = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155Abi,
  functionName: 'mintBatch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteErc1155RenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteErc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc1155SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc1155SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteErc1155TransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useSimulateErc1155 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc1155Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc1155Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateErc1155Mint = /*#__PURE__*/ createUseSimulateContract({
  abi: erc1155Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"mintBatch"`
 */
export const useSimulateErc1155MintBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'mintBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateErc1155RenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateErc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc1155SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc1155SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateErc1155TransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useWatchErc1155Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc1155Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc1155ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc1155ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchErc1155OwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchErc1155TransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchErc1155TransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"URI"`
 */
export const useWatchErc1155UriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'URI',
  })
