// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Networks
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { http } from "wagmi"
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  gnosis,
  gnosisChiado,
  hardhat,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sepolia,
} from "wagmi/chains"

export const chains = [
  mainnet,
  optimism,
  arbitrum,
  polygon,
  gnosis,
  hardhat,
  base,
  baseSepolia,
  polygonMumbai,
  mainnet,
  sepolia,
  polygonMumbai,
  gnosisChiado,
  optimismSepolia,
  arbitrumSepolia,
] as const

export const transports = {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
  [polygonMumbai.id]: http(),
  [gnosisChiado.id]: http(),
  [hardhat.id]: http(),
  [optimism.id]: http(),
  [arbitrum.id]: http(),
  [polygon.id]: http(),
  [gnosis.id]: http(),
  [base.id]: http(),
} as const
