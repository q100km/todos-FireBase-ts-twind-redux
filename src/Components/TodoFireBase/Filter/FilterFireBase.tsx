import {
  toggleOnlyFavoriteFirebase,
  toggleOnlyCompletedFirebase,
  filterByTitleFirebaseSelector,
  setFilterByTitle,
  setSortByName,
} from '../../../Redux/Slices/FireBaseSlice'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'

const FilterFirebase = () => {
  const dispatch = useAppDispatch()
  const filterByTitle = useAppSelector(filterByTitleFirebaseSelector)

  return (
    <div className='flex items-center justify-center gap-10 mb-3'>
      <label>
        Найти туду
        <input
          value={filterByTitle}
          onChange={(e) => dispatch(setFilterByTitle(e.target.value))}
          placeholder='введите название...'
          type='text'
          className='border py-3 px-5 cursor-pointer border-black/20 rounded-2xl'
        />
      </label>

      <div onClick={() => dispatch(setSortByName())} className='hover:underline cursor-pointer'>
        sort by name
      </div>

      <div
        onClick={() => dispatch(toggleOnlyFavoriteFirebase())}
        className='hover:underline cursor-pointer'
      >
        only favorite
      </div>

      <div
        onClick={() => dispatch(toggleOnlyCompletedFirebase())}
        className='hover:underline cursor-pointer'
      >
        only completed
      </div>
    </div>
  )
}

export default FilterFirebase
