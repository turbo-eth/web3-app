import { useQuery } from "@tanstack/react-query"

import { appDiscoGetCredentialsFromDID } from "@/integrations/disco/routes/get-credentials-from-did/client"

export const useDiscoGetProfileFromDID = (did?: string, queryKey?: any) => {
  return useQuery({
    queryKey: ["discoProfileFromDID", did, queryKey],
    queryFn: () => appDiscoGetCredentialsFromDID(did),
  })
}
