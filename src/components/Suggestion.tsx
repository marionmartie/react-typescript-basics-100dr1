import { usePokemon } from "../store/usePokemon"

const Suggestion = ({name}: {name: string}) => {
    // const {data, isLoading, isError, error} = usePokemon(name)

    // const handleClick = (pokemonName: string) => {
    //     data = usePokemon(pokemonName)
    // }
    return (
        <li className="capitalize">
            {/* <a className="text-blue-400 hover:text-blue-500 cursor-pointer underline" onClick={() => handleClick(name)}>{name}</a> */}
            <a className="text-blue-400 hover:text-blue-500 cursor-pointer underline">{name}</a>
        </li>
    )
}

export default Suggestion