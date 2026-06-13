import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { Logo } from '../ui/Logo'
import { Container } from '../ui/Container'

interface Props {
  showCart?: boolean
}

export function Header({ showCart = false }: Props) {
  const { openCart, totalItems } = useCart()

  if (showCart) {
    return (
      <header className="bg-white border-b border-[#E2C4AB]/40">
        <Container className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-sm font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Restaurantes
          </Link>

          <Link to="/">
            <Logo size="sm" />
          </Link>

          <button
            onClick={openCart}
            className="text-sm font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
          >
            {totalItems} produto{totalItems !== 1 ? 's' : ''} no carrinho
          </button>
        </Container>
      </header>
    )
  }

  return (
    <header className="bg-bg-peach py-10">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Logo size="lg" />
        <h1 className="text-[36px] font-black text-primary leading-tight max-w-140">
          Viva experiências gastronômicas<br />no conforto da sua casa
        </h1>
      </Container>
    </header>
  )
}
