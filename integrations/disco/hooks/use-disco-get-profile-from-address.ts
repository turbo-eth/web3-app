import { useQuery } from "@tanstack/react-query"
import type { Address } from "viem"

import { appDiscoGetProfileFromAddress } from "@/integrations/disco/routes/get-profile-from-address/client"

export const useDiscoGetProfileFromAddress = (
  address?: Address,
  queryKey?: any
) => {
  return useQuery({
    queryKey: ["discoProfileFromAddress", address, queryKey],
    queryFn: () => appDiscoGetProfileFromAddress(address),
  })
}
