import { useGeneration } from "../store/usePokemon"
import Loading from "../components/Loading"
import { useParams } from "react-router"
import { Link } from "react-router"

type GenerationProps = {
    arrayOfPokemon: {
        name: string
    }[]
}

const PokemonByGeneration = () => {
    const params = useParams<{name: string}>()
    const {data, isLoading, isError, error} = useGeneration(params.name ?? '')

    if (!params.name) return <>Parameters are empty</>
    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <>Empty data sets!</>

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <h2 className="capitalize font-bold text-xl">{params.name}</h2>
            <p className="capitalize">Region: {data.main_region.name}</p>

            <PokemonList arrayOfPokemon={data.pokemon_species} />
            
        </div>
    )
}

const PokemonList = ({arrayOfPokemon}: GenerationProps) => {
    return (
        <ul>
            {arrayOfPokemon.map((p, i) => 
            <li key={i} className="capitalize flex gap-1">
                <span>{i + 1}.</span>
                <Link to={`/details/${p.name}`}>{p.name}</Link>
            </li>)}
        </ul>
    )
}

export default PokemonByGeneration