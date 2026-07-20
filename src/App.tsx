import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import SingleSearch from "./components/SingleSearch"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <>
      <Nav />
      <Welcome></Welcome>
      <SearchBar />
      <SingleSearch name="" />
      <Footer />
    </>
  )
}

export default App