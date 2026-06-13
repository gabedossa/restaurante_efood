import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import type { Dish } from "../types";
import { Header } from "../components/layout/Header";
import { RestaurantHero } from "../components/restaurant/RestaurantHero";
import { Footer } from "../components/layout/Footer";
import { DishCard } from "../components/restaurant/DishCard";
import { DishModal } from "../components/restaurant/DishModal";
import { Container } from "../components/ui/Container";

export function RestaurantProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const restaurant = restaurants.find((r) => r.id === Number(id));

  // Se restaurante não encontrado
  if (!restaurant) {
    return (
      <div style={{ margin: "15px 20px" }}>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-bg-light px-4">
          <p className="text-text-muted">Restaurante não encontrado.</p>
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-primary underline"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen flex flex-col">
      <Header showCart={true} />
      <RestaurantHero restaurant={restaurant} />

      {/* Menu de pratos */}
      <div style={{ margin:'15px 20px'}}>
      <main className="flex-1 bg-bg-light py-8 sm:py-12">
        <Container>
          <div className="mx-auto w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {restaurant.menu.map((dish) => (
              <DishCard key={dish.id} dish={dish} onSelect={setSelectedDish} />
            ))}
          </div>
        </Container>
      </main>
      </div>

      <Footer />

      {/* Modal de detalhes do prato */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
