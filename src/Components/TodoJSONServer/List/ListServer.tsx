import { useEffect, useState } from 'react'
import TodoServer from '../Todo/TodoServer'
import {
  JSONServerTodosSelector,
  filterByTitleServerSelector,
  onlyCompletedServerSelector,
  onlyFavoriteServerSelector,
  sortByNameServerSelector,
} from '../../../Redux/Slices/JSONServerSlice'
import { fetchJSONServerTodos } from '../../../Redux/thunkActions/ServerAsyncActions'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'
import type { ITodoServer } from '../TypesServer'

const ListServer = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const JSONServerTodos = useAppSelector(JSONServerTodosSelector)
  const onlyFavorite = useAppSelector(onlyFavoriteServerSelector)
  const filterByTitle = useAppSelector(filterByTitleServerSelector)
  const onlyCompleted = useAppSelector(onlyCompletedServerSelector)
  const sortByName = useAppSelector(sortByNameServerSelector)

  useEffect(() => {
    dispatch(fetchJSONServerTodos()).finally(() => setLoading(false))
  }, [dispatch])

  const filteredServerTodos = JSONServerTodos.filter((todo: ITodoServer) => {
    //
    const titleFilter = todo.title.toLowerCase().includes(filterByTitle.toLowerCase())
    const onlyFavoriteFilter = onlyFavorite ? todo.isFavorite : true
    const onlyCompletedFilter = onlyCompleted ? todo.completed : true

    return titleFilter && onlyFavoriteFilter && onlyCompletedFilter
  }).sort((a, b) => {
    if (sortByName) {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  return (
    <>
      {loading ? (
        <span>Загрузка Todo с сервера...</span>
      ) : (
        filteredServerTodos.map((todo: ITodoServer) => <TodoServer key={todo.id} todo={todo} />)
      )}
    </>
  )
}

export default ListServer
