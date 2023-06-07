import Brand from '../components/Header/Brand'
import Search from '../components/Header/Search'

function Header() {

    return (
        <header>
            <div className='h-16 bg-red-500 shadow-lg'>
                <div className='flex justify-around items-center h-full'>
                    <Brand />
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header