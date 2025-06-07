import {
  sortByNameServer,
  setOnlyFavoriteServer,
  setFilterByTitleServer,
  filterByTitleServerSelector,
  setOnlyCompletedServer,
} from '../../../Redux/Slices/JSONServerSlice'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'

const FilterServer = () => {
  const filterByTitle = useAppSelector(filterByTitleServerSelector)
  const dispatch = useAppDispatch()

  return (
    <div className='flex items-center justify-center gap-10 mb-3'>
      <label>
        Найти туду
        <input
          value={filterByTitle}
          onChange={(e) => dispatch(setFilterByTitleServer(e.target.value))}
          placeholder='введите название...'
          type='text'
          className='border py-3 px-5 cursor-pointer border-black/20 rounded-2xl'
        />
      </label>

      <div onClick={() => dispatch(sortByNameServer())} className='hover:underline cursor-pointer'>
        sort by name
      </div>

      <div
        onClick={() => dispatch(setOnlyFavoriteServer())}
        className='hover:underline cursor-pointer'
      >
        only favorite
      </div>

      <div
        onClick={() => dispatch(setOnlyCompletedServer())}
        className='hover:underline cursor-pointer'
      >
        only completed
      </div>
    </div>
  )
}

export default FilterServer
