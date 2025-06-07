import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full'>
      <Header />
      {/*Мейн*/}
      <main className='bg-gray-200 text-center min-h-screen w-full p-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
