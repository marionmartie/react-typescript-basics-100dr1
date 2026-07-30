import { useParams } from "react-router"
import { useSearch } from "../store/useSearch"
import { useEffect } from "react"
import Loading from "../components/Loading"
import Ability from "../components/Ability"

const Details = () => {
    const params = useParams() //use params.pid
    const {pokemon, isLoading, error, fetchPokemon} = useSearch()
    
    useEffect(() => {
        if (params.pid) {
            fetchPokemon(params.pid)
        }
    }, [params.name, fetchPokemon])

    if (isLoading) return <Loading />

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <div className="flex flex-col justify-center text-center">
                <img src={pokemon?.sprites.front_default} className="w-40 mx-auto" alt="" />
                <p className="capitalize text-xl font-bold">{pokemon?.name}</p>
                <p className="capitalize">{pokemon?.types.map( (el, index) => (
                    <span className='me-2' key={el.type.name}>Type {index+1}: {el.type.name}</span>
                ))}</p>
            </div>

            <h2 className="text-2xl my-2 font-bold">Stats</h2>
            <table className="">
                <tbody>
                    {pokemon?.stats.map((el, index) => 
                    <tr key={index} className="">
                        <th className="border px-2 py-1 text-left capitalize">{el.stat.name}</th>
                        <td className="border px-2 py-1">{el.base_stat}</td>
                    </tr>)}
                </tbody>
            </table>

            <h2 className="text-2xl mb-2 mt-4 font-bold">Abilities</h2>
            <ul className="list-disc ms-4">
                {pokemon?.abilities.map( (el, index) => 
                    <li key={index} className="capitalize">
                        <p>{el.ability.name}</p>
                        <Ability name={el.ability.name} />
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Details