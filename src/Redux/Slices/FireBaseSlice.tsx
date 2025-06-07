import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  fetchFireBaseTodos,
  addFireBaseTodo,
  deleteFireBaseTodo,
  renameFireBaseTodo,
  toggleFavoriteFireBase,
  toggleCompletedFireBase,
} from '../../Redux/thunkActions/FireBaseAsyncActions'
import type { FireBaseTodoObj, ITodoFireBase } from '../../Components/TodoFireBase/TypesFireBase'
import type { RootState } from '../Store'

interface FireBaseState {
  fireBaseTodos: FireBaseTodoObj
  onlyFavorite: boolean
  onlyCompleted: boolean
  sortByName: boolean
  filterByTitle: string
}

const initialState: FireBaseState = {
  fireBaseTodos: {}, // { [id]: { title, isFavorite, completed } }
  onlyFavorite: false,
  onlyCompleted: false,
  sortByName: false,
  filterByTitle: '',
}

const FireBaseSlice = createSlice({
  name: 'fireBase',
  initialState,
  reducers: {
    setFilterByTitle(state, action: PayloadAction<string>) {
      state.filterByTitle = action.payload
    },

    setSortByName(state) {
      state.sortByName = !state.sortByName
    },

    toggleOnlyFavoriteFirebase(state) {
      state.onlyFavorite = !state.onlyFavorite
    },

    toggleOnlyCompletedFirebase(state) {
      state.onlyCompleted = !state.onlyCompleted
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFireBaseTodos.fulfilled,
      (state, action: PayloadAction<FireBaseTodoObj>) => {
        state.fireBaseTodos = action.payload
      }
    )

    builder.addCase(
      addFireBaseTodo.fulfilled,
      (state, action: PayloadAction<{ id: string } & ITodoFireBase>) => {
        const { id, ...todo } = action.payload
        state.fireBaseTodos[id] = todo
      }
    )

    builder.addCase(deleteFireBaseTodo.fulfilled, (state, action: PayloadAction<string>) => {
      const id = action.payload
      delete state.fireBaseTodos[id]
    })

    builder.addCase(
      renameFireBaseTodo.fulfilled,
      (state, action: PayloadAction<{ id: string; title: string }>) => {
        const { id, title } = action.payload
        state.fireBaseTodos[id].title = title
      }
    )

    builder.addCase(
      toggleFavoriteFireBase.fulfilled,
      (state, action: PayloadAction<{ id: string; isFavorite: boolean }>) => {
        const { id, isFavorite } = action.payload
        state.fireBaseTodos[id].isFavorite = isFavorite
      }
    )

    builder.addCase(
      toggleCompletedFireBase.fulfilled,
      (state, action: PayloadAction<{ id: string; completed: boolean }>) => {
        const { id, completed } = action.payload
        state.fireBaseTodos[id].completed = completed
      }
    )
  },
})

export const {
  setFilterByTitle,
  setSortByName,
  toggleOnlyFavoriteFirebase,
  toggleOnlyCompletedFirebase,
} = FireBaseSlice.actions

export const fireBaseTodosSelector = (state: RootState) => state.fireBase.fireBaseTodos
export const onlyFavoriteFirebaseSelector = (state: RootState) => state.fireBase.onlyFavorite
export const onlyCompletedFirebaseSelector = (state: RootState) => state.fireBase.onlyCompleted
export const filterByTitleFirebaseSelector = (state: RootState) => state.fireBase.filterByTitle
export const sortByNameSelector = (state: RootState) => state.fireBase.sortByName

export default FireBaseSlice.reducer
