import { useEffect, useState } from 'react'
import TodoFireBase from '../Todo/TodoFireBase'
import {
  fireBaseTodosSelector,
  filterByTitleFirebaseSelector,
  onlyCompletedFirebaseSelector,
  onlyFavoriteFirebaseSelector,
  sortByNameSelector,
} from '../../../Redux/Slices/FireBaseSlice'
import { fetchFireBaseTodos } from '../../../Redux/thunkActions/FireBaseAsyncActions'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'
import type { ITodoFireBase } from '../TypesFireBase'

const ListFireBase = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const fireBaseTodos = useAppSelector(fireBaseTodosSelector)
  const onlyFavorite = useAppSelector(onlyFavoriteFirebaseSelector)
  const onlyCompleted = useAppSelector(onlyCompletedFirebaseSelector)
  const filterByTitle = useAppSelector(filterByTitleFirebaseSelector)
  const sortByName = useAppSelector(sortByNameSelector)

  useEffect(() => {
    dispatch(fetchFireBaseTodos()).finally(() => setLoading(false))
  }, [dispatch])

  const todosArray = Object.entries(fireBaseTodos).map(([id, todo]) => ({
    id,
    ...todo,
  }))

  const filteredFireBaseTodos = todosArray
    .filter((todo: ITodoFireBase) => {
      const titleFilter = todo.title?.toLowerCase().includes(filterByTitle.toLowerCase())
      const favoriteFilter = onlyFavorite ? todo.isFavorite : true
      const completedFilter = onlyCompleted ? todo.completed : true

      return titleFilter && favoriteFilter && completedFilter
    })
    .sort((a, b) => {
      if (sortByName) {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

  return (
    <>
      {loading ? (
        <span>Загрузка Todo из Firebase...</span>
      ) : (
        filteredFireBaseTodos.map((todo) => <TodoFireBase key={todo.id} todo={todo} />)
      )}
    </>
  )
}

export default ListFireBase
