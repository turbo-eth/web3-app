import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// starter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const starterAbi = [
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
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__
 */
export const useReadStarter = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"name"`
 */
export const useReadStarterName = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadStarterTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"balances"`
 */
export const useReadStarterBalances = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'balances',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadStarterDecimals = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"allowed"`
 */
export const useReadStarterAllowed = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'allowed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadStarterBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadStarterSymbol = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadStarterAllowance = /*#__PURE__*/ createUseReadContract({
  abi: starterAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link starterAbi}__
 */
export const useWriteStarter = /*#__PURE__*/ createUseWriteContract({
  abi: starterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteStarterApprove = /*#__PURE__*/ createUseWriteContract({
  abi: starterAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteStarterTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: starterAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteStarterTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: starterAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link starterAbi}__
 */
export const useSimulateStarter = /*#__PURE__*/ createUseSimulateContract({
  abi: starterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateStarterApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: starterAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateStarterTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: starterAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link starterAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateStarterTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: starterAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link starterAbi}__
 */
export const useWatchStarterEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: starterAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link starterAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchStarterTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: starterAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link starterAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchStarterApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: starterAbi,
    eventName: 'Approval',
  })
