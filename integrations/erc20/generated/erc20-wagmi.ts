import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowed',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
  },
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_initialAmount', type: 'uint256' },
      { name: '_tokenName', type: 'string' },
      { name: '_decimalUnits', type: 'uint8' },
      { name: '_tokenSymbol', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_from', type: 'address', indexed: true },
      { name: '_to', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_owner', type: 'address', indexed: true },
      { name: '_spender', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20Mintable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20MintableAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
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
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
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
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balances"`
 */
export const useReadErc20Balances = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balances',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowed"`
 */
export const useReadErc20Allowed = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__
 */
export const useReadErc20Mintable = /*#__PURE__*/ createUseReadContract({
  abi: erc20MintableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20MintableAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20MintableAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20MintableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20MintableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20MintableDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: erc20MintableAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20MintableName = /*#__PURE__*/ createUseReadContract({
  abi: erc20MintableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20MintableSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20MintableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20MintableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20MintableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__
 */
export const useWriteErc20Mintable = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MintableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20MintableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MintableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteErc20MintableDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MintableAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteErc20MintableIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MintableAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteErc20MintableMint = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MintableAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20MintableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MintableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20MintableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MintableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__
 */
export const useSimulateErc20Mintable = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20MintableAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20MintableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateErc20MintableDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateErc20MintableIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateErc20MintableMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20MintableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MintableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20MintableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MintableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MintableAbi}__
 */
export const useWatchErc20MintableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20MintableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MintableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20MintableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20MintableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MintableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20MintableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20MintableAbi,
    eventName: 'Transfer',
  })
