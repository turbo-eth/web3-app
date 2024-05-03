import { useQuery } from "@tanstack/react-query"

import { appDiscoGetCredentialsFromDID } from "@/integrations/disco/routes/get-credentials-from-did/client"

export const useDiscoGetCredentialsFromDID = (did?: string, queryKey?: any) => {
  return useQuery({
    queryKey: ["discoCredentialsFromDID", did, queryKey],
    queryFn: () => appDiscoGetCredentialsFromDID(did),
  })
}
