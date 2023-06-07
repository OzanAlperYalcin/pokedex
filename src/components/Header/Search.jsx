import { usePokemonContext } from "../../context/PokemonContext"
import { useNavigate } from "react-router-dom"

function Search() {
    const { query, setQuery } = usePokemonContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.length > 2) {
            navigate('/pokemon/'+query)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="relative group">
            <input type="text" name="pokemon"
                value={query}
                className="h-10 outline-none pl-2 pr-14 border-2 border-black rounded-xl group-focus-within:border-green-500 transition-all"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pokemon Adı"
            />
            <button type="submit" className="btn-search">
                ARA!
            </button>
        </form>
    )
}

export default Search