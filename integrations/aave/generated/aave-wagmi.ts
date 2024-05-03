import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'provider',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'backer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'BackUnbacked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'onBehalfOf',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestRateMode',
        internalType: 'enum DataTypes.InterestRateMode',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'borrowRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'referralCode',
        internalType: 'uint16',
        type: 'uint16',
        indexed: true,
      },
    ],
    name: 'Borrow',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'initiator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestRateMode',
        internalType: 'enum DataTypes.InterestRateMode',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'premium',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'referralCode',
        internalType: 'uint16',
        type: 'uint16',
        indexed: true,
      },
    ],
    name: 'FlashLoan',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'totalDebt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'IsolationModeTotalDebtUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'collateralAsset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'debtAsset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'debtToCover',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'liquidatedCollateralAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'liquidator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'receiveAToken',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'LiquidationCall',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'onBehalfOf',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'referralCode',
        internalType: 'uint16',
        type: 'uint16',
        indexed: true,
      },
    ],
    name: 'MintUnbacked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountMinted',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MintedToTreasury',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'RebalanceStableBorrowRate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'repayer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'useATokens',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'Repay',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'liquidityRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'stableBorrowRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'variableBorrowRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'liquidityIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'variableBorrowIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReserveDataUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ReserveUsedAsCollateralDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ReserveUsedAsCollateralEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'onBehalfOf',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'referralCode',
        internalType: 'uint16',
        type: 'uint16',
        indexed: true,
      },
    ],
    name: 'Supply',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'interestRateMode',
        internalType: 'enum DataTypes.InterestRateMode',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'SwapBorrowRateMode',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'categoryId',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'UserEModeSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ADDRESSES_PROVIDER',
    outputs: [
      {
        name: '',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'BRIDGE_PROTOCOL_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'FLASHLOAN_PREMIUM_TOTAL',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'FLASHLOAN_PREMIUM_TO_PROTOCOL',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_NUMBER_RESERVES',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_STABLE_RATE_BORROW_SIZE_PERCENT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'POOL_REVISION',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'fee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'backUnbacked',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateMode', internalType: 'uint256', type: 'uint256' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
    ],
    name: 'borrow',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint8', type: 'uint8' },
      {
        name: 'category',
        internalType: 'struct DataTypes.EModeCategory',
        type: 'tuple',
        components: [
          { name: 'ltv', internalType: 'uint16', type: 'uint16' },
          {
            name: 'liquidationThreshold',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'liquidationBonus', internalType: 'uint16', type: 'uint16' },
          { name: 'priceSource', internalType: 'address', type: 'address' },
          { name: 'label', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'configureEModeCategory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'deposit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'dropReserve',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'balanceFromBefore', internalType: 'uint256', type: 'uint256' },
      { name: 'balanceToBefore', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'finalizeTransfer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiverAddress', internalType: 'address', type: 'address' },
      { name: 'assets', internalType: 'address[]', type: 'address[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'interestRateModes',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'flashLoan',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiverAddress', internalType: 'address', type: 'address' },
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'flashLoanSimple',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'getConfiguration',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.ReserveConfigurationMap',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint8', type: 'uint8' }],
    name: 'getEModeCategoryData',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.EModeCategory',
        type: 'tuple',
        components: [
          { name: 'ltv', internalType: 'uint16', type: 'uint16' },
          {
            name: 'liquidationThreshold',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'liquidationBonus', internalType: 'uint16', type: 'uint16' },
          { name: 'priceSource', internalType: 'address', type: 'address' },
          { name: 'label', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint16', type: 'uint16' }],
    name: 'getReserveAddressById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'getReserveData',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.ReserveData',
        type: 'tuple',
        components: [
          {
            name: 'configuration',
            internalType: 'struct DataTypes.ReserveConfigurationMap',
            type: 'tuple',
            components: [
              { name: 'data', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'liquidityIndex', internalType: 'uint128', type: 'uint128' },
          {
            name: 'currentLiquidityRate',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'variableBorrowIndex',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'currentVariableBorrowRate',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'currentStableBorrowRate',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'lastUpdateTimestamp',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'id', internalType: 'uint16', type: 'uint16' },
          { name: 'aTokenAddress', internalType: 'address', type: 'address' },
          {
            name: 'stableDebtTokenAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'variableDebtTokenAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'interestRateStrategyAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'accruedToTreasury',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'unbacked', internalType: 'uint128', type: 'uint128' },
          {
            name: 'isolationModeTotalDebt',
            internalType: 'uint128',
            type: 'uint128',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'getReserveNormalizedIncome',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'getReserveNormalizedVariableDebt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getReservesList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserAccountData',
    outputs: [
      { name: 'totalCollateralBase', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDebtBase', internalType: 'uint256', type: 'uint256' },
      {
        name: 'availableBorrowsBase',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'currentLiquidationThreshold',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'ltv', internalType: 'uint256', type: 'uint256' },
      { name: 'healthFactor', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserConfiguration',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.UserConfigurationMap',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserEMode',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'aTokenAddress', internalType: 'address', type: 'address' },
      { name: 'stableDebtAddress', internalType: 'address', type: 'address' },
      { name: 'variableDebtAddress', internalType: 'address', type: 'address' },
      {
        name: 'interestRateStrategyAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'initReserve',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'provider',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'collateralAsset', internalType: 'address', type: 'address' },
      { name: 'debtAsset', internalType: 'address', type: 'address' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'debtToCover', internalType: 'uint256', type: 'uint256' },
      { name: 'receiveAToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'liquidationCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'address[]', type: 'address[]' }],
    name: 'mintToTreasury',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'mintUnbacked',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'rebalanceStableBorrowRate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateMode', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
    ],
    name: 'repay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateMode', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'repayWithATokens',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRateMode', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'permitV', internalType: 'uint8', type: 'uint8' },
      { name: 'permitR', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permitS', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'repayWithPermit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rescueTokens',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'asset', internalType: 'address', type: 'address' }],
    name: 'resetIsolationModeTotalDebt',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      {
        name: 'configuration',
        internalType: 'struct DataTypes.ReserveConfigurationMap',
        type: 'tuple',
        components: [
          { name: 'data', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'setConfiguration',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'rateStrategyAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setReserveInterestRateStrategyAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'categoryId', internalType: 'uint8', type: 'uint8' }],
    name: 'setUserEMode',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'useAsCollateral', internalType: 'bool', type: 'bool' },
    ],
    name: 'setUserUseReserveAsCollateral',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'supply',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'onBehalfOf', internalType: 'address', type: 'address' },
      { name: 'referralCode', internalType: 'uint16', type: 'uint16' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'permitV', internalType: 'uint8', type: 'uint8' },
      { name: 'permitR', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permitS', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'supplyWithPermit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'interestRateMode', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapBorrowRateMode',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'protocolFee', internalType: 'uint256', type: 'uint256' }],
    name: 'updateBridgeProtocolFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'flashLoanPremiumTotal',
        internalType: 'uint128',
        type: 'uint128',
      },
      {
        name: 'flashLoanPremiumToProtocol',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
    name: 'updateFlashloanPremiums',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'asset', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ui-pool-data-provider
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uiPoolDataProviderAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_networkBaseTokenPriceInUsdProxyAggregator',
        internalType: 'contract IEACAggregatorProxy',
        type: 'address',
      },
      {
        name: '_marketReferenceCurrencyPriceInUsdProxyAggregator',
        internalType: 'contract IEACAggregatorProxy',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'ETH_CURRENCY_UNIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MKR_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: '_bytes32', internalType: 'bytes32', type: 'bytes32' }],
    name: 'bytes32ToString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'provider',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
    ],
    name: 'getReservesData',
    outputs: [
      {
        name: '',
        internalType: 'struct IUiPoolDataProviderV3.AggregatedReserveData[]',
        type: 'tuple[]',
        components: [
          { name: 'underlyingAsset', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'decimals', internalType: 'uint256', type: 'uint256' },
          {
            name: 'baseLTVasCollateral',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'reserveLiquidationThreshold',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'reserveLiquidationBonus',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'reserveFactor', internalType: 'uint256', type: 'uint256' },
          {
            name: 'usageAsCollateralEnabled',
            internalType: 'bool',
            type: 'bool',
          },
          { name: 'borrowingEnabled', internalType: 'bool', type: 'bool' },
          {
            name: 'stableBorrowRateEnabled',
            internalType: 'bool',
            type: 'bool',
          },
          { name: 'isActive', internalType: 'bool', type: 'bool' },
          { name: 'isFrozen', internalType: 'bool', type: 'bool' },
          { name: 'liquidityIndex', internalType: 'uint128', type: 'uint128' },
          {
            name: 'variableBorrowIndex',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'liquidityRate', internalType: 'uint128', type: 'uint128' },
          {
            name: 'variableBorrowRate',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'stableBorrowRate',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'lastUpdateTimestamp',
            internalType: 'uint40',
            type: 'uint40',
          },
          { name: 'aTokenAddress', internalType: 'address', type: 'address' },
          {
            name: 'stableDebtTokenAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'variableDebtTokenAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'interestRateStrategyAddress',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'availableLiquidity',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'totalPrincipalStableDebt',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'averageStableRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stableDebtLastUpdateTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'totalScaledVariableDebt',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'priceInMarketReferenceCurrency',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'priceOracle', internalType: 'address', type: 'address' },
          {
            name: 'variableRateSlope1',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'variableRateSlope2',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stableRateSlope1',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stableRateSlope2',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'baseStableBorrowRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'baseVariableBorrowRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'optimalUsageRatio',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'isPaused', internalType: 'bool', type: 'bool' },
          { name: 'isSiloedBorrowing', internalType: 'bool', type: 'bool' },
          {
            name: 'accruedToTreasury',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'unbacked', internalType: 'uint128', type: 'uint128' },
          {
            name: 'isolationModeTotalDebt',
            internalType: 'uint128',
            type: 'uint128',
          },
          { name: 'flashLoanEnabled', internalType: 'bool', type: 'bool' },
          { name: 'debtCeiling', internalType: 'uint256', type: 'uint256' },
          {
            name: 'debtCeilingDecimals',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'eModeCategoryId', internalType: 'uint8', type: 'uint8' },
          { name: 'borrowCap', internalType: 'uint256', type: 'uint256' },
          { name: 'supplyCap', internalType: 'uint256', type: 'uint256' },
          { name: 'eModeLtv', internalType: 'uint16', type: 'uint16' },
          {
            name: 'eModeLiquidationThreshold',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'eModeLiquidationBonus',
            internalType: 'uint16',
            type: 'uint16',
          },
          {
            name: 'eModePriceSource',
            internalType: 'address',
            type: 'address',
          },
          { name: 'eModeLabel', internalType: 'string', type: 'string' },
          { name: 'borrowableInIsolation', internalType: 'bool', type: 'bool' },
        ],
      },
      {
        name: '',
        internalType: 'struct IUiPoolDataProviderV3.BaseCurrencyInfo',
        type: 'tuple',
        components: [
          {
            name: 'marketReferenceCurrencyUnit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'marketReferenceCurrencyPriceInUsd',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'networkBaseTokenPriceInUsd',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'networkBaseTokenPriceDecimals',
            internalType: 'uint8',
            type: 'uint8',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'provider',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
    ],
    name: 'getReservesList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'provider',
        internalType: 'contract IPoolAddressesProvider',
        type: 'address',
      },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'getUserReservesData',
    outputs: [
      {
        name: '',
        internalType: 'struct IUiPoolDataProviderV3.UserReserveData[]',
        type: 'tuple[]',
        components: [
          { name: 'underlyingAsset', internalType: 'address', type: 'address' },
          {
            name: 'scaledATokenBalance',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'usageAsCollateralEnabledOnUser',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'stableBorrowRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'scaledVariableDebt',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'principalStableDebt',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stableBorrowLastUpdateTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
      { name: '', internalType: 'uint8', type: 'uint8' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'marketReferenceCurrencyPriceInUsdProxyAggregator',
    outputs: [
      {
        name: '',
        internalType: 'contract IEACAggregatorProxy',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'networkBaseTokenPriceInUsdProxyAggregator',
    outputs: [
      {
        name: '',
        internalType: 'contract IEACAggregatorProxy',
        type: 'address',
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useReadPool = /*#__PURE__*/ createUseReadContract({ abi: poolAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"ADDRESSES_PROVIDER"`
 */
export const useReadPoolAddressesProvider = /*#__PURE__*/ createUseReadContract(
  { abi: poolAbi, functionName: 'ADDRESSES_PROVIDER' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"BRIDGE_PROTOCOL_FEE"`
 */
export const useReadPoolBridgeProtocolFee = /*#__PURE__*/ createUseReadContract(
  { abi: poolAbi, functionName: 'BRIDGE_PROTOCOL_FEE' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"FLASHLOAN_PREMIUM_TOTAL"`
 */
export const useReadPoolFlashloanPremiumTotal =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'FLASHLOAN_PREMIUM_TOTAL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"FLASHLOAN_PREMIUM_TO_PROTOCOL"`
 */
export const useReadPoolFlashloanPremiumToProtocol =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'FLASHLOAN_PREMIUM_TO_PROTOCOL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"MAX_NUMBER_RESERVES"`
 */
export const useReadPoolMaxNumberReserves = /*#__PURE__*/ createUseReadContract(
  { abi: poolAbi, functionName: 'MAX_NUMBER_RESERVES' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"MAX_STABLE_RATE_BORROW_SIZE_PERCENT"`
 */
export const useReadPoolMaxStableRateBorrowSizePercent =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'MAX_STABLE_RATE_BORROW_SIZE_PERCENT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"POOL_REVISION"`
 */
export const useReadPoolPoolRevision = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'POOL_REVISION',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getConfiguration"`
 */
export const useReadPoolGetConfiguration = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getConfiguration',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getEModeCategoryData"`
 */
export const useReadPoolGetEModeCategoryData =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getEModeCategoryData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getReserveAddressById"`
 */
export const useReadPoolGetReserveAddressById =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getReserveAddressById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getReserveData"`
 */
export const useReadPoolGetReserveData = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getReserveData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getReserveNormalizedIncome"`
 */
export const useReadPoolGetReserveNormalizedIncome =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getReserveNormalizedIncome',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getReserveNormalizedVariableDebt"`
 */
export const useReadPoolGetReserveNormalizedVariableDebt =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getReserveNormalizedVariableDebt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getReservesList"`
 */
export const useReadPoolGetReservesList = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getReservesList',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getUserAccountData"`
 */
export const useReadPoolGetUserAccountData =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getUserAccountData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getUserConfiguration"`
 */
export const useReadPoolGetUserConfiguration =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'getUserConfiguration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getUserEMode"`
 */
export const useReadPoolGetUserEMode = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getUserEMode',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useWritePool = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"backUnbacked"`
 */
export const useWritePoolBackUnbacked = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'backUnbacked',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"borrow"`
 */
export const useWritePoolBorrow = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'borrow',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"configureEModeCategory"`
 */
export const useWritePoolConfigureEModeCategory =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'configureEModeCategory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"deposit"`
 */
export const useWritePoolDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"dropReserve"`
 */
export const useWritePoolDropReserve = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'dropReserve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"finalizeTransfer"`
 */
export const useWritePoolFinalizeTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'finalizeTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"flashLoan"`
 */
export const useWritePoolFlashLoan = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'flashLoan',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"flashLoanSimple"`
 */
export const useWritePoolFlashLoanSimple = /*#__PURE__*/ createUseWriteContract(
  { abi: poolAbi, functionName: 'flashLoanSimple' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initReserve"`
 */
export const useWritePoolInitReserve = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'initReserve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePoolInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"liquidationCall"`
 */
export const useWritePoolLiquidationCall = /*#__PURE__*/ createUseWriteContract(
  { abi: poolAbi, functionName: 'liquidationCall' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mintToTreasury"`
 */
export const useWritePoolMintToTreasury = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'mintToTreasury',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mintUnbacked"`
 */
export const useWritePoolMintUnbacked = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'mintUnbacked',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"rebalanceStableBorrowRate"`
 */
export const useWritePoolRebalanceStableBorrowRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'rebalanceStableBorrowRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repay"`
 */
export const useWritePoolRepay = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'repay',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repayWithATokens"`
 */
export const useWritePoolRepayWithATokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'repayWithATokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repayWithPermit"`
 */
export const useWritePoolRepayWithPermit = /*#__PURE__*/ createUseWriteContract(
  { abi: poolAbi, functionName: 'repayWithPermit' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"rescueTokens"`
 */
export const useWritePoolRescueTokens = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'rescueTokens',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"resetIsolationModeTotalDebt"`
 */
export const useWritePoolResetIsolationModeTotalDebt =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'resetIsolationModeTotalDebt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setConfiguration"`
 */
export const useWritePoolSetConfiguration =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'setConfiguration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setReserveInterestRateStrategyAddress"`
 */
export const useWritePoolSetReserveInterestRateStrategyAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'setReserveInterestRateStrategyAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setUserEMode"`
 */
export const useWritePoolSetUserEMode = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'setUserEMode',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setUserUseReserveAsCollateral"`
 */
export const useWritePoolSetUserUseReserveAsCollateral =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'setUserUseReserveAsCollateral',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"supply"`
 */
export const useWritePoolSupply = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'supply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"supplyWithPermit"`
 */
export const useWritePoolSupplyWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'supplyWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swapBorrowRateMode"`
 */
export const useWritePoolSwapBorrowRateMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'swapBorrowRateMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"updateBridgeProtocolFee"`
 */
export const useWritePoolUpdateBridgeProtocolFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'updateBridgeProtocolFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"updateFlashloanPremiums"`
 */
export const useWritePoolUpdateFlashloanPremiums =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolAbi,
    functionName: 'updateFlashloanPremiums',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWritePoolWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useSimulatePool = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"backUnbacked"`
 */
export const useSimulatePoolBackUnbacked =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'backUnbacked',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"borrow"`
 */
export const useSimulatePoolBorrow = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'borrow',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"configureEModeCategory"`
 */
export const useSimulatePoolConfigureEModeCategory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'configureEModeCategory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulatePoolDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"dropReserve"`
 */
export const useSimulatePoolDropReserve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'dropReserve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"finalizeTransfer"`
 */
export const useSimulatePoolFinalizeTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'finalizeTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"flashLoan"`
 */
export const useSimulatePoolFlashLoan = /*#__PURE__*/ createUseSimulateContract(
  { abi: poolAbi, functionName: 'flashLoan' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"flashLoanSimple"`
 */
export const useSimulatePoolFlashLoanSimple =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'flashLoanSimple',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initReserve"`
 */
export const useSimulatePoolInitReserve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'initReserve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"liquidationCall"`
 */
export const useSimulatePoolLiquidationCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'liquidationCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mintToTreasury"`
 */
export const useSimulatePoolMintToTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'mintToTreasury',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mintUnbacked"`
 */
export const useSimulatePoolMintUnbacked =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'mintUnbacked',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"rebalanceStableBorrowRate"`
 */
export const useSimulatePoolRebalanceStableBorrowRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'rebalanceStableBorrowRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repay"`
 */
export const useSimulatePoolRepay = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'repay',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repayWithATokens"`
 */
export const useSimulatePoolRepayWithATokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'repayWithATokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"repayWithPermit"`
 */
export const useSimulatePoolRepayWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'repayWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"rescueTokens"`
 */
export const useSimulatePoolRescueTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'rescueTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"resetIsolationModeTotalDebt"`
 */
export const useSimulatePoolResetIsolationModeTotalDebt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'resetIsolationModeTotalDebt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setConfiguration"`
 */
export const useSimulatePoolSetConfiguration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'setConfiguration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setReserveInterestRateStrategyAddress"`
 */
export const useSimulatePoolSetReserveInterestRateStrategyAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'setReserveInterestRateStrategyAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setUserEMode"`
 */
export const useSimulatePoolSetUserEMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'setUserEMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"setUserUseReserveAsCollateral"`
 */
export const useSimulatePoolSetUserUseReserveAsCollateral =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'setUserUseReserveAsCollateral',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"supply"`
 */
export const useSimulatePoolSupply = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'supply',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"supplyWithPermit"`
 */
export const useSimulatePoolSupplyWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'supplyWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swapBorrowRateMode"`
 */
export const useSimulatePoolSwapBorrowRateMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'swapBorrowRateMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"updateBridgeProtocolFee"`
 */
export const useSimulatePoolUpdateBridgeProtocolFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'updateBridgeProtocolFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"updateFlashloanPremiums"`
 */
export const useSimulatePoolUpdateFlashloanPremiums =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'updateFlashloanPremiums',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulatePoolWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__
 */
export const useWatchPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"BackUnbacked"`
 */
export const useWatchPoolBackUnbackedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'BackUnbacked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Borrow"`
 */
export const useWatchPoolBorrowEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Borrow',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"FlashLoan"`
 */
export const useWatchPoolFlashLoanEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'FlashLoan',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"IsolationModeTotalDebtUpdated"`
 */
export const useWatchPoolIsolationModeTotalDebtUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'IsolationModeTotalDebtUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"LiquidationCall"`
 */
export const useWatchPoolLiquidationCallEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'LiquidationCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"MintUnbacked"`
 */
export const useWatchPoolMintUnbackedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'MintUnbacked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"MintedToTreasury"`
 */
export const useWatchPoolMintedToTreasuryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'MintedToTreasury',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"RebalanceStableBorrowRate"`
 */
export const useWatchPoolRebalanceStableBorrowRateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'RebalanceStableBorrowRate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Repay"`
 */
export const useWatchPoolRepayEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: poolAbi, eventName: 'Repay' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"ReserveDataUpdated"`
 */
export const useWatchPoolReserveDataUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'ReserveDataUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"ReserveUsedAsCollateralDisabled"`
 */
export const useWatchPoolReserveUsedAsCollateralDisabledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'ReserveUsedAsCollateralDisabled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"ReserveUsedAsCollateralEnabled"`
 */
export const useWatchPoolReserveUsedAsCollateralEnabledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'ReserveUsedAsCollateralEnabled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Supply"`
 */
export const useWatchPoolSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Supply',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"SwapBorrowRateMode"`
 */
export const useWatchPoolSwapBorrowRateModeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'SwapBorrowRateMode',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"UserEModeSet"`
 */
export const useWatchPoolUserEModeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'UserEModeSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchPoolWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__
 */
export const useReadUiPoolDataProvider = /*#__PURE__*/ createUseReadContract({
  abi: uiPoolDataProviderAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"ETH_CURRENCY_UNIT"`
 */
export const useReadUiPoolDataProviderEthCurrencyUnit =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'ETH_CURRENCY_UNIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"MKR_ADDRESS"`
 */
export const useReadUiPoolDataProviderMkrAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'MKR_ADDRESS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"bytes32ToString"`
 */
export const useReadUiPoolDataProviderBytes32ToString =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'bytes32ToString',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"getReservesData"`
 */
export const useReadUiPoolDataProviderGetReservesData =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'getReservesData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"getReservesList"`
 */
export const useReadUiPoolDataProviderGetReservesList =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'getReservesList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"getUserReservesData"`
 */
export const useReadUiPoolDataProviderGetUserReservesData =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'getUserReservesData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"marketReferenceCurrencyPriceInUsdProxyAggregator"`
 */
export const useReadUiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'marketReferenceCurrencyPriceInUsdProxyAggregator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uiPoolDataProviderAbi}__ and `functionName` set to `"networkBaseTokenPriceInUsdProxyAggregator"`
 */
export const useReadUiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator =
  /*#__PURE__*/ createUseReadContract({
    abi: uiPoolDataProviderAbi,
    functionName: 'networkBaseTokenPriceInUsdProxyAggregator',
  })
