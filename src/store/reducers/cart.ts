import { Restaurant, Pedido } from './../../pages/Home/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  pedido: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pedido>) => {
      const p = state.pedido.find((pe) => pe.id === action.payload.id)
      if (!p) {
        state.pedido.push(action.payload)
      } else {
        alert('Pedido já está no carrinho')
      }
    },
    removeItem: (state: { pedido: any[] }, action: PayloadAction<number>) => {
      state.pedido = state.pedido.filter((p) => p.id !== action.payload)
    },
    open: (state: { isOpen: boolean }) => {
      state.isOpen = true
    },
    close: (state: { isOpen: boolean }) => {
      state.isOpen = false
    }
  }
})

export const { open, close, addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
