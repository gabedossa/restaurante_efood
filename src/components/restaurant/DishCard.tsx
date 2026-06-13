import type { Dish } from '../../types'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish
  onSelect: (dish: Dish) => void
}

export function DishCard({ dish, onSelect }: Props) {
  return (
    <article className="bg-primary rounded-none p-2 flex flex-col h-full transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={dish.photo}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />
      <div className="pt-3 pb-1 px-1 flex flex-col flex-1 gap-3 text-bg-peach">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-black text-base leading-tight">
            {dish.name}
          </h3>
          <span className="shrink-0 font-bold text-base">
            R$ {dish.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <p className="text-xs leading-relaxed flex-1 line-clamp-4 text-bg-peach/90">
          {dish.description}
        </p>

        <Button
          variant="secondary"
          fullWidth
          className="mt-2 text-xs py-2"
          onClick={() => onSelect(dish)}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </article>
  )
}

