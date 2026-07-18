import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="max-w-5xl mx-auto px-8 my-8 flex gap-2">
            <input type="text" className="bg-white p-2 rounded-sm w-full" />
            <label htmlFor="" className="sr-only">Search Bar</label>
            <button className="bg-brand-primary p-2 rounded-sm">
                <Search color="white" />
            </button>
        </div>
    )
}

export default SearchBar