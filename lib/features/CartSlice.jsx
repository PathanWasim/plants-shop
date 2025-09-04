import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const existingItem = state.items.find((item) => item.id === plant.id)

      if (!existingItem) {
        state.items.push({
          ...plant,
          quantity: 1,
        })
        state.totalItems += 1
        state.totalCost += plant.price
      }
    },
    removeItem: (state, action) => {
      const plantId = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === plantId)

      if (itemIndex !== -1) {
        const item = state.items[itemIndex]
        state.totalItems -= item.quantity
        state.totalCost -= item.price * item.quantity
        state.items.splice(itemIndex, 1)
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item && quantity > 0) {
        const quantityDiff = quantity - item.quantity
        state.totalItems += quantityDiff
        state.totalCost += item.price * quantityDiff
        item.quantity = quantity
      }
    },
    deleteItem: (state, action) => {
      const { productId } = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === productId)

      if (itemIndex !== -1) {
        const item = state.items[itemIndex]
        state.totalItems -= item.quantity
        state.totalCost -= item.price * item.quantity
        state.items.splice(itemIndex, 1)
      }
    },
    increaseItem: (state, action) => {
      const { productId } = action.payload
      const item = state.items.find((item) => item.id === productId)

      if (item) {
        item.quantity += 1
        state.totalItems += 1
        state.totalCost += item.price
      }
    },
    decreaseItem: (state, action) => {
      const { productId } = action.payload
      const item = state.items.find((item) => item.id === productId)

      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalItems -= 1
        state.totalCost -= item.price
      }
    },
  },
})

export const selectCartLines = (state) => state.cart.items
export const selectTotalItems = (state) => state.cart.totalItems
export const selectTotalCost = (state) => state.cart.totalCost

export const selectIsInCart = (productId) => (state) => state.cart.items.some((item) => item.id === productId)

export const { addItem, removeItem, updateQuantity, deleteItem, increaseItem, decreaseItem } = cartSlice.actions
export default cartSlice.reducer
