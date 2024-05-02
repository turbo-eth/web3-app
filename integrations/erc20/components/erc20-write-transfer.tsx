import { useForm } from "react-hook-form"
import { useDebounce } from "usehooks-ts"
import { parseEther, type Address, type BaseError } from "viem"
import { useWaitForTransactionReceipt } from "wagmi"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ContractWriteButton } from "@/components/blockchain/contract-write-button"
import { TransactionStatus } from "@/components/blockchain/transaction-status"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"

import {
  useSimulateErc20Transfer,
  useWriteErc20Transfer,
} from "../generated/erc20-wagmi"
import ERC20EventTransfer from "./erc20-event-transfer"

interface ERC20WriteTransferProps {
  address: Address
}

export function ERC20ContractTransferTokens({
  address,
}: ERC20WriteTransferProps) {
  const { register, watch, handleSubmit } = useForm()

  const watchAmount: string = watch("amount")
  const watchTo = watch("to")
  const debouncedAmount = useDebounce(watchAmount, 500)
  const debouncedTo = useDebounce(watchTo, 500)

  const isValidAmount = Boolean(
    debouncedAmount && !isNaN(Number(debouncedAmount))
  )

  const {
    data: config,
    error,
    isError,
  } = useSimulateErc20Transfer({
    address,
    args:
      debouncedTo && isValidAmount
        ? [debouncedTo, parseEther(`${Number(debouncedAmount)}`)]
        : undefined,
    query: {
      enabled: Boolean(debouncedTo && isValidAmount),
    },
  })

  const {
    data,
    writeContract,
    isPending: isLoadingWrite,
  } = useWriteErc20Transfer()

  const { isLoading: isLoadingTx, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  })

  const onSubmit = () => {
    writeContract?.(config!.request)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label>Amount</label>
      <input placeholder="10" {...register("amount")} className="input" />
      <label>To</label>
      <input placeholder="kames.eth" {...register("to")} className="input" />
      <ContractWriteButton
        isLoadingTx={isLoadingTx}
        isLoadingWrite={isLoadingWrite}
        loadingTxText="Transferring..."
        type="submit"
        write={!!writeContract}
      >
        Transfer
      </ContractWriteButton>
      <TransactionStatus
        error={error as BaseError}
        hash={data}
        isError={isError}
        isLoadingTx={isLoadingTx}
        isSuccess={isSuccess}
      />
    </form>
  )
}

export function ERC20WriteTransfer({ address }: ERC20WriteTransferProps) {
  return (
    <>
      <IsWalletConnected>
        <Card>
          <CardContent>
            <ERC20ContractTransferTokens address={address} />
            <ERC20EventTransfer />
          </CardContent>
          <Separator className="my-4" />
          <CardFooter className="justify-between">
            <h3 className="text-center">ERC20 Transfer</h3>
            <p className="text-center text-sm text-muted-foreground">
              Transer tokens to a friend... or enemy.
            </p>
          </CardFooter>
        </Card>
      </IsWalletConnected>
      <IsWalletDisconnected>
        <div className="flex items-center justify-center gap-10">
          <WalletConnect />
        </div>
      </IsWalletDisconnected>
    </>
  )
}
