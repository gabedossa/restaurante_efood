import { useCart } from '../../hooks/useCart'
import { Cart } from '../cart/Cart'
import { DeliveryForm } from './DeliveryForm'
import { PaymentForm } from './PaymentForm'
import { Confirmation } from './Confirmation'

export function Checkout() {
  const { isOpen, step } = useCart()

  if (!isOpen) return null

  if (step === 'cart') return <Cart />

  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-40" />
      <aside className="fixed top-0 right-0 h-full w-full max-w-[360px] bg-primary z-50 overflow-y-auto shadow-2xl p-5">
        {step === 'delivery' && <DeliveryForm />}
        {step === 'payment' && <PaymentForm />}
        {step === 'confirmation' && <Confirmation />}
      </aside>
    </>
  )
}

