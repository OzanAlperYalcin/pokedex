import { Navigate } from "react-router-dom"

function Error({ error }) {
    return <Navigate to="/" state={'Pokemon Bulunamadı.'} />
}

export default Error