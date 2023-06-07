import { FaTimes } from 'react-icons/fa'

function Alert({ isAlert, value }) {

    return (
            <div className={`absolute top-5 ${isAlert ? 'left-5' : '-left-[250px]'} transition-all duration-500`}>
            <div className='bg-white p-2 shadow-xl rounded-xl font-light text-sm'>
                <div className='flex items-center gap-1.5'>
                    <FaTimes className='bg-red-500 text-white rounded-full p-0.5 animate-showup' size={18} />
                    <p>{value}</p>
                </div>
            </div>
        </div>
    )
}

export default Alert