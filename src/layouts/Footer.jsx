import Info from '../components/Footer/Info'
import Copyright from '../components/Footer/Copyright'
import Social from '../components/Footer/Social'

function Footer() {
    return (
        <div className='mt-auto'>
            <div className='h-12 lg:h-10 bg-red-500'>
                <div className='h-full grid grid-cols-3 justify-between items-center px-5 text-xs text-white font-semibold'>
                    <Info />
                    <Copyright />
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Footer