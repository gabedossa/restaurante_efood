import { useNavigate } from 'react-router-dom'
import type { Restaurant } from '../../types'
import { StarRating } from '../ui/StarRating'
import { Button } from '../ui/Button'

interface Props {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: Props) {
  const navigate = useNavigate()

  // Navega para a página de detalhes do restaurante
  const handleNavigate = () => {
    navigate(`/restaurante/${restaurant.id}`)
  }

  return (
    <article className="flex flex-col overflow-hidden border border-primary/30 bg-white">
      {/* Imagem de capa com tags */}
      <div className="relative w-full overflow-hidden">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="h-64 w-full object-cover"
        />
        
        {/* Tags posicionadas no canto superior direito */}
        <div className="absolute right-0 top-0 flex flex-wrap justify-end gap-1 p-2">
          {restaurant.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-primary px-3 py-1 text-xs font-bold text-bg-peach"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Título e rating */}
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-bold leading-tight text-primary">
            {restaurant.name}
          </h2>
          <StarRating value={restaurant.rating} />
        </div>

        {/* Descrição */}
        <p className="flex-1 text-sm leading-relaxed text-primary/80 line-clamp-4">
          {restaurant.description}
        </p>

        {/* Botão de ação */}
        <Button
          variant="outline"
          onClick={handleNavigate}
          className="self-start px-3 py-1.5 text-xs"
        >
          Saiba mais
        </Button>
      </div>
    </article>
  )
}