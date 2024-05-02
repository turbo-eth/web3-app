"use client"

import { ReactNode } from "react"
import { useAccountEffect } from "wagmi"

import { useUser } from "@/lib/hooks/use-user"
import { siweLogout } from "@/integrations/siwe/actions/siwe-logout"

interface HandleWalletEventsProps {
  children: ReactNode
}

export const HandleWalletEvents = ({ children }: HandleWalletEventsProps) => {
  const { mutateUser } = useUser()
  useAccountEffect({
    async onDisconnect() {
      await siweLogout()
      await mutateUser()
    },
  })
  return <>{children}</>
}

export default HandleWalletEvents
