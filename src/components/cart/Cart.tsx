import { useCart } from '../../hooks/useCart'
import { CartItem } from './CartItem'
import { Button } from '../ui/Button'

export function Cart() {
  const { items, isOpen, closeCart, totalPrice, setStep } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-40"
        onClick={closeCart}
      />

      <aside className="fixed top-0 right-0 h-full w-full max-w-[360px] bg-primary z-50 flex flex-col shadow-2xl p-4 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-bg-peach">Carrinho</h2>
          <button
            onClick={closeCart}
            className="text-bg-peach text-sm font-bold hover:opacity-85 transition-opacity cursor-pointer"
          >
            Fechar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mb-4">
          {items.length === 0 ? (
            <p className="p-4 text-bg-peach text-sm text-center">
              O carrinho está vazio. Adicione itens para continuar.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <CartItem key={item.dish.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-4 border-t border-primary-dark/30">
            <div className="flex justify-between text-bg-peach font-bold mb-4 text-sm">
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <Button
              variant="secondary"
              fullWidth
              className="py-2.5 text-xs font-bold"
              onClick={() => setStep('delivery')}
            >
              Continuar com a entrega
            </Button>
          </div>
        )}
      </aside>
    </>
  )
}

