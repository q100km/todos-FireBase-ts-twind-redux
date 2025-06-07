import { useState } from 'react'
import { addTodoPlaceholder } from '../../../Redux/Slices/JSONPlaceholderSlice'
import type { ITodoPlaceholder } from '../TypesPlaceholder'
import { useAppDispatch } from '../../../Redux/ReduxHooks'

const FormPlaceholder = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const newTodo: ITodoPlaceholder = {
      title: value,
      id: new Date().getTime(),
      isFavorite: false,
      completed: false,
    }

    dispatch(addTodoPlaceholder(newTodo))
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='p-3'>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type='text'
        placeholder='Добавьте todo...'
        className='border cursor-pointer border-black/20 w-1/3 p-3 rounded-2xl mr-20 '
      />
      <button className='bg-cyan-700/50 py-3 px-15 rounded-2xl cursor-pointer'>add todo</button>
    </form>
  )
}

export default FormPlaceholder
