import { useQuery } from "@tanstack/react-query"

import { getAppUsers } from "../../app/get-app-users"

export const useGetAppUsers = <QueryKey>(queryKey: QueryKey) => {
  return useQuery({
    queryKey: ["appUsers", queryKey],
    queryFn: () => getAppUsers(),
    gcTime: 0,
  })
}
