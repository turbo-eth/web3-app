import { useForm } from "react-hook-form"
import { useDebounce } from "usehooks-ts"
import { type Address, type BaseError } from "viem"
import { useWaitForTransactionReceipt } from "wagmi"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ContractWriteButton } from "@/components/blockchain/contract-write-button"
import { TransactionStatus } from "@/components/blockchain/transaction-status"

import {
  useSimulateErc721Approve,
  useWriteErc721Approve,
} from "../generated/erc721-wagmi"

interface Erc721WriteApproveProps {
  address: Address
}

export function Erc721WriteApprove({ address }: Erc721WriteApproveProps) {
  const { register, handleSubmit, watch } = useForm()
  const watchToAddress: Address = watch("toAddress")
  const watchTokenId: string = watch("tokenId")
  const debouncedToAddress = useDebounce(watchToAddress, 500)
  const debouncedTokenId = useDebounce(watchTokenId, 500)

  const {
    data: config,
    error,
    isError,
  } = useSimulateErc721Approve({
    address,
    args:
      debouncedToAddress && debouncedTokenId
        ? [debouncedToAddress, BigInt(debouncedTokenId)]
        : undefined,
    query: {
      enabled: Boolean(debouncedToAddress && debouncedTokenId),
    },
  })

  const {
    data,
    writeContract,
    isPending: isLoadingWrite,
  } = useWriteErc721Approve()

  const { isLoading: isLoadingTx, isSuccess } = useWaitForTransactionReceipt({
    hash: data,
  })

  const onSubmit = () => {
    writeContract?.(config!.request)
  }

  return (
    <Card>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <label>Address</label>
          <input {...register("toAddress")} className="input" />
          <label>Token ID</label>
          <input type="number" {...register("tokenId")} className="input" />
          <ContractWriteButton
            isLoadingTx={isLoadingTx}
            isLoadingWrite={isLoadingWrite}
            loadingTxText="Approving..."
            type="submit"
            write={!!writeContract}
          >
            Approve
          </ContractWriteButton>
          <TransactionStatus
            error={error as BaseError}
            hash={data}
            isError={isError && Boolean(debouncedToAddress && debouncedTokenId)}
            isLoadingTx={isLoadingTx}
            isSuccess={isSuccess}
          />
        </form>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="justify-between">
        <h3 className="text-center">ERC721 Approve</h3>
        <p className="text-center text-sm text-muted-foreground">
          Approve NFTs to any address
        </p>
      </CardFooter>
    </Card>
  )
}
