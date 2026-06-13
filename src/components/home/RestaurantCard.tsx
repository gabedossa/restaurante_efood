import { useNavigate } from 'react-router-dom'
import type { Restaurant } from '../../types'
import { StarRating } from '../ui/StarRating'
import { Button } from '../ui/Button'

interface Props {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: Props) {
  const navigate = useNavigate()

  return (
    <article className="bg-white border border-primary/30 flex flex-col">
      <div className="relative">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-54.25 object-cover"
        />
        <div className="absolute top-0 right-0 flex flex-wrap justify-end gap-1">
          {restaurant.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-primary text-bg-peach text-xs px-3 py-1 font-bold"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-lg text-primary leading-tight">
            {restaurant.name}
          </h2>
          <StarRating value={restaurant.rating} />
        </div>

        <p className="text-sm text-primary/80 leading-relaxed flex-1 line-clamp-4">
          {restaurant.description}
        </p>

        <Button
          variant="outline"
          onClick={() => navigate(`/restaurante/${restaurant.id}`)}
          className="self-start text-xs py-1.5 px-3 mt-1"
        >
          Saiba mais
        </Button>
      </div>
    </article>
  )
}
