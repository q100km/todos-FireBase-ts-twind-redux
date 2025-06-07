import type { ITodoPlaceholder } from '../Components/TodoJSONPlaceholder/TypesPlaceholder'

export const todoCreatorPlaceholder = (todoArray: ITodoPlaceholder[]): ITodoPlaceholder[] => {
  const newArray = todoArray.map((todo) => {
    return { ...todo, isFavorite: false }
  })
  return newArray
}
