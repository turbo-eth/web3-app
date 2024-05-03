import { HTMLAttributes } from "react"
import { useAccount, useTransactionCount } from "wagmi"

type WalletNonceProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">

export const WalletNonce = ({ className, ...props }: WalletNonceProps) => {
  const { address } = useAccount()

  const { data: nonce } = useTransactionCount({
    address,
  })

  return (
    <span className={className} {...props}>
      {nonce}
    </span>
  )
}
