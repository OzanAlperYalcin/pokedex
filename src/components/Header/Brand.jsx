import { Link } from "react-router-dom"

function Brand() {
    return (
        <Link to='/'>
            <img src={import.meta.env.VITE_BASE_LOGO} className='h-12' />
        </Link>
    )
}

export default Brand