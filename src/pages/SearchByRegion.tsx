import Loading from "../components/Loading"
import { useRegions } from "../store/usePokemon"
import { Link } from "react-router"

const SearchByRegion = () => {
    const {data, isFetched, isError, error} = useRegions()

    if (!isFetched) return <Loading />
    if (isError) return <>{error}</>
    if (!data) return <>Empty data!</>

    return (
        <div className='max-w-5xl mx-auto px-8 my-8'>
            <div className="mb-4">
                <h2 className="text-xl font-bold text-text-contrast">Search By Region</h2>
            </div>

            <ul>
                {data.results.map((l, i) =>
                    <li key={l.name} className="text-text-contrast">
                        <span className="me-1">{i+1}. </span>
                        <Link 
                            to={`/search/region/location/${l.name}`} 
                            className="capitalize">{l.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SearchByRegion