import type { Restaurant } from '../../types'

interface Props {
  restaurant: Restaurant
}

export function RestaurantHero({ restaurant }: Props) {
  const cuisineTag =
    restaurant.tags.find((t) =>
      ['Italiana', 'Japonesa', 'Francesa', 'Brasileira'].includes(t.name)
    )?.name ?? restaurant.tags[0]?.name

  return (
    <div className="relative h-70 w-full overflow-hidden bg-black">
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-between px-5 py-6 sm:px-8">
        {cuisineTag && (
          <span className="text-white text-base italic font-light">
            {cuisineTag}
          </span>
        )}
        <h1 className="text-white text-[32px] font-black leading-tight">
          {restaurant.name}
        </h1>
      </div>
    </div>
  )
}
