import {create} from 'zustand'

type Pokemon = {
    name: string | null
    sprites: {front_default: string}
}

type PokemonStore = {
    pokemon: Pokemon | null
    isLoading: boolean
    error: string | null
    fetchPokemon: (name: string) => Promise<void>
}

export const useSearch = create<PokemonStore>()((set) => ({
    pokemon: null,
    isLoading: false,
    error: null,
    fetchPokemon: async(name: string) => {
        set({isLoading: true, error: null})

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            if (!res.ok) throw new Error(`Pokemon ${name} not found`)
            const data: Pokemon = await res.json()
            set({pokemon: data, isLoading: false})
        } catch (err) {
            const message = err instanceof Error ? err.message : "An error has occurred"
            set({error: message, isLoading: false, pokemon: null})
        }
    }
}))