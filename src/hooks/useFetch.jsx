import { useState } from 'react'
import { usePokemonContext } from '../context/PokemonContext'

function useFetch() {

    const { setData, setPage, setDetails } = usePokemonContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + url)
            const result = await response.json()
            if (response.status === 200) {
                const updateResult = await Promise.all(
                    result.results.map(async (data) => {
                        const response = await fetch(data.url).then(res => res.json())
                        return { ...data, types: response.types, image: response.sprites['front_default'] }
                    })
                )
                setData(updateResult)
                setPage({ prev: result.previous, next: result.next })
            } else {
                throw new Error('Hata Gerçekleşti.')
            }
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const fetchDetails = async (name) => {
        setLoading(true)
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + '/' + name)
            const result = await response.json()
            if (response.status === 200) {
                const data = {
                    name: result.name,
                    image: result.sprites['front_default'],
                    types: result.types,
                    stats: result.stats,
                    skills: result.abilities,
                    physical: {
                        height: result.height,
                        weight: result.weight
                    }
                }
                setDetails(data)
            } else {
                throw new Error({message: 'Pokemon Bulunamadı.'})
            }
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, fetchData, fetchDetails }
}

export default useFetch