import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'
import {
  setSortByName,
  setOnlyFavorite,
  filterByTitleSelector,
  setFilterByTitle,
} from '../../../Redux/Slices/JSONPlaceholderSlice'

const FilterPlaceholder = () => {
  //
  const dispatch = useAppDispatch()
  const filterByTitle = useAppSelector(filterByTitleSelector)

  return (
    <div className='flex items-center justify-center gap-10 mb-3'>
      <label>
        Найти туду
        <input
          value={filterByTitle}
          onChange={(e) => dispatch(setFilterByTitle(e.target.value))}
          placeholder='введите название...'
          type='text'
          className='border py-3 px-5 cursor-pointer border-black/20  rounded-2xl'
        />
      </label>
      <div onClick={() => dispatch(setSortByName())} className='hover:underline cursor-pointer'>
        sort by name
      </div>
      <div onClick={() => dispatch(setOnlyFavorite())} className='hover:underline cursor-pointer'>
        only favorite
      </div>
    </div>
  )
}

export default FilterPlaceholder
