import { useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem, CheckoutStep, Dish, OrderConfirmation } from '../types'
import { CartContext } from './cartState'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<CheckoutStep>('cart')
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(null)

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0)
  const totalPrice = items.reduce((acc, i) => acc + i.dish.price * i.quantity, 0)

  function addItem(dish: Dish) {
    setItems((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id)
      if (existing) {
        return prev.map((i) =>
          i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { dish, quantity: 1 }]
    })
  }

  function removeItem(dishId: number) {
    setItems((prev) => prev.filter((i) => i.dish.id !== dishId))
  }

  function clearCart() {
    setItems([])
    setStep('cart')
    setConfirmation(null)
  }

  function completeOrder(data: OrderConfirmation) {
    setItems([])
    setConfirmation(data)
    setStep('confirmation')
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        step,
        confirmation,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        setStep,
        setConfirmation,
        completeOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
