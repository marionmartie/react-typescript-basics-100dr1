import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import SingleSearch from "./components/SingleSearch"
import Welcome from "./components/Welcome"
import { useSearch } from "./store/useSearch"

const App = () => {
  const searchName = useSearch((state) => state.pokemon?.name)
  return (
    <>
      <Nav />
      <Welcome></Welcome>
      <SearchBar />
      { searchName !== '' && <SingleSearch /> }
      <Footer />
    </>
  )
}

export default App