import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { productsMap } from "@/data/products"

export type CartState = {
  items: Record<string, number> // productId -> quantity
}

const initialState: CartState = { items: {} }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId
      state.items[id] = (state.items[id] ?? 0) + 1
    },
    increaseItem: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId
      state.items[id] = (state.items[id] ?? 0) + 1
    },
    decreaseItem: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId
      const qty = state.items[id] ?? 0
      if (qty <= 1) delete state.items[id]
      else state.items[id] = qty - 1
    },
    deleteItem: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId
      delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addItem, increaseItem, decreaseItem, deleteItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

// Minimal RootState type so selectors can be used in components
type RootState = { cart: CartState }

export const selectTotalItems = (state: RootState) => Object.values(state.cart.items).reduce((sum, n) => sum + n, 0)

export const selectIsInCart = (productId: string) => (state: RootState) => (state.cart.items[productId] ?? 0) > 0

export const selectTotalCost = (state: RootState) => {
  let total = 0
  for (const [id, qty] of Object.entries(state.cart.items)) {
    const p = productsMap[id]
    if (p) total += p.price * qty
  }
  return total
}

export type CartLine = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

export const selectCartLines = (state: RootState): CartLine[] => {
  const lines: CartLine[] = []
  for (const [id, qty] of Object.entries(state.cart.items)) {
    const p = productsMap[id]
    if (!p) continue
    lines.push({
      id,
      name: p.name,
      price: p.price,
      image: p.image,
      category: p.category,
      quantity: qty,
    })
  }
  return lines
}
