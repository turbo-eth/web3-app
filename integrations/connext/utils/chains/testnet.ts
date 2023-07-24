export const testnetChains = [
  {
    id: 'goerli',
    chain_id: 5,
    domain_id: '1735353714',
    name: 'Goerli',
    short_name: 'GOR',
    provider_params: [
      {
        chainId: '0x5',
        chainName: 'Ethereum Goerli',
        rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://ethereum-goerli.publicnode.com	'],
        nativeCurrency: {
          name: 'Ethereum',
          symbol: 'ETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://goerli.etherscan.io'],
      },
    ],
    rpc_urls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://ethereum-goerli.publicnode.com	'],
    explorer: {
      name: 'Etherscan',
      url: 'https://goerli.etherscan.io',
      icon: '/logos/explorers/etherscan.png',
      block_path: '/block/{block}',
      address_path: '/address/{address}',
      contract_path: '/token/{address}',
      contract_0_path: '/address/{address}',
      transaction_path: '/tx/{tx}',
    },
    image: '/integrations/connext/logos/chains/goerli.png',
    color: '#636890',
    unwrapper_contract: '0xa6633d369A9C4C8A442ef104E8e293DA7b352Acd',
    group: 'evm',
    no_pool: true,
  },
  {
    id: 'polygon',
    chain_id: 80001,
    domain_id: '9991',
    name: 'Polygon',
    short_name: 'POLY',
    provider_params: [
      {
        chainId: '0x13881',
        chainName: 'Polygon Mumbai',
        rpcUrls: [
          'https://polygon-mumbai.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          'https://matic-mumbai.chainstacklabs.com',
          'https://rpc.ankr.com/polygon_mumbai',
        ],
        nativeCurrency: {
          name: 'Polygon',
          symbol: 'MATIC',
          decimals: 18,
        },
        blockExplorerUrls: ['https://mumbai.polygonscan.com'],
      },
    ],
    rpc_urls: [
      'https://polygon-mumbai.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc.ankr.com/polygon_mumbai',
    ],
    explorer: {
      name: 'Polygonscan',
      url: 'https://mumbai.polygonscan.com',
      icon: '/logos/explorers/polygonscan.png',
      block_path: '/block/{block}',
      address_path: '/address/{address}',
      contract_path: '/token/{address}',
      contract_0_path: '/address/{address}',
      transaction_path: '/tx/{tx}',
    },
    image: '/integrations/connext/logos/chains/polygon.png',
    color: '#8247e5',
    unwrapper_contract: '0x1e0Db00EB08ceC7FFdA03c0Dbf224193E1563844',
    group: 'evm',
  },
  {
    id: 'optimism',
    chain_id: 420,
    domain_id: '1735356532',
    name: 'Optimism',
    short_name: 'OPT',
    provider_params: [
      {
        chainId: '0x1a4',
        chainName: 'Optimism Goerli',
        rpcUrls: ['https://optimism-goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://rpc.ankr.com/optimism_testnet'],
        nativeCurrency: {
          name: 'Ethereum',
          symbol: 'oETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://goerli-optimism.etherscan.io'],
      },
    ],
    rpc_urls: ['https://optimism-goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://rpc.ankr.com/optimism_testnet'],
    explorer: {
      name: 'Etherscan',
      url: 'https://goerli-optimism.etherscan.io',
      icon: '/logos/explorers/etherscan.png',
      block_path: '/block/{block}',
      address_path: '/address/{address}',
      contract_path: '/token/{address}',
      contract_0_path: '/address/{address}',
      transaction_path: '/tx/{tx}',
    },
    image: '/integrations/connext/logos/chains/optimism.png',
    color: '#dc2626',
    unwrapper_contract: '0x08bDeFD0e4878A814Cb2fd11C033F3947251689f',
    group: 'optimistic_rollups',
  },
  {
    id: 'arbitrum',
    chain_id: 421613,
    domain_id: '1734439522',
    name: 'Arbitrum',
    short_name: 'ARB',
    provider_params: [
      {
        chainId: '0x66eed',
        chainName: 'Arbitrum Goerli',
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
        nativeCurrency: {
          name: 'Ethereum',
          symbol: 'aETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://goerli.arbiscan.io'],
      },
    ],
    rpc_urls: ['https://goerli-rollup.arbitrum.io/rpc'],
    explorer: {
      name: 'Arbiscan',
      url: 'https://goerli.arbiscan.io',
      icon: '/logos/explorers/arbiscan.png',
      block_path: '/block/{block}',
      address_path: '/address/{address}',
      contract_path: '/token/{address}',
      contract_0_path: '/address/{address}',
      transaction_path: '/tx/{tx}',
    },
    image: '/integrations/connext/logos/chains/arbitrum.png',
    color: '#28a0f0',
    unwrapper_contract: '0x18BBF96BC8014aA93cbf1A5Bce005a485b5C2C4a',
    group: 'optimistic_rollups',
  },
]
