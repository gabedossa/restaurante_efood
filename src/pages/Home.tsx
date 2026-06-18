import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RestaurantCard } from '../components/home/RestaurantCard'
import { useRestaurants } from '../hooks/useRestaurants'

export function Home() {
  const { data: restaurants, loading, error } = useRestaurants()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-bg-light py-10 md:py-14">
        <div style={{ margin: '15px 20px' }}>
          {loading && (
            <p className="text-center text-primary">Carregando restaurantes...</p>
          )}
          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}
          {!loading && !error && (
            <div className="mx-auto w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
