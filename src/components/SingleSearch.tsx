import { useSearch } from '../store/useSearch'
import Loading from './Loading'
import { Link } from 'react-router'

const SingleSearch = () => {    
    const {pokemon, isLoading} = useSearch()
    
    if (isLoading) return <Loading />

    return (
    <div className='max-w-5xl mx-auto px-8 my-8 text-text-contrast flex items-center'>        
        { pokemon !== null && <img src={pokemon.sprites.front_default}  />}

        <div>
            <p>Name: <Link to={`/details/${pokemon?.id}`}>{pokemon?.name}</Link></p>
            <p>{pokemon?.types.map( (el, index) => (
                <span className='me-2' key={el.type.name}>Type {index+1}: {el.type.name}</span>
            ))}</p>
        </div>
    </div>
    )
}

export default SingleSearch