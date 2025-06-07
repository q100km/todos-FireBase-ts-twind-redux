import FormServer from './Form/FormServer'
import FilterServer from './Filter/FilterServer'
import ListServer from './List/ListServer'
import { Outlet, useParams } from 'react-router'

const TodoJSONServer = () => {
  //
  const params = useParams()
  console.log(params.id)
  return (
    <div className='min-h-screen w-full flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Todo-JSON-Server</h1>
      <FormServer />
      <FilterServer />
      {params.id ? <Outlet /> : <ListServer />}
    </div>
  )
}

export default TodoJSONServer
