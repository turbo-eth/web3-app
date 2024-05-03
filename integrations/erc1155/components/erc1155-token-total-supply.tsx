import { useReadErc1155TotalSupply } from "../generated/erc1155-wagmi"
import { ERC1155Props } from "../utils/types"

interface ERC1155TotalSupplyProps extends ERC1155Props {
  tokenId: bigint
}

export function ERC1155TokenTotalSupply({
  address,
  chainId,
  className,
  tokenId,
  ...props
}: ERC1155TotalSupplyProps) {
  const { data } = useReadErc1155TotalSupply({
    address,
    chainId,
    args: [tokenId],
  })

  return (
    <span className={className} {...props}>
      {data?.toString()}
    </span>
  )
}
