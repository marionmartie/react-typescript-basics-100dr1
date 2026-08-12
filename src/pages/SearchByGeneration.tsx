import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import Loading from "../components/Loading"
import { useGenerations } from "../store/usePokemon"
import { Link } from "react-router"

type SearchByGenerationProps = {
  generationName: string
  setGenerationName: Dispatch<SetStateAction<string>>
}

const SearchByGeneration = () => {
  const {data, isLoading, isError, error} = useGenerations()
  const [generationName, setGenerationName] = useState('')
  
  if (isLoading) return <Loading />
  if (isError) return <>{error}</>
  if (data === undefined) return <>Empty data!</>

  const typeList = generationName 
    ? data.results.filter( t => t.name.includes(generationName))
    : data.results

  return (
    <div className='max-w-5xl mx-auto px-8 my-8'>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-text-contrast">Search By Type</h2>
        <p className="text-text-contrast">Click a type to browse Pokemons in that type</p>
      </div>

      <SearchBar generationName={generationName} setGenerationName={setGenerationName} />

      <ul className="">
        {typeList.map((el, index) => 
          <li key={index} className="text-text-contrast">
            <span className="me-1">{index+1}.</span>
            <Link to={`/search/generation/${el.name}`} className="capitalize">{el.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

const SearchBar = ({generationName, setGenerationName}: SearchByGenerationProps) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGenerationName(e.target.value)
  }
  return (
    <>
      <input 
        onChange={handleTextChange} 
        type="text"
        className="border-text-contrast border rounded-md bg-text-contrast mb-4 text-lg" />
    </>
  )
}

export default SearchByGeneration