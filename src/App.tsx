import { Navigate, Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout'
import TodoJSONPlaceholder from './Components/TodoJSONPlaceholder/TodoJSONPlaceholder'
import TodoJSONServer from './Components/TodoJSONServer/TodoJSONServer'
import FireBaseTodo from './Components/TodoFireBase/FireBaseTodo'
import TodoDetailsServer from './Components/TodoJSONServer/TodoDetail/TodoDetailsServer'
import NotFound from './Components/404/NotFound'

function App() {
  //
  return (
    <div className='shadow-2xl w-9/10 min-h-screen mx-auto'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='jsonplaceholder' element={<TodoJSONPlaceholder />} />
          <Route path='jsonserver' element={<TodoJSONServer />}>
            <Route path=':id' element={<TodoDetailsServer />} />
          </Route>
          <Route path='firebase' element={<FireBaseTodo />} />
        </Route>
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  )
}

export default App
