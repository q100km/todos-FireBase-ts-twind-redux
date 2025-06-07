import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoCreatorPlaceholder } from '../../utils/todoCreatorPlaceholder'
import type { ITodoPlaceholder } from '../../Components/TodoJSONPlaceholder/TypesPlaceholder'

export const fetchJSONPlaceholderTodos = createAsyncThunk<ITodoPlaceholder[]>(
  'JSONPlaceholderSlice/JSONPlaceholderSlice',
  async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const JSONPlaceholderTodos: Omit<ITodoPlaceholder, 'isFavorite'>[] = await response.json()
      return todoCreatorPlaceholder(JSONPlaceholderTodos)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
)
