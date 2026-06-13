import { useForm } from '../../hooks/useForm'
import type { DeliveryInfo } from '../../types'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

const INITIAL: DeliveryInfo = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: '',
}

export function DeliveryForm() {
  const { setStep } = useCart()
  const { values, handleChange } = useForm<DeliveryInfo>(INITIAL)
  const inputClass =
    'rounded-none bg-bg-peach px-3 py-2 text-sm text-primary font-bold outline-none border-none placeholder-primary/50'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStep('payment')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="mb-2">
        <h2 className="text-bg-peach font-black text-base">Endereço de entrega</h2>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-bg-peach text-xs font-bold">Quem irá receber</span>
        <input
          name="receiver"
          value={values.receiver}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Nome do destinatário"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-bg-peach text-xs font-bold">Endereço</span>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Rua, Avenida, Logradouro"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-bg-peach text-xs font-bold">Cidade</span>
        <input
          name="city"
          value={values.city}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Cidade"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">CEP</span>
          <input
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="00000-000"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-bg-peach text-xs font-bold">Número</span>
          <input
            name="number"
            value={values.number}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Nº"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-bg-peach text-xs font-bold">Complemento (opcional)</span>
        <input
          name="complement"
          value={values.complement}
          onChange={handleChange}
          className={inputClass}
          placeholder="Apto, bloco, referência"
        />
      </label>

      <div className="flex flex-col gap-2 mt-4">
        <Button
          type="submit"
          variant="secondary"
          fullWidth
          className="py-2.5 text-xs"
        >
          Continuar com o pagamento
        </Button>
        <Button
          type="button"
          variant="secondary"
          fullWidth
          className="py-2.5 text-xs bg-bg-peach/80 text-primary border-none"
          onClick={() => setStep('cart')}
        >
          Voltar para o carrinho
        </Button>
      </div>
    </form>
  )
}

