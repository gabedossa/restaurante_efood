import { useEffect } from 'react'
import type { Dish } from '../../types'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish | null
  onClose: () => void
}

export function DishModal({ dish, onClose }: Props) {
  const { addItem, openCart } = useCart()

  useEffect(() => {
    if (!dish) return
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [dish, onClose])

  if (!dish) return null

  function handleAdd() {
    if (!dish) return
    addItem(dish)
    onClose()
    openCart()
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-primary rounded-none max-w-3xl w-full p-8 flex flex-col sm:flex-row gap-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white hover:opacity-80 transition-opacity text-2xl cursor-pointer"
          aria-label="Fechar"
        >
          ×
        </button>
        <img
          src={dish.photo}
          alt={dish.name}
          className="w-full h-56 sm:w-64 sm:h-64 object-cover shrink-0"
        />
        <div className="flex flex-col gap-4 flex-1 text-bg-peach">
          <h2 className="text-white font-black text-xl pr-6">{dish.name}</h2>
          <p className="text-sm leading-relaxed text-white/95 flex-1">{dish.description}</p>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <span>{dish.serve}</span>
          </div>
          <Button
            variant="secondary"
            className="self-start mt-2 px-5 py-2 text-xs"
            onClick={handleAdd}
          >
            Adicionar ao carrinho - R$ {dish.price.toFixed(2).replace('.', ',')}
          </Button>
        </div>
      </div>
    </div>
  )
}

