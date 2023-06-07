import Loading from "../components/Loading"
import Error from "../components/Error"
import Image from "../components/Details/Image"
import Details from "../components/Details/Details"
import { useParams, useNavigate } from "react-router-dom"
import { usePokemonContext } from "../context/PokemonContext"
import { useEffect } from 'react'
import useFetch from "../hooks/useFetch"

function Pokemon() {

  const { name } = useParams()
  const navigate = useNavigate()
  const { details } = usePokemonContext()
  const { fetchDetails, loading, error } = useFetch()

  useEffect(() => {
    if (name) {
      fetchDetails(name)
    }
  }, [name])

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <div className="container m-auto p-5">
      <div className="card grid grid-cols-5 relative">
        <Image image={details.image} />
        <Details data={details} />
        <div className="absolute top-5 lg:-top-14 right-5">
          <button 
          className="btn-primary bg-gradient-to-l to-yellow-400 from-red-500 hover:to-yellow-400/70 hover:from-red-500/70"
          onClick={() => navigate(-1)}
          >
            GERİ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pokemon