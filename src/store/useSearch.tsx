import {create} from 'zustand'

type Pokemon = {
    id: number
    name: string | null
    sprites: {front_default: string}
    types: Array<PokemonType>
    stats: Array<PokemonStats>
    abilities: Array<PokemonAbilities>
}

type PokemonType = {
    type: {
        name: string
        url: string
    }
}

type PokemonStats = {
    base_stat: number,
    stat: {
        name: string
    }
}

type PokemonAbilities = {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
}

type PokemonStore = {
    pokemon: Pokemon | null
    isLoading: boolean
    error: string | null
    fetchPokemon: (name: string) => Promise<void>
}

type Ability = {
    effect_entries: {
        effect: string
        language: {
            name: string
        }
        short_effect: string
    }[]
}

type AbilityStore = {
    abilities: Record<string, Ability>
    loadingNames: Set<string>
    error: string | null
    fetchAbility: (name: string) => Promise<void>
}

type PokemonName = {
    pokemon: string | number | null
    setPokemon: (name: string | null) => void
}

export const useSearch = create<PokemonName>()((set) => ({
    pokemon: '',
    setPokemon: (name) => set({pokemon: name})
}))

export const useAbilityStore = create<AbilityStore>()((set, get) => ({
    abilities: {},
    loadingNames: new Set<string>,
    error: null,

    fetchAbility: async(name: string) => {
        const {abilities, loadingNames} = get()

        // Check if name is already cached, skip
        if (abilities[name] || loadingNames.has(name)) return

        set({loadingNames: new Set(loadingNames).add(name), error: null})

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/ability/${name}`)
            if (!res.ok) throw new Error(`Ability ${name} not found`)

            const data: Ability = await res.json()

            set((state) => {
                const nextLoading = new Set(state.loadingNames)
                nextLoading.delete(name)
                return {
                    abilities: {...state.abilities, [name]: data},
                    loadingNames: nextLoading
                }
            })
        } catch (err) {
            const message = err instanceof Error ? err.message : "An error fetching ability has occurred"
            set((state) => {
                const nextLoading = new Set(state.loadingNames)
                nextLoading.delete(name)
                return {err: message, loadingNames: nextLoading}
            })
        }
    }
}))