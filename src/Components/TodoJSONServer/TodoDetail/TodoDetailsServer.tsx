import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import {
  delTodoServer,
  addFavoriteServer,
  newTodoTitleServer,
  fetchJSONServerTodos,
} from '../../../Redux/thunkActions/ServerAsyncActions'
import { isFavoriteStyle } from '../../../utils/isFavoriteStyle'
import RenameModalServer from '../RenameModalServer'
import { JSONServerTodosSelector } from '../../../Redux/Slices/JSONServerSlice'
import type { ITodoServer } from '../TypesServer'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'

const TodoDetailsServer = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>('')

  const dispatch = useAppDispatch()
  const todosArrayServer = useAppSelector(JSONServerTodosSelector)

  const currentTodo = todosArrayServer.find(
    (todo: ITodoServer) => todo.id?.toString() === params.id
  )

  //
  useEffect(() => {
    if (!todosArrayServer.length) {
      dispatch(fetchJSONServerTodos())
    }
  }, [dispatch, todosArrayServer.length])

  // если Array существует и туду не найден
  useEffect(() => {
    if (todosArrayServer.length && !currentTodo) {
      navigate('/404')
    }
  }, [todosArrayServer.length, currentTodo, navigate])

  const handleRename = (): void => {
    if (newTitle !== '' && params.id) {
      dispatch(newTodoTitleServer({ id: params.id, newTitle }))
      setShowModal(false)
      setNewTitle('')
    }
  }

  const handleDelete = (): void => {
    if (params.id) {
      dispatch(delTodoServer(params.id))
      navigate('/jsonserver')
    }
  }

  console.log(currentTodo, 'cur')

  return (
    <div className='shadow rounded-2xl'>
      {/*back btn*/}
      <div
        className=' px-10 py-1 w-15 mt-3 ml-3 flex items-center justify-center shadow hover:bg-gray-300'
        onClick={() => navigate('/jsonserver')}
      >
        <span className='hover:underline cursor-pointer'>назад</span>
      </div>

      {/*CONTENT*/}
      <div className='h-100 shadow w-ful pt-2 overflow-scroll'>
        <span className='font-bold text-2xl'> taskID - {params.id}</span>
        <p className='text-2xl p-2 '>{currentTodo?.title}</p>
      </div>

      {/*BTN BLOCK*/}
      <div className='w-full flex items-end justify-center gap-10 p-3'>
        <button onClick={() => handleDelete()} className='shadow rounded-2xl p-3 cursor-pointer'>
          delete todo
        </button>
        <button
          onClick={() => currentTodo && dispatch(addFavoriteServer(currentTodo))}
          className={isFavoriteStyle(currentTodo)}
        >
          add to fav
        </button>
        <button
          onClick={() => setShowModal(!showModal)}
          className='shadow rounded-2xl p-3 cursor-pointer'
        >
          rename todo
        </button>
      </div>

      {/* МОДАЛКА */}
      {showModal && (
        <RenameModalServer
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          handleRename={handleRename}
          setShowModal={setShowModal}
        />
      )}
    </div>
  )
}

export default TodoDetailsServer
