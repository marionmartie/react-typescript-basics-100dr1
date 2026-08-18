import { useGeneration } from "../store/usePokemon"
import Loading from "../components/Loading"
import { useParams } from "react-router"
import PokemonList from "../components/PokemonList"
import PaginationButton from "../components/PaginationButton"
import { usePaginationStore } from "../store/usePaginationStore"

const PAGE_SIZE = 10

const PokemonByGeneration = () => {
    const params = useParams<{name: string}>()
    const {data, isLoading, isError, error} = useGeneration(params.name ?? '')
    const page = usePaginationStore((state) => state.page)

    if (!params.name) return <>Parameters are empty</>
    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <>Empty data sets!</>

    const totalPages = Math.ceil(data.pokemon_species.length / PAGE_SIZE)
    const start = (page-1) * PAGE_SIZE
    const currentPage = data.pokemon_species
        .slice(start, start + PAGE_SIZE)
        .map((species: {name: string}) => ({
            pokemon: {
                name: species.name
            }
        }))

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <h2 className="capitalize font-bold text-xl">{params.name}</h2>
            <p className="capitalize">Region: {data.main_region.name}</p>

            <PokemonList pokemon={currentPage} />
            <PaginationButton total_pages={totalPages} page_size={PAGE_SIZE} />
        </div>
    )
}

export default PokemonByGeneration