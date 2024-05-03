import { type Address } from "viem"
import { type SignMessageParameters } from "wagmi/actions"
import { SignMessageMutateAsync } from "wagmi/query"

import { siweMessage } from "./siwe-message"

interface SiweLoginProps {
  address: Address
  chainId: number
  signMessageAsync: SignMessageMutateAsync
}

export const siweLogin = async ({
  address,
  chainId,
  signMessageAsync,
}: SiweLoginProps) => {
  // 1. Create and sign SIWE message
  const { message, signature } = await siweMessage({
    address,
    chainId,
    signMessageAsync,
  })

  // 2. Verify signature
  const verifyRes = await fetch("/api/siwe/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, signature }),
  })

  if (!verifyRes.ok) throw new Error("Error verifying message")
  if (verifyRes.status === 200) {
    dispatchEvent(new Event("verified"))
  }
}
