const BASE_URL = 'https://pokeapi.co/api/v2'

export type Pokemon = {
    id: number
    name: string
    sprites: {
        front_default: string
    }
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]
}

export async function fetchPokemon(nameOrId: string | number): Promise<Pokemon> {
    const res = await fetch (`${BASE_URL}/pokemon/${nameOrId}`)
    if (!res.ok) throw new Error('Failed to fetch Pokemon')
    return res.json()
}