// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Networks
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { http } from "wagmi"
import {
  arbitrum,
  arbitrumGoerli,
  base,
  baseGoerli,
  celoAlfajores,
  gnosis,
  gnosisChiado,
  goerli,
  hardhat,
  mainnet,
  optimism,
  optimismGoerli,
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
  goerli,
  hardhat,
  base,
  baseGoerli,
  polygonMumbai,
  mainnet,
  goerli,
  sepolia,
  polygonMumbai,
  gnosisChiado,
  baseGoerli,
  optimismGoerli,
  arbitrumGoerli,
] as const

export const transports = {
  [mainnet.id]: http(),
  [goerli.id]: http(),
  [sepolia.id]: http(),
  [polygonMumbai.id]: http(),
  [gnosisChiado.id]: http(),
  [hardhat.id]: http(),
  [baseGoerli.id]: http(),
  [optimismGoerli.id]: http(),
  [arbitrumGoerli.id]: http(),
  [optimism.id]: http(),
  [arbitrum.id]: http(),
  [polygon.id]: http(),
  [gnosis.id]: http(),
  [base.id]: http(),
} as const
