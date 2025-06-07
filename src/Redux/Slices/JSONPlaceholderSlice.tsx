import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchJSONPlaceholderTodos } from '../thunkActions/PlaceholderAsyncActions'
import type { ITodoPlaceholder } from '../../Components/TodoJSONPlaceholder/TypesPlaceholder'
import type { RootState } from '../Store'

interface JSONPlaceholderState {
  JSONPlaceholderTodos: ITodoPlaceholder[]
  onlyFavorite: boolean
  filterByTitle: string
  sortByName: boolean
}

const initialState: JSONPlaceholderState = {
  JSONPlaceholderTodos: [],
  onlyFavorite: false,
  filterByTitle: '',
  sortByName: false,
}

const JSONPlaceholderSlice = createSlice({
  name: 'JSONPlaceholderSlice',
  initialState,
  reducers: {
    addTodoPlaceholder: (state, action: PayloadAction<ITodoPlaceholder>) => {
      state.JSONPlaceholderTodos.push(action.payload)
    },
    delTodoPlaceholder: (state, action: PayloadAction<ITodoPlaceholder['id']>) => {
      state.JSONPlaceholderTodos = state.JSONPlaceholderTodos.filter(
        (todo) => todo.id !== action.payload
      )
    },
    addFavoritePlaceholder: (state, action: PayloadAction<ITodoPlaceholder['id']>) => {
      state.JSONPlaceholderTodos = state.JSONPlaceholderTodos.map((todo) =>
        todo.id === action.payload ? { ...todo, isFavorite: !todo.isFavorite } : todo
      )
    },
    setSortByName: (state) => {
      state.sortByName = !state.sortByName
    },
    setOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    setFilterByTitle: (state, action: PayloadAction<string>) => {
      state.filterByTitle = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchJSONPlaceholderTodos.fulfilled,
      (state, action: PayloadAction<ITodoPlaceholder[]>) => {
        state.JSONPlaceholderTodos = action.payload
      }
    )
  },
})

export const {
  addTodoPlaceholder,
  delTodoPlaceholder,
  addFavoritePlaceholder,
  setSortByName,
  setOnlyFavorite,
  setFilterByTitle,
} = JSONPlaceholderSlice.actions

export const JSONPlaceholderTodosSelector = (store: RootState) =>
  store.JSONPlaceholder.JSONPlaceholderTodos
export const onlyFavoriteSelector = (store: RootState) => store.JSONPlaceholder.onlyFavorite
export const filterByTitleSelector = (store: RootState) => store.JSONPlaceholder.filterByTitle
export const sortByNameSelector = (store: RootState) => store.JSONPlaceholder.sortByName

export default JSONPlaceholderSlice.reducer
