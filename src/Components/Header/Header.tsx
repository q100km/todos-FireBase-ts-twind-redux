import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header className='shadow w-full h-15 p-5 flex items-center justify-between'>
      <div className='bg-cyan-950/80 h-15 w-30 text-white text-3xl flex justify-center items-center ml-7'>
        LOGO
      </div>
      <div className=' w-full h-15 p-8 flex gap-40 items-center justify-end'>
        <NavLink to='firebase' className='shadow-md w-50 text-center p-4 cursor-pointer'>
          FireBase
        </NavLink>
        <NavLink to='jsonserver' className='shadow-md w-50 text-center p-4 cursor-pointer'>
          JSON-Server
        </NavLink>
        <NavLink to='jsonplaceholder' className='shadow-md w-50 text-center p-4 cursor-pointer'>
          JSON-Placeholder
        </NavLink>
      </div>
    </header>
  )
}

export default Header
