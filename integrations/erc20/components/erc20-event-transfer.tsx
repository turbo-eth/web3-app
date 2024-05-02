import { useState } from "react"
import { formatEther, zeroAddress, type Address } from "viem"

import { useWatchErc20TransferEvent } from "../generated/erc20-wagmi"
import { useERC20TokenStorage } from "../hooks/use-erc20-token-storage"

export default function ERC20EventTransfer() {
  const [token] = useERC20TokenStorage()
  const [event, setEvent] = useState<{
    from: Address
    to: Address
    amount: bigint
  }>()

  useWatchErc20TransferEvent({
    address: token,
    onLogs(logs) {
      const { args } = logs[0]
      const { _from, _to, _value } = args
      if (_from !== zeroAddress && _from && _to && _value) {
        setEvent({
          from: _from,
          to: _to,
          amount: _value,
        })
      }
    },
  })

  if (!token || !event) return null

  return (
    <div className="flex flex-col gap-y-1 overflow-auto break-words p-6">
      {!event?.to ? null : (
        <>
          <p>From: {event?.from}</p>
          <p>To: {event?.to}</p>
          <p>Amount: {event?.amount ? formatEther(event?.amount) : "0"}</p>
        </>
      )}
    </div>
  )
}
