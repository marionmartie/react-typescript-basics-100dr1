import { useSearch } from "../store/useSearch"

const Suggestion = ({name}: {name: string}) => {
    const setPokemon = useSearch((state) => state.setPokemon)

    const handleClick = (pokemonName: string) => {
        setPokemon(pokemonName)
    }
    return (
        <li className="capitalize">
            <a className="text-blue-400 hover:text-blue-500 cursor-pointer underline" onClick={() => handleClick(name)}>{name}</a>
        </li>
    )
}

export default Suggestion