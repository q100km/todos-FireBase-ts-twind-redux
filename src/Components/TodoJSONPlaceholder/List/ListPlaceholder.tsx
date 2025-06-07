import { useEffect, useState } from 'react'
import TodoPlaceholder from '../Todo/TodoPlaceholder'
import {
  JSONPlaceholderTodosSelector,
  filterByTitleSelector,
  onlyFavoriteSelector,
  sortByNameSelector,
} from '../../../Redux/Slices/JSONPlaceholderSlice'
import { fetchJSONPlaceholderTodos } from '../../../Redux/thunkActions/PlaceholderAsyncActions'
import type { ITodoPlaceholder } from '../TypesPlaceholder'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'

const ListPlaceholder = () => {
  //
  const [loading, setLoading] = useState<boolean>(true)
  const JSONPlaceholderTodos = useAppSelector(JSONPlaceholderTodosSelector)
  const onlyFavorite = useAppSelector(onlyFavoriteSelector)
  const sortByName = useAppSelector(sortByNameSelector)
  const filterByTitle = useAppSelector(filterByTitleSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchJSONPlaceholderTodos()).finally(() => setLoading(false))
  }, [dispatch])

  const filteredPlaceholderTodos = JSONPlaceholderTodos.filter((todo: ITodoPlaceholder) => {
    const titleFilter = todo.title.toLowerCase().includes(filterByTitle.toLowerCase())
    const onlyFavoriteFilter = onlyFavorite ? todo.isFavorite : true
    return titleFilter && onlyFavoriteFilter
  }).sort((a: ITodoPlaceholder, b: ITodoPlaceholder) => {
    if (sortByName) {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  console.log(JSONPlaceholderTodos)

  if (loading) return <span>Загрузка Todo...</span>

  return (
    <>
      {filteredPlaceholderTodos.map((todo: ITodoPlaceholder) => (
        <TodoPlaceholder key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default ListPlaceholder
