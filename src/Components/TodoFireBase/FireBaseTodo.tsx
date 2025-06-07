import FormFireBase from './Form/FormFireBase'
import FilterFireBase from './Filter/FilterFireBase'
import ListFireBase from './List/ListFireBase'

const FireBaseTodo = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Todo-Firebase</h1>

      <FormFireBase />
      <FilterFireBase />
      <ListFireBase />
    </div>
  )
}

export default FireBaseTodo
