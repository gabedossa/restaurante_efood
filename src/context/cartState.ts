import { createContext } from 'react'
import type { CartItem, CheckoutStep, Dish, OrderConfirmation } from '../types'

export interface CartContextData {
  items: CartItem[]
  isOpen: boolean
  step: CheckoutStep
  confirmation: OrderConfirmation | null
  totalItems: number
  totalPrice: number
  addItem: (dish: Dish) => void
  removeItem: (dishId: number) => void
  openCart: () => void
  closeCart: () => void
  setStep: (step: CheckoutStep) => void
  setConfirmation: (data: OrderConfirmation) => void
  completeOrder: (data: OrderConfirmation) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextData | null>(null)
