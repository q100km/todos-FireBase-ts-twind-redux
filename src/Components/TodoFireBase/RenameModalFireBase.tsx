import { type FC } from 'react'

type RenameModalFireBaseProps = {
  newTitle: string
  setNewTitle: (val: string) => void
  handleRenameFireBase: () => void
  setShowModalFireBase: (val: boolean) => void
}

const RenameModalFireBase: FC<RenameModalFireBaseProps> = ({
  newTitle,
  setNewTitle,
  handleRenameFireBase,
  setShowModalFireBase,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-2'>
      <div className='w-[300px] h-[110px] bg-white border shadow rounded p-2 flex flex-col gap-2'>
        <input
          type='text'
          value={newTitle}
          placeholder='Введите новое название для todo...'
          onChange={(e) => setNewTitle(e.target.value)}
          className='text-sm border rounded w-full p-1'
          autoFocus
        />
        <button
          onClick={handleRenameFireBase}
          className='text-sm px-2 text-green-600 border cursor-pointer'
        >
          Подтвердить
        </button>
        <button
          onClick={() => setShowModalFireBase(false)}
          className='text-sm text-red-500 border cursor-pointer'
        >
          Отмена
        </button>
      </div>
    </div>
  )
}

export default RenameModalFireBase
