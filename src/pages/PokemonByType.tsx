import { useParams } from "react-router"
import { useType } from "../store/usePokemon"
import Loading from "../components/Loading"
import BackToTypes from "../components/BackToTypes"
import PokemonList from "../components/PokemonList"
import { usePaginationStore } from "../store/usePaginationStore"
import PaginationButton from "../components/PaginationButton"


const PAGE_SIZE = 10

const PokemonByType = () => {
    const params = useParams<{name: string}>() //use params.pid
    const {data, isLoading, error, isError} = useType(params.name ?? '')
    const page = usePaginationStore((state) => state.page)

    if (!params.name) return <>Parameters are empty</>
    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <>Empty data sets!</>

    const totalPages = Math.ceil(data.pokemon.length / PAGE_SIZE)
    const start = (page-1) * PAGE_SIZE
    const currentPage = data.pokemon.slice(start, start + PAGE_SIZE)

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <BackToTypes />
            <div className="flex items-center gap-2">
                <img className="w-8" src={data.sprites["generation-viii"]["sword-shield"]["symbol_icon"]} alt="" />
                <h2 className="text-xl capitalize">{params.name}</h2>
            </div>

            <PokemonList pokemon={currentPage} />

            <PaginationButton total_pages={totalPages} page_size={PAGE_SIZE} />
        </div>
    )
}



export default PokemonByType