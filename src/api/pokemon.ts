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
    }[],
    stats: {
        base_stat: string
        stat: {
            name: string
        }
    }[],
    abilities: {
        ability: {
            name: string
        }
    }[]
}

export type Ability = {
    effect_entries: {
        effect: string
        language: {
            name: string
        }
        short_effect: string
    }[]
}

export type PokemonList = {
    results: {
        name: string
    }[]
}

export async function fetchPokemon(nameOrId: string | number): Promise<Pokemon> {
    const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`)
    if (!res.ok) throw new Error('Failed to fetch Pokemon')
    return res.json()
}

export async function fetchAbility(name: string): Promise<Ability> {
    const res = await fetch(`${BASE_URL}/ability/${name}`)
    if (!res.ok) throw new Error('Failed to fetch ability')
    return res.json()
} 

export async function fetchRandomPokemon(): Promise<PokemonList> {
    const randomNumber = (Math.floor(Math.random() * 1348) + 1)
    const res = await fetch(`${BASE_URL}/pokemon?limit=3&offset=${randomNumber}`)
    if (!res.ok) throw new Error('Failed to fetch list of Pokemon')
    return res.json()
}