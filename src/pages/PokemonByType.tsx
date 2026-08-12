import { Link, useParams } from "react-router"
import { useType } from "../store/usePokemon"
import Loading from "../components/Loading"
import BackToTypes from "../components/BackToTypes"

type PokemonTypeProps = {
    arrayOfPokemon: { 
        pokemon: {
            name: string
        } 
    }[]
}

const PokemonByType = () => {
    const params = useParams<{name: string}>() //use params.pid
    const {data, isLoading, error, isError} = useType(params.name ?? '')

    if (!params.name) return <>Parameters are empty</>
    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <>Empty data sets!</>

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <BackToTypes />
            <div className="flex items-center gap-2">
                <img className="w-8" src={data.sprites["generation-viii"]["sword-shield"]["symbol_icon"]} alt="" />
                <h2 className="text-xl capitalize">{params.name}</h2>
            </div>

            <PokemonList arrayOfPokemon={data.pokemon} />
        </div>
    )
}

const PokemonList = ({arrayOfPokemon}: PokemonTypeProps) => {
    return(
        <ul className="mt-4">
            {arrayOfPokemon.map((p, i) => 
                <li key={i} className="capitalize my-1 flex gap-1">
                    <span>{i+1}.</span>
                    <Link to={`/details/${p.pokemon.name}`}>{p.pokemon.name}</Link>
                </li>)}
        </ul>
    )
}

export default PokemonByType