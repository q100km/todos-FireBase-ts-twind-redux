import { useState } from 'react'
import { addFireBaseTodo } from '../../../Redux/thunkActions/FireBaseAsyncActions'
import { useAppDispatch } from '../../../Redux/ReduxHooks'

const FormFireBase = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputValue !== '') {
      const newTodo = {
        title: inputValue,
        isFavorite: false,
        completed: false,
      }

      dispatch(addFireBaseTodo(newTodo))
      setInputValue('')
    }
  }

  return (
    <form className='p-3' onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='Добавьте todo...'
        className='border cursor-pointer border-black/20 w-1/3 p-3 rounded-2xl mr-20'
      />
      <button
        type='submit'
        className='bg-cyan-800 py-3 px-15 rounded-2xl cursor-pointer text-white hover:bg-cyan-600 transition-all'
      >
        add todo
      </button>
    </form>
  )
}

export default FormFireBase
