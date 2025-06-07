import { useState, type FC } from 'react'
import {
  delTodoPlaceholder,
  addFavoritePlaceholder,
} from '../../../Redux/Slices/JSONPlaceholderSlice'
import { isFavoriteStyle } from '../../../utils/isFavoriteStyle'
import { isChekedStyle } from '../../../utils/isChekedStyle'
import type { ITodoPlaceholder } from '../TypesPlaceholder'
import { useAppDispatch } from '../../../Redux/ReduxHooks'

type TodoPlaceholderProps = {
  todo: ITodoPlaceholder
}

const TodoPlaceholder: FC<TodoPlaceholderProps> = ({ todo }) => {
  const [cheked, setChecked] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  //
  return (
    <div
      className='flex items-center justify-center gap-10 
    '
    >
      <div className={isChekedStyle(cheked)}>
        <p className='text-xl overflow-hidden'>{todo.title}</p>
        <input
          className='scale-200'
          type='checkbox'
          checked={cheked}
          onChange={() => setChecked(!cheked)}
        />
      </div>
      <button
        onClick={() => dispatch(delTodoPlaceholder(todo.id))}
        className='shadow rounded-2xl p-3 cursor-pointer'
      >
        delete todo
      </button>
      <button
        onClick={() => dispatch(addFavoritePlaceholder(todo.id))}
        className={isFavoriteStyle(todo)}
      >
        add to fav
      </button>
    </div>
  )
}

export default TodoPlaceholder
