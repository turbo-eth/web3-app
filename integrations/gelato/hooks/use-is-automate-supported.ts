import { isAutomateSupported } from "@gelatonetwork/automate-sdk"
import { useAccount } from "wagmi"

export const useIsAutomateSupported = () => {
  const { chain } = useAccount()

  return chain?.id ? isAutomateSupported(chain.id) : false
}
