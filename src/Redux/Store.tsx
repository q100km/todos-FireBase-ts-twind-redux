import { configureStore } from '@reduxjs/toolkit'
import JSONPlaceholderSlice from './Slices/JSONPlaceholderSlice'
import JSONServerSlice from './Slices/JSONServerSlice'
import FireBaseSlice from './Slices/FireBaseSlice'

export const store = configureStore({
  reducer: {
    JSONPlaceholder: JSONPlaceholderSlice,
    JSONServer: JSONServerSlice,
    fireBase: FireBaseSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
