import SearchBar from "../components/SearchBar"
import SingleSearch from "../components/SingleSearch"
import Welcome from "../components/Welcome"
import SearchBy from "../components/SearchBy"
import { useSearch } from "../store/useSearch"

const HomePage = () => {
  const searchName = useSearch((state) => state.pokemon?.name)
  return (
    <>
      <Welcome></Welcome>
      <SearchBar />
      { searchName !== '' && <SingleSearch /> }

      <div className="max-w-5xl mx-auto px-8 my-8 flex flex-col md:flex-row gap-8">
        <SearchBy>
          Search by Type
        </SearchBy>
        <SearchBy>
          Search by Region
        </SearchBy>
      </div>
    </>
  )
}

export default HomePage