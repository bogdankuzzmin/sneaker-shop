import { configureStore } from '@reduxjs/toolkit';
import { sneakersApi } from '@api/sneakersApi';
import authReducer from '@store/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [sneakersApi.reducerPath]: sneakersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sneakersApi.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
