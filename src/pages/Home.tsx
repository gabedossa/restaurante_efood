import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RestaurantCard } from '../components/home/RestaurantCard'
import { Container } from '../components/ui/Container'
import { restaurants } from '../data/restaurants'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-bg-light py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

