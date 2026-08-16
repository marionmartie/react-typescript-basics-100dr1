import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type PokemonEntry = {
    pokemon: {
        name: string,
    },
    slot: number
}

type TypeResponse = {
    id: number
    name: string
    pokemon: PokemonEntry[]
}

async function fetchItems(page: number): Promise<TypeResponse> {
    const res = await fetch(`https://pokeapi.co/api/v2/type/fighting`)
    if (!res.ok) throw new Error('Unable to fetch items')
    return res.json()
}

const PAGE_SIZE = 10

const Pagination = () => {
    const [page, setPage] = useState(1)    

    const {data, isPending, error, isError, isPlaceholderData} = useQuery({
        queryKey: ['type'] as const,
        queryFn: () => fetchItems(page),
    })

    if (isPending) return <>Loading...</>
    if (isError) return <>{error}</>

    const totalPages = Math.ceil(data.pokemon.length / PAGE_SIZE)
    const start = (page-1) * PAGE_SIZE
    const currentPage = data.pokemon.slice(start, start + PAGE_SIZE)

    return (
        <div>
            <ul>
                {currentPage.map((entry) => (
                    <li key={entry.pokemon.name}>{entry.pokemon.name}</li>
                ))}
            </ul>

            <button
                className="px-1 py-2 m-2 border border-red-500 cursor-pointer"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
            >Previous</button>
            <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-1 py-2 m-2 border border-red-500 cursor-pointer"
            >Next</button>
        </div>
    )
}

export default Pagination