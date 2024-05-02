import { defineConfig } from "@wagmi/cli"
import { react } from "@wagmi/cli/plugins"
import { erc20Abi } from "viem"

export default defineConfig({
  out: "lib/generated/blockchain.ts",
  contracts: [
    {
      name: "erc20",
      abi: erc20Abi,
    },
  ],
  plugins: [react()],
})
