import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../Data/FireBase'
import { ref, push, remove, get, update } from 'firebase/database'
import type { FireBaseTodoObj, ITodoFireBase } from '../../Components/TodoFireBase/TypesFireBase'

// FETCH
export const fetchFireBaseTodos = createAsyncThunk<FireBaseTodoObj>(
  'fireBase/fetchTodos',
  async () => {
    const dbRef = ref(db, 'FireBaseTodos')
    const todosArray = await get(dbRef)
    return todosArray.val() || {}
  }
)

// ADD
export const addFireBaseTodo = createAsyncThunk<{ id: string } & ITodoFireBase, ITodoFireBase>(
  'fireBase/addTodo',
  async (newTodo) => {
    const dbRef = ref(db, 'FireBaseTodos')
    const updRef = await push(dbRef, newTodo)
    return { ...newTodo, id: updRef.key! }
  }
)

// DEL
export const deleteFireBaseTodo = createAsyncThunk<string, string>(
  'fireBase/deleteTodo',
  async (todoId) => {
    const todoRef = ref(db, `FireBaseTodos/${todoId}`)
    await remove(todoRef)
    return todoId
  }
)

// RENAME
type rename = { id: string; newTitle: string }

export const renameFireBaseTodo = createAsyncThunk<{ id: string; title: string }, rename>(
  'fireBase/renameTodo',
  async ({ id, newTitle }) => {
    const todoRef = ref(db, `FireBaseTodos/${id}`)
    await update(todoRef, { title: newTitle })
    return { id: id, title: newTitle }
  }
)

// FAV
type favorite = { id: string; isFavorite: boolean }

export const toggleFavoriteFireBase = createAsyncThunk<favorite, favorite>(
  'fireBase/toggleFavorite',
  async ({ id, isFavorite }) => {
    const todoRef = ref(db, `FireBaseTodos/${id}`)
    await update(todoRef, { isFavorite: isFavorite })
    return { id: id, isFavorite: isFavorite }
  }
)

// COMPLETED
type completed = { id: string; completed: boolean }

export const toggleCompletedFireBase = createAsyncThunk<completed, completed>(
  'fireBase/toggleCompleted',
  async ({ id, completed }) => {
    const todoRef = ref(db, `FireBaseTodos/${id}`)
    await update(todoRef, { completed: completed })
    return { id: id, completed: completed }
  }
)
