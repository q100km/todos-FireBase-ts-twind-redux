import { useEffect, useState, type FC } from 'react'
import { todoCompletedServer } from '../../../Redux/thunkActions/ServerAsyncActions'
import { isChekedStyle } from '../../../utils/isChekedStyle'
import { Link } from 'react-router'
import { useAppDispatch } from '../../../Redux/ReduxHooks'
import type { ITodoServer } from '../TypesServer'

type TodoServerProps = {
  todo: ITodoServer
}

const TodoServer: FC<TodoServerProps> = ({ todo }) => {
  const [cheked, setChecked] = useState<TodoServerProps['todo']['completed']>(todo.completed)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (cheked !== todo.completed) {
      dispatch(todoCompletedServer(todo))
    }
  }, [cheked, setChecked, dispatch, todo])

  return (
    <div className='flex items-center justify-center gap-10 relative'>
      <div className={isChekedStyle(cheked)}>
        {/*___*/}

        <Link to={`/jsonserver/${todo.id}`}>
          <div className='max-w-3xl'>
            <p className='text-xl overflow-hidden whitespace-nowrap overflow-ellipsis hover:underline'>
              {todo.title}
            </p>
          </div>
        </Link>

        <input
          className='scale-200'
          type='checkbox'
          checked={cheked}
          onChange={() => setChecked(!cheked)}
        />
      </div>
    </div>
  )
}

export default TodoServer
