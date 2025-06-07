import FilterPlaceholder from './Filter/FilterPlaceholder'
import ListPlaceholder from './List/ListPlaceholder'
import FormPlaceholder from './Form/FormPlaceholder'

const TodoJSONPlaceholder = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Todo-JSON-Placeholder</h1>
      <FormPlaceholder />
      <FilterPlaceholder />
      <ListPlaceholder />
    </div>
  )
}

export default TodoJSONPlaceholder
