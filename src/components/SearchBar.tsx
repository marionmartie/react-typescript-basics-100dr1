import { Search } from "lucide-react"
import { useState, type ChangeEvent, type SubmitEvent } from "react"
import { useSearch } from "../store/useSearch"

const SearchButton = () => {
    return (
        <button type="submit" className="bg-brand-primary p-2 rounded-sm">
            <Search color="white" />
        </button>
    )
}

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState<string>("")
    const [isFormValid, setIsFormValid] = useState<boolean>(true)
    const [formMessage, setFormMessage] = useState<string>("")

    const searchPokemon = useSearch((state) => state.setPokemonName)

    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault()
        if (searchInput.trim() === "") {
            setIsFormValid( false )
            setFormMessage( "Please enter a name!" )
            return false
        }
        searchPokemon(searchInput)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-8 my-8 flex gap-2 flex-wrap">
            <input value={searchInput} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} type="text" className="bg-white p-2 rounded-sm w-2/3" />
            <label htmlFor="" className="sr-only">Search Bar</label>
            <SearchButton />
            
            {!isFormValid && <p className="w-full text-text-contrast">{ formMessage }</p>}
        </form>
    )
}

export default SearchBar