import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { Logo } from "../ui/Logo";
import { Container } from "../ui/Container";

interface Props {
  showCart?: boolean;
}

export function Header({ showCart = false }: Props) {
  const { openCart, totalItems } = useCart();

  // Header com carrinho (para páginas de restaurante)
  if (showCart) {
    return (
      <header
        style={{ height: "50px", padding: "0 10px" }}
        className="flex items-center border-b border-primary/10 bg-bg-peach py-10"
      >
        <Container className="flex items-center justify-between py-4">
          {/* Link para voltar aos restaurantes */}
          <Link
            to="/"
            className="text-sm font-bold text-primary transition-opacity hover:opacity-80"
          >
            Restaurantes
          </Link>

          {/* Logo no centro */}
          <Link to="/">
            <Logo size="sm" />
          </Link>

          {/* Botão do carrinho */}
          <button
            onClick={openCart}
            className="relative cursor-pointer transition-opacity hover:opacity-80"
            aria-label={`Abrir carrinho com ${totalItems} item(ns)`}
          >
            {/* Ícone do carrinho */}
            <ShoppingCart size={24} className="text-primary" />

            {/* Badge com contagem */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </Container>
      </header>
    );
  }

  // Header principal (home)
  return (
    <header className="bg-bg-peach py-10">
      <Container className="flex flex-col items-center gap-10 text-center">
        {/* Logo */}
        <Logo size="lg" />

        {/* Título principal */}
        <h1 className="max-w-2xl text-4xl font-black leading-tight text-primary">
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </h1>
      </Container>
    </header>
  );
}