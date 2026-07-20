import { useSearch } from '../store/useSearch'

const SingleSearch = () => {    
    return (
    <div className='max-w-5xl mx-auto px-8 my-8 text-text-contrast'>
        Search result: {useSearch((state) => state.pokemonName)}
    </div>
    )
}

export default SingleSearch