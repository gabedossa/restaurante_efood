import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

export function Confirmation() {
  const { confirmation, closeCart, clearCart } = useCart()

  if (!confirmation) return null

  function handleClose() {
    clearCart()
    closeCart()
  }

  return (
    <div className="flex flex-col gap-4 text-bg-peach">
      <div>
        <h2 className="text-bg-peach font-black text-base mb-2">
          Pedido realizado — #{confirmation.orderId}
        </h2>
      </div>
      <p className="text-xs leading-relaxed text-bg-peach/90">
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p className="text-xs leading-relaxed text-bg-peach/90">
        Gostaríamos de ressaltar que nossos entregadores não são autorizados a realizar cobranças extras.
      </p>
      <p className="text-xs leading-relaxed text-bg-peach/90">
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p className="text-xs leading-relaxed text-bg-peach/90">
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </p>
      <Button
        variant="secondary"
        fullWidth
        className="mt-4 py-2.5 text-xs"
        onClick={handleClose}
      >
        Concluir
      </Button>
    </div>
  )
}

