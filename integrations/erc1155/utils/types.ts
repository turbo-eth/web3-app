import { HTMLAttributes } from "react"
import type { Address } from "viem"

export interface ERC1155Props extends HTMLAttributes<HTMLElement> {
  address?: Address
  chainId?: number
}
