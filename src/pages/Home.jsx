import Loading from '../components/Loading'
import Error from '../components/Error'
import Alert from '../components/Alert'
import DataList from '../components/DataList'
import Pagination from '../components/Pagination'
import { useEffect, useState } from 'react'
import { usePokemonContext } from '../context/PokemonContext'
import useFetch from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function Home() {

  const [alert, setAlert] = useState(false)
  const { data, page } = usePokemonContext()
  const { fetchData, loading, error } = useFetch()
  const location = useLocation()

  useEffect(() => {
    fetchData(location.search)
    if (location.state) {
      setAlert(true)
      const sto = setTimeout(() => {
        setAlert(false)
      }, 2500)
      return () => {
        clearTimeout(sto)
      }
    }
  }, [location])
  
  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Alert isAlert={alert} value={location.state} />
      <section className='container m-auto'>
        <DataList data={data} />
        <Pagination page={page} />
      </section>
    </>
  )
}

export default Home