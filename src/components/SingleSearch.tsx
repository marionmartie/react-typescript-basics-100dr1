import { useEffect } from 'react'
import { useSearch } from '../store/useSearch'

const SingleSearch = () => {    
    const {pokemon} = useSearch()
    
    return (
    <div className='max-w-5xl mx-auto px-8 my-8 text-text-contrast'>
        {/* Search result: {useSearch((state) => state.pokemon?.name)} */}
        
        { pokemon !== null && <img src={pokemon.sprites.front_default}  />}
    </div>
    )
}

export default SingleSearch