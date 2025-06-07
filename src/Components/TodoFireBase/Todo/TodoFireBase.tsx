import { useEffect, useState, type FC } from 'react'
import {
  deleteFireBaseTodo,
  toggleFavoriteFireBase,
  renameFireBaseTodo,
  toggleCompletedFireBase,
} from '../../../Redux/thunkActions/FireBaseAsyncActions'
import { isFavoriteStyle } from '../../../utils/isFavoriteStyle'
import { isChekedStyle } from '../../../utils/isChekedStyle'
import RenameModalFireBase from '../RenameModalFireBase'
import type { ITodoFireBase } from '../TypesFireBase'
import { useAppDispatch } from '../../../Redux/ReduxHooks'

type TodoFireBaseProps = {
  todo: ITodoFireBase & { id: string }
}

const TodoFireBase: FC<TodoFireBaseProps> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const [checked, setChecked] = useState<TodoFireBaseProps['todo']['completed']>(todo.completed)
  const [showModalFireBase, setShowModalFireBase] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>('')

  const handleRenameFireBase = (): void => {
    if (newTitle !== '') {
      dispatch(renameFireBaseTodo({ id: todo.id, newTitle: newTitle }))
      setShowModalFireBase(false)
      setNewTitle('')
    }
  }

  useEffect(() => {
    if (checked !== todo.completed) {
      dispatch(toggleCompletedFireBase({ id: todo.id, completed: checked })) // исправлено
    }
  }, [checked, todo.completed, dispatch, todo.id])

  return (
    <div className='flex items-center justify-center gap-10 relative'>
      <div className={isChekedStyle(checked)}>
        <p className='text-xl overflow-hidden'>{todo.title}</p>
        <input
          className='scale-200'
          type='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>

      <button
        onClick={() => dispatch(deleteFireBaseTodo(todo.id))}
        className='shadow rounded-2xl p-3 cursor-pointer'
      >
        delete todo
      </button>

      <button
        onClick={
          () => dispatch(toggleFavoriteFireBase({ id: todo.id, isFavorite: !todo.isFavorite })) // исправлено
        }
        className={isFavoriteStyle(todo)}
      >
        add to fav
      </button>

      <button
        onClick={() => setShowModalFireBase(true)}
        className='shadow rounded-2xl p-3 cursor-pointer'
      >
        rename todo
      </button>

      {showModalFireBase && (
        <RenameModalFireBase
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          handleRenameFireBase={handleRenameFireBase}
          setShowModalFireBase={setShowModalFireBase}
        />
      )}
    </div>
  )
}

export default TodoFireBase
