import { useReadErc1155AccountsByToken } from "../generated/erc1155-wagmi"
import { ERC1155Props } from "../utils/types"

interface ERC1155OwnerOfProps extends ERC1155Props {
  tokenId: bigint
}

export function Erc1155OwnerOf({
  address,
  chainId,
  className,
  tokenId,
  ...props
}: ERC1155OwnerOfProps) {
  const { data } = useReadErc1155AccountsByToken({
    address,
    chainId,
    args: [tokenId],
  })

  return (
    <span className={className} {...props}>
      {data && JSON.stringify(data)}
    </span>
  )
}
