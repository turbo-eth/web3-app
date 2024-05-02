"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { Provider as RWBProvider } from "react-wrap-balancer"

import { useIsMounted } from "@/lib/hooks/use-is-mounted"
import HandleWalletEvents from "@/components/blockchain/handle-wallet-events"
import { RainbowKit } from "@/components/providers/rainbow-kit"

interface RootProviderProps {
  children: ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted()
  return isMounted ? (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RWBProvider>
        <RainbowKit>
          <HandleWalletEvents>{children}</HandleWalletEvents>
        </RainbowKit>
      </RWBProvider>
    </ThemeProvider>
  ) : null
}
