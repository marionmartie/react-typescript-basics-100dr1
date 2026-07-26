import { useSearch } from "../store/useSearch"

type SuggestionProp = {
    name: string
}

const Suggestion = ({name}: SuggestionProp) => {
    const fetchPokemon = useSearch((state) => state.fetchPokemon)
    const handleClick = (pokemonName: string) => {
        fetchPokemon(pokemonName)
    }
    return (
        <li>
            <a className="text-blue-400 hover:text-blue-500 cursor-pointer underline" onClick={() => handleClick(name)}>{name}</a>
        </li>
    )
}

export default Suggestion