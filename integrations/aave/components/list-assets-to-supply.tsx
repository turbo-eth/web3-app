import { AssetToSupplyItem } from './asset-to-supply-item'
import { useAave } from '../hooks/use-aave'

export const ListAssetsToSupply = () => {
  const { reservesData } = useAave()

  return (
    <div className="flex-1 rounded border p-3 dark:border-slate-600">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Asssets to supply</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="mt-7 w-full table-auto border-collapse text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-xs text-slate-500 dark:text-slate-300">Asset</th>
              <th className="px-4 py-2 text-xs text-slate-500 dark:text-slate-300">Wallet balance</th>
              <th className="px-4 py-2 text-xs text-slate-500 dark:text-slate-300">APY</th>
              <th className="px-4 py-2 text-xs text-slate-500 dark:text-slate-300">Can be collateral</th>
            </tr>
          </thead>
          <tbody>
            {reservesData?.[0].map((reserve, index) => {
              return (
                <AssetToSupplyItem
                  key={index}
                  address={reserve.underlyingAsset}
                  canBeCollateral={reserve.usageAsCollateralEnabled}
                  symbol={reserve.symbol}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
