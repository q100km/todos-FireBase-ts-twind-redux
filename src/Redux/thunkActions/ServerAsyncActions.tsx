import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ITodoServer } from '../../Components/TodoJSONServer/TypesServer'

//            Fetch
export const fetchJSONServerTodos = createAsyncThunk<ITodoServer[]>(
  'JSONServerSlice/fetchJSONServerTodos',
  async () => {
    try {
      const response = await fetch('http://localhost:3005/todosJSONServer')
      const JSONServerTodos = await response.json()
      return JSONServerTodos
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//            ADD
export const addTodoToServer = createAsyncThunk<ITodoServer, ITodoServer>(
  'JSONServer/addTodoToServer',
  async (newTodo, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3005/todosJSONServer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      })
      const updTodo = await response.json()
      return updTodo
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//            DEL
export const delTodoServer = createAsyncThunk<ITodoServer['id'], ITodoServer['id']>(
  'JSONServer/deleteTodoServer',
  async (todoID, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3005/todosJSONServer/${todoID}`, {
        method: 'DELETE',
      })
      return todoID
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//           CHANGE TITLE
export const newTodoTitleServer = createAsyncThunk<
  ITodoServer,
  { id: ITodoServer['id']; newTitle: ITodoServer['title'] }
>('JSONServer/newTodoTitle', async ({ id, newTitle }, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:3005/todosJSONServer/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle }),
    })
    const updatedTodo = await response.json()
    return updatedTodo
  } catch (error) {
    console.error(error)
    throw error
  }
})

//           FAVORITE
export const addFavoriteServer = createAsyncThunk<ITodoServer, ITodoServer>(
  'JSONServer/addFavoriteServer',
  async (todo, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3005/todosJSONServer/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFavorite: !todo.isFavorite }),
      })
      const updatedTodo = await response.json()
      return updatedTodo
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)

//           COMPLETED
export const todoCompletedServer = createAsyncThunk<
  ITodoServer,
  Pick<ITodoServer, 'id' | 'completed'>
>('JSONServer/todoCompletedServer', async (todo, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:3005/todosJSONServer/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
    const updatedTodo = await response.json()
    return updatedTodo
  } catch (error) {
    console.error(error)
    throw error
  }
})
