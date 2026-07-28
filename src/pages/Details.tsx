import { useParams } from "react-router"
import { useSearch } from "../store/useSearch"
import { useEffect } from "react"

const Details = () => {
    const params = useParams() //use params.pid
    const {pokemon, isLoading, error, fetchPokemon} = useSearch()
    
    useEffect(() => {
        if (params.pid) fetchPokemon(params.pid)
    }, [params.name, fetchPokemon])
    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <img src={pokemon?.sprites.front_default} alt="" />
            <p>
                {pokemon?.types.map(el => el.type.name)}
            </p>
        </div>
    )
}

export default Details