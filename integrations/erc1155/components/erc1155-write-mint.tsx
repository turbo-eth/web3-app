import { useForm } from "react-hook-form"
import { useDebounce } from "usehooks-ts"
import { type Address, type BaseError } from "viem"
import { useWaitForTransactionReceipt } from "wagmi"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ContractWriteButton } from "@/components/blockchain/contract-write-button"
import { TransactionStatus } from "@/components/blockchain/transaction-status"

import {
  useSimulateErc1155Mint,
  useWriteErc1155Mint,
} from "../generated/erc1155-wagmi"

interface Erc1155WriteMintProps {
  address: Address
}

interface FormSchema {
  toAddress: Address
  tokenId: string
  tokenAmount: string
  uri: string
}

export function Erc1155WriteMint({ address }: Erc1155WriteMintProps) {
  const { register, watch, handleSubmit } = useForm<FormSchema>()

  const watchToAddress = watch("toAddress")
  const watchTokenId = watch("tokenId")
  const watchTokenAmount = watch("tokenAmount")
  const watchUri = watch("uri")
  const debouncedToAddress = useDebounce(watchToAddress, 500)
  const debouncedTokenId = useDebounce(watchTokenId, 500)
  const debouncedTokenAmount = useDebounce(watchTokenAmount, 500)
  const debouncedUri = useDebounce(watchUri, 500)

  const {
    data: config,
    error,
    isError,
  } = useSimulateErc1155Mint({
    address,
    args:
      debouncedToAddress &&
      debouncedTokenId &&
      debouncedTokenAmount &&
      debouncedUri
        ? [
            debouncedToAddress,
            BigInt(debouncedTokenId || 0),
            BigInt(debouncedTokenAmount),
            debouncedUri,
          ]
        : undefined,
    query: {
      enabled: Boolean(
        debouncedToAddress &&
          debouncedTokenId &&
          debouncedTokenAmount &&
          debouncedUri
      ),
    },
  })

  const {
    data,
    writeContract,
    isPending: isLoadingWrite,
  } = useWriteErc1155Mint()

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
          <input {...register("tokenId")} className="input" type="number" />
          <label>Token Amount</label>
          <input {...register("tokenAmount")} className="input" />
          <label>Uri</label>
          <input
            {...register("uri")}
            className="input"
            placeholder="ipfs://ipfs/<CID>"
          />
          <ContractWriteButton
            isLoadingTx={isLoadingTx}
            isLoadingWrite={isLoadingWrite}
            loadingTxText="Minting..."
            type="submit"
            write={!!writeContract}
          >
            Mint
          </ContractWriteButton>
          <TransactionStatus
            error={error as BaseError}
            hash={data}
            isError={
              isError && Boolean(debouncedTokenId && debouncedTokenAmount)
            }
            isLoadingTx={isLoadingTx}
            isSuccess={isSuccess}
          />
        </form>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="justify-between">
        <h3 className="text-center">ERC1155 Mint</h3>
        <p className="text-center text-sm text-gray-500">
          Mint NFT/SFT to any address
        </p>
      </CardFooter>
    </Card>
  )
}
