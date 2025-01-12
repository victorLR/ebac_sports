import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import favoritosReducer from './reducers/favoritos'
import carrinhoReducer from '../store/reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
