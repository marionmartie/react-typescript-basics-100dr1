import { useSearch } from '../store/useSearch'
import Loading from './Loading'

const SingleSearch = () => {    
    const {pokemon, isLoading} = useSearch()
    
    if (isLoading) return <Loading />

    return (
    <div className='max-w-5xl mx-auto px-8 my-8 text-text-contrast'>        
        { pokemon !== null && <img src={pokemon.sprites.front_default}  />}
    </div>
    )
}

export default SingleSearch