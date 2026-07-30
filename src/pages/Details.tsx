import { useParams } from "react-router"
import { useSearch } from "../store/useSearch"
import { useEffect } from "react"
import Loading from "../components/Loading"

const Details = () => {
    const params = useParams() //use params.pid
    const {pokemon, isLoading, error, fetchPokemon} = useSearch()
    
    useEffect(() => {
        if (params.pid) fetchPokemon(params.pid)
    }, [params.name, fetchPokemon])

    if (isLoading) return <Loading />

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <div className="flex flex-col justify-center text-center">
                <img src={pokemon?.sprites.front_default} className="w-40 mx-auto" alt="" />
                <p className="capitalize text-xl font-bold">{pokemon?.name}</p>
                <p className="capitalize">{pokemon?.types.map( (el, index) => (
                    <span className='me-2' key={el.type.name}>Type {index+1}: {el.type.name}</span>
                ))}</p>
            </div>
        </div>
    )
}

export default Details