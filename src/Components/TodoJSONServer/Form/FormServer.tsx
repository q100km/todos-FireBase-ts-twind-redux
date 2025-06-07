import { useState } from 'react'
import { addTodoToServer } from '../../../Redux/thunkActions/ServerAsyncActions'
import { useAppDispatch } from '../../../Redux/ReduxHooks'

const FormServer = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value !== '') {
      const newTodo = {
        title: value,
        // id: new Date().getTime(),
        isFavorite: false,
        completed: false,
      }

      dispatch(addTodoToServer(newTodo))
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='p-3'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Добавьте todo...'
        className='border cursor-pointer border-black/20 w-1/3 p-3 rounded-2xl mr-20'
      />
      <button className='bg-cyan-700/50 py-3 px-15 rounded-2xl cursor-pointer'>add todo</button>
    </form>
  )
}

export default FormServer
