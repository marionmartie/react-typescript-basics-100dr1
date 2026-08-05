import { usePokemonList } from "../store/usePokemon"
import Loading from "./Loading"
import Suggestion from "./Suggestion"

const SuggestionBar = () => {

    const {data, isLoading, isError, error} = usePokemonList()

    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <div>Empty data</div>

    return (
    <div className="w-full">
        <ul className="flex gap-2">
            <span className="text-text-contrast">Suggestions:</span>
            {data.results.map(({name}) => (
                <Suggestion key={name} name={name} />
            ))}
        </ul>
    </div>
    )
}

export default SuggestionBar