import type { PaymentInfo } from '../../types'
import { useCart } from '../../hooks/useCart'
import { useForm } from '../../hooks/useForm'
import { Button } from '../ui/Button'

const INITIAL: PaymentInfo = {
  name: '',
  cardNumber: '',
  cardCode: '',
  expiryMonth: '',
  expiryYear: '',
}

export function PaymentForm() {
  const { setStep, completeOrder, totalPrice } = useCart()
  const { values, handleChange } = useForm<PaymentInfo>(INITIAL)
  const inputClass =
    'rounded-none bg-bg-peach px-3 py-2 text-sm text-primary font-bold outline-none border-none placeholder-primary/50'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const orderId = Math.random().toString(36).slice(2, 10).toUpperCase()
    completeOrder({ orderId, deliveryTime: '20 minutos' })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="mb-2">
        <h2 className="text-bg-peach font-black text-base">
          Pagamento — R$ {totalPrice.toFixed(2).replace('.', ',')}
        </h2>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-bg-peach text-xs font-bold">Nome no cartão</span>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Como impresso no cartão"
        />
      </label>

      <div className="grid grid-cols-3 gap-3">
        <label className="col-span-2 flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">Número do cartão</span>
          <input
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
            required
            maxLength={19}
            className={inputClass}
            placeholder="0000 0000 0000 0000"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">CVV</span>
          <input
            name="cardCode"
            value={values.cardCode}
            onChange={handleChange}
            required
            maxLength={3}
            className={inputClass}
            placeholder="123"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">Mês de vencimento</span>
          <input
            name="expiryMonth"
            value={values.expiryMonth}
            onChange={handleChange}
            required
            maxLength={2}
            className={inputClass}
            placeholder="MM"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">Ano de vencimento</span>
          <input
            name="expiryYear"
            value={values.expiryYear}
            onChange={handleChange}
            required
            maxLength={4}
            className={inputClass}
            placeholder="AAAA"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Button
          type="submit"
          variant="secondary"
          fullWidth
          className="py-2.5 text-xs"
        >
          Finalizar pagamento
        </Button>
        <Button
          type="button"
          variant="secondary"
          fullWidth
          className="py-2.5 text-xs bg-bg-peach/80 text-primary border-none"
          onClick={() => setStep('delivery')}
        >
          Voltar para a entrega
        </Button>
      </div>
    </form>
  )
}

