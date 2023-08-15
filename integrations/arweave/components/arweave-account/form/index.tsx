import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { arweaveAccountFormControls } from './controls'
import { useArweaveAccountForm } from './hook'
import { useArweaveWallet } from '../../../hooks/use-arweave-wallet'
import { getComponent } from '../../../utils/get-element-component'
import { ConnectArweaveWallet } from '../../connect-arweave-wallet'
import { Spinner } from '../../spinner'
import { TxStatus } from '../../tx-status'

// This wrapper exists so the form renders only if we're done getting account
export const ArweaveAccount = () => {
  const { wallet, address, isAccountLoading } = useArweaveWallet()
  if (!wallet || !address) return <ConnectArweaveWallet />
  if (isAccountLoading) return <Spinner />
  return <ArweaveAccountForm />
}

const ArweaveAccountForm = () => {
  const { userHasAccount, getAccount } = useArweaveWallet()
  const { onSubmit, form, isLoading, isError, isSuccess, error, data, estimation } = useArweaveAccountForm()
  const { handleSubmit, register } = form
  return (
    <>
      <div className="card w-full text-left">
        <h3 className="mb-4">{userHasAccount ? 'Edit your Profile' : 'Create your Arweave account'}</h3>
        <Form {...form}>
          <form className="flex w-full flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {arweaveAccountFormControls.map((item) => {
              const Component = getComponent(item.component)
              return (
                <FormField
                  key={item?.label}
                  control={form.control}
                  name={item?.formfieldName as 'handleName'}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item?.label}</FormLabel>
                      <FormControl className="input">
                        <Component
                          className="dark:border-gray-600 dark:bg-neutral-800 dark:text-gray-400 dark:[color-scheme:dark]"
                          {...field}
                          {...register(item?.formfieldName as 'handleName')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            })}
            <div className="flex items-center text-sm">
              <span className="mr-2 text-slate-200">Estimated Tx Fee:</span>
              {estimation.loading ? (
                <Spinner isSmall={true} />
              ) : estimation.error ? (
                <span className="text-red-500">{estimation.error}</span>
              ) : estimation.amount ? (
                <span className="font-mono">
                  {estimation.amount?.ar} AR <span className="text-xs">({estimation.amount?.winston} winston) </span>
                </span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <button className="btn btn-emerald w-full" disabled={isLoading}>
                {isLoading ? 'Loading...' : userHasAccount ? 'Update Arweave account' : 'Create Arweave account'}
              </button>
              {isError && <div className="mt-3 font-medium text-red-500">Error: {error instanceof Error ? error.message : String(error)}</div>}
            </div>
          </form>
        </Form>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <h3 className="text-center">Arweave account</h3>
          <p className="text-center text-sm text-gray-500">Arweave profile is the universal account in arweave ecosystem.</p>
        </div>
      </div>
      {isSuccess && data && <TxStatus txId={data} onConfirmation={getAccount} />}
    </>
  )
}
