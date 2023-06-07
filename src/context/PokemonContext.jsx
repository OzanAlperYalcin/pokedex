import { createContext, useContext, useState } from "react"

const PokemonContext = createContext()
function ContextProvider({ children }) {
    const [data, setData] = useState([])
    const [details, setDetails] = useState({})
    const [page, setPage] = useState({})
    const [query, setQuery] = useState([])

    const values = {
        data,
        setData,
        details,
        setDetails,
        page,
        setPage,
        query,
        setQuery
    }
    return (
        <PokemonContext.Provider value={values} >
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => {
    const context = useContext(PokemonContext)
    return context
}

export default ContextProvider