import type { CartItem as CartItemType } from '../../types'
import { useCart } from '../../hooks/useCart'

interface Props {
  item: CartItemType
}

export function CartItem({ item }: Props) {
  const { removeItem } = useCart()
  const { dish, quantity } = item

  return (
    <div className="relative flex gap-3 bg-bg-peach p-2 rounded-none">
      <img
        src={dish.photo}
        alt={dish.name}
        className="w-20 h-20 object-cover shrink-0 rounded-none"
      />
      <div className="flex-1 min-w-0 pr-6 text-primary">
        <p className="text-sm font-black truncate">{dish.name}</p>
        <p className="text-xs font-bold mt-2">
          {quantity}x — R$ {(dish.price * quantity).toFixed(2).replace('.', ',')}
        </p>
      </div>
      <button
        onClick={() => removeItem(dish.id)}
        className="absolute bottom-2 right-2 text-primary hover:opacity-80 transition-opacity p-1 cursor-pointer"
        aria-label={`Remover ${dish.name}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
    </div>
  )
}

