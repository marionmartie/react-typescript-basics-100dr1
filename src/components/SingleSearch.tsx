import { usePokemon } from '../store/usePokemon'
import Loading from './Loading'
import { Link } from 'react-router'

const SingleSearch = ({name}: {name: string}) => {    
    const {data, isLoading, isError, error} = usePokemon(name)
    
    if (isLoading) return <Loading />

    return (
    <div className='max-w-5xl mx-auto px-8 my-8 text-text-contrast flex items-center'>        
        { data!.name !== null && <img src={data!.sprites.front_default}  />}

        <div>
            <p className='capitalize'>Name: <Link to={`/details/${data!.id}`}>{data!.name}</Link></p>
            <p>{data!.types.map( (el, index) => (
                <span className='me-2 capitalize' key={el.type.name}>Type {index+1}: {el.type.name}</span>
            ))}</p>
        </div>
    </div>
    )
}

export default SingleSearch