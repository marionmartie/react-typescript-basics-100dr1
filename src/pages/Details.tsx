import { useParams } from "react-router"
import { usePokemon } from "../store/usePokemon"
import Loading from "../components/Loading"
import Ability from "../components/Ability"

const Details = () => {
    const params = useParams<{pid: string}>() //use params.pid

    if (!params.pid) {
        return <div>Empty Parameters!</div>
    }

    const {data, isLoading, isError, error} = usePokemon()

    if (isLoading) return <Loading />
    if (isError) return <>{error}</>
    if (data === undefined) return <div>Empty data</div>

    return (
        <div className="text-text-contrast max-w-5xl mx-auto px-8 my-8">
            <div className="flex flex-col justify-center text-center">
                <img src={data.sprites.front_default} className="w-40 mx-auto" alt="" />
                <p className="capitalize text-xl font-bold">{data.name}</p>
                <p className="capitalize">{data.types.map( (el, index) => (
                    <span className='me-2' key={el.type.name}>Type {index+1}: {el.type.name}</span>
                ))}</p>
            </div>

            <h2 className="text-2xl my-2 font-bold">Stats</h2>
            <table className="">
                <tbody>
                    {data.stats.map((el, index) => 
                    <tr key={index} className="">
                        <th className="border px-2 py-1 text-left capitalize">{el.stat_name}</th>
                        <td className="border px-2 py-1">{el.base_stat}</td>
                    </tr>)}
                </tbody>
            </table>

            <h2 className="text-2xl mb-2 mt-4 font-bold">Abilities</h2>
            <ul className="list-disc ms-4">
                {data.abilities.map( (el, index) => 
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