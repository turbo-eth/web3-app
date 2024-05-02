import { useQuery } from "@tanstack/react-query"

import { appEtherscanAccountTransactions } from "@/integrations/etherscan/actions/etherscan-account-transactions/client"

export const useEtherscanAccountTransactions = (
  params?: BlockPagination,
  queryKey?: any
) => {
  return useQuery({
    queryKey: ["accountTransactions", params, queryKey],
    queryFn: () => appEtherscanAccountTransactions(params),
    gcTime: 0,
  })
}
