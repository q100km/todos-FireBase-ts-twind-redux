import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  fetchJSONServerTodos,
  addTodoToServer,
  delTodoServer,
  newTodoTitleServer,
  addFavoriteServer,
  todoCompletedServer,
} from '../thunkActions/ServerAsyncActions'
import type { ITodoServer } from '../../Components/TodoJSONServer/TypesServer'
import type { RootState } from '../Store'

// сервер
// json-server --watch src/Data/dbJsonServer.json --port 3005

interface JSONServerState {
  JSONServerTodos: ITodoServer[]
  onlyFavorite: boolean
  onlyCompleted: boolean
  sortByName: boolean
  filterByTitle: string
}

const initialState: JSONServerState = {
  JSONServerTodos: [],
  onlyFavorite: false,
  onlyCompleted: false,
  sortByName: false,
  filterByTitle: '',
}

const JSONServerSlice = createSlice({
  name: 'JSONServerSlice',
  initialState,
  reducers: {
    sortByNameServer: (state: JSONServerState) => {
      state.sortByName = !state.sortByName
    },
    setOnlyFavoriteServer: (state: JSONServerState) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    setFilterByTitleServer: (state: JSONServerState, action: PayloadAction<string>) => {
      state.filterByTitle = action.payload
    },
    setOnlyCompletedServer: (state: JSONServerState) => {
      state.onlyCompleted = !state.onlyCompleted
    },
  },
  //
  extraReducers: (builder) => {
    builder.addCase(
      fetchJSONServerTodos.fulfilled,
      (state, action: PayloadAction<ITodoServer[]>) => {
        state.JSONServerTodos = action.payload
      }
    )

    builder.addCase(addTodoToServer.fulfilled, (state, action: PayloadAction<ITodoServer>) => {
      state.JSONServerTodos.push(action.payload)
    })

    builder.addCase(delTodoServer.fulfilled, (state, action: PayloadAction<ITodoServer['id']>) => {
      state.JSONServerTodos = state.JSONServerTodos.filter((todo) => todo.id !== action.payload)
    })

    builder.addCase(newTodoTitleServer.fulfilled, (state, action: PayloadAction<ITodoServer>) => {
      state.JSONServerTodos = state.JSONServerTodos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    })

    builder.addCase(addFavoriteServer.fulfilled, (state, action: PayloadAction<ITodoServer>) => {
      state.JSONServerTodos = state.JSONServerTodos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    })

    builder.addCase(todoCompletedServer.fulfilled, (state, action: PayloadAction<ITodoServer>) => {
      state.JSONServerTodos = state.JSONServerTodos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    })
    //
  },
})

export const {
  sortByNameServer,
  setOnlyFavoriteServer,
  setFilterByTitleServer,
  setOnlyCompletedServer,
} = JSONServerSlice.actions

export const JSONServerTodosSelector = (store: RootState): ITodoServer[] =>
  store.JSONServer.JSONServerTodos
export const onlyFavoriteServerSelector = (store: RootState): boolean =>
  store.JSONServer.onlyFavorite
export const onlyCompletedServerSelector = (store: RootState): boolean =>
  store.JSONServer.onlyCompleted
export const filterByTitleServerSelector = (store: RootState): string =>
  store.JSONServer.filterByTitle
export const sortByNameServerSelector = (store: RootState): boolean => store.JSONServer.sortByName

export default JSONServerSlice.reducer
