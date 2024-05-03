import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { isAddress } from "viem"
import { useAccount } from "wagmi"

import { GELATO_CONSTANTS } from "../utils/constants"
import { ExplorerFetchAbiResponse } from "../utils/types"

const abiFetcher = async ({
  contractAddress,
  chainId,
}: {
  contractAddress: string
  chainId: number
}) => {
  const { explorerApiUrl, explorerApiKey } = GELATO_CONSTANTS.networks[chainId]

  const response = await axios.get<ExplorerFetchAbiResponse>(explorerApiUrl, {
    params: {
      module: "contract",
      action: "getsourcecode",
      address: contractAddress,
      apikey: explorerApiKey,
    },
  })
  JSON.parse(response.data.result[0].ABI) // Make sure abi is valid
  return response.data.result[0].ABI
}

export const useAbi = ({ contractAddress }: { contractAddress: string }) => {
  const { chain } = useAccount()

  return useQuery({
    queryKey: ["gelato-contract-abi", chain?.id, contractAddress],
    queryFn: () => {
      if (!chain?.id || !contractAddress || !isAddress(contractAddress)) {
        throw new Error("Invalid Parameters")
      }

      return abiFetcher({ contractAddress, chainId: chain.id })
    },
    enabled: !!contractAddress,
    retry: 0,
    refetchOnWindowFocus: false,
  })
}
