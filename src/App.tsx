import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <>
      <Nav />
      <Welcome></Welcome>
      <SearchBar />
      <Footer />
    </>
  )
}

export default App