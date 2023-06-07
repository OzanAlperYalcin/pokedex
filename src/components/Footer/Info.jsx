import { FaHeart } from 'react-icons/fa'

function Info() {
  return (
    <div className='flex text-black'>
      <div className='flex items-center gap-1 bg-zinc-50 py-0.5 px-2 rounded-lg'>
        <p>Made with</p>
        <FaHeart className='text-red-500' />
      </div>
    </div>
  )
}

export default Info