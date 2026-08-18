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

export type Types = {
    results: {
        name: string
        url: string
    }[]
}

export type Type = {
    pokemon: {
        pokemon: {
            name: string
        }
    }[],
    sprites: {
        "generation-viii": {
            "sword-shield": {
                "symbol_icon": string
            }
        }
    }
}

export type Generations = {
    results: {
        name: string
    }[]
}

export type Generation = {
    main_region: {
        name: string
    },
    pokemon_species: {
        name: string
    }[]
}

export type Regions = {
    results: {
        name: string
    }[]
}

export type Region = {
    locations: {
        name: string
    }[]
}

export type Location = {
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

export async function fetchTypes(): Promise<Types> {
    const res = await fetch(`${BASE_URL}/type/`)
    if (!res.ok) throw new Error('Failed to fetch types')
    return res.json()
}

export async function fetchType(name: string): Promise<Type> {
    const res = await fetch(`${BASE_URL}/type/${name}?limit=20`)
    if (!res.ok) throw new Error('Failed to fetch Pokemon in this type')
    return res.json()
}

export async function fetchGenerations(): Promise<Generations> {
    const res = await fetch(`${BASE_URL}/generation/`)
    if (!res.ok) throw new Error('Failed to load generations')
    return res.json()
}

export async function fetchGeneration(name: string): Promise<Generation> {
    const res = await fetch(`${BASE_URL}/generation/${name}`)
    if (!res.ok) throw new Error('Failed to load Pokemon from this generation')
    return res.json()
}

export async function fetchRegions(): Promise<Regions> {
    const res = await fetch(`${BASE_URL}/region/`)
    if (!res.ok) throw new Error('Failed to load regions')
    return res.json()
}

export async function fetchRegion(name: string): Promise<Regions> {
    const res = await fetch(`${BASE_URL}/region/${name}`)
    if (!res.ok) throw new Error('Failed to load Pokemon from this region')
    return res.json()
}
export async function fetchLocations(name: string): Promise<Location> {
    const res = await fetch(`${BASE_URL}/location/${name}`)
    if (!res.ok) throw new Error('Failed to load location')
    return res.json()
}